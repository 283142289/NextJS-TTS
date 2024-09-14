"use client"

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { supabase } from '../../../lib/supabase';
import { FaSpinner, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaTimes, FaCompress, FaExpand } from 'react-icons/fa';
import axios from 'axios';

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTTSLoading, setIsTTSLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchNewsDetail() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('获取新闻详情时出错:', error);
      } else {
        setNews(data);
      }
    }

    fetchNewsDetail();
  }, [id]);

  const makeAPIRequest = async () => {
    setIsTTSLoading(true);
    setErrorMessage('');
    
    const name = `News${id}`;
    const data = {
      text: news.content || "没有内容，请检查",
      name: name,
      voice: "zh-CN-XiaoxiaoNeural",
      rate: "-4%",
      volume: "+0%"
    };

    try {
      const response = await axios.post('/api/tts', data);
      console.log(response.data);
      const newAudioUrl = `https://fond-nina-ballpo-dba04486.koyeb.app/files/${name}.mp3`;
      setAudioUrl(newAudioUrl);
      playAudio(newAudioUrl);
    } catch (error) {
      console.error('TTS API 请求出错:', error);
      setErrorMessage(`TTS API 请求失败: ${error.message}`);
    } finally {
      setIsTTSLoading(false);
    }
  };

  const playAudio = (url) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(url);
    audioRef.current.play();
    setIsPlaying(true);
    audioRef.current.onended = () => setIsPlaying(false);
    audioRef.current.onloadedmetadata = () => setDuration(audioRef.current.duration);
    audioRef.current.ontimeupdate = () => setCurrentTime(audioRef.current.currentTime);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (audioUrl) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const closeAudioPlayer = () => {
    setShowAudioPlayer(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!news) {
    return <div className="flex justify-center items-center h-screen">加载中...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-32"> {/* 增加底部 padding */}
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <div className="flex items-center text-gray-500 mb-6">
        <span>{news.source}</span>
        <span className="mx-2">·</span>
        <span>{new Date(news.published_at).toLocaleString()}</span>
      </div>
      {news.imageUrl && (
        <div className="mb-6">
          <Image 
            src={news.imageUrl} 
            alt={news.title} 
            width={800} 
            height={400} 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
      )}
      <div className="prose max-w-none">
        <div className="flex items-center mb-4">
          <p className="text-lg leading-relaxed mr-4">🐱‍👤：{news.content}</p>
          <button 
            onClick={makeAPIRequest}
            disabled={isTTSLoading}
            className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 disabled:bg-gray-400 mr-2"
          >
            {isTTSLoading ? <FaSpinner className="animate-spin" /> : "TTS GO~"}
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}
      </div>
      
      {audioUrl && showAudioPlayer && (
        <div className={`fixed ${isMinimized ? 'bottom-4 right-4 w-64' : 'bottom-0 left-0 right-0'} bg-white shadow-lg transition-all duration-300`}>
          <div className="max-w-4xl mx-auto relative p-4">
            <div className="absolute top-2 right-2 flex space-x-2 z-10">
              <button 
                onClick={toggleMinimize}
                className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              >
                {isMinimized ? <FaExpand /> : <FaCompress />}
              </button>
              <button 
                onClick={() => setShowAudioPlayer(false)}
                className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              >
                <FaTimes />
              </button>
            </div>
            {!isMinimized && (
              <>
                <div className="flex items-center mb-2 mt-8">
                  <button 
                    onClick={toggleAudio}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 mr-2"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max={duration} 
                    value={currentTime}
                    onChange={handleTimeChange}
                    className="w-full mr-2"
                  />
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={toggleMute}
                    className="p-2 text-gray-600 hover:text-gray-800 mr-2"
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
              </>
            )}
            {isMinimized && (
              <div className="flex items-center justify-center mt-2">
                <button 
                  onClick={toggleAudio}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {!showAudioPlayer && audioUrl && (
        <button
          onClick={() => setShowAudioPlayer(true)}
          className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-lg"
        >
          <FaPlay />
        </button>
      )}
    </div>
  );
}