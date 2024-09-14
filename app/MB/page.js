'use client';

import { useState, useEffect } from 'react';
import MBComponent from "../../components/N/MB";

const MBPage = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [ttsAudioUrl, setTtsAudioUrl] = useState(null);

    useEffect(() => {
        fetchAudio();

        // 清理函数
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
            if (ttsAudioUrl) {
                URL.revokeObjectURL(ttsAudioUrl);
            }
        };
    }, []);

    const fetchAudio = async () => {
        try {
            const response = await fetch('/api/proxy');
            if (!response.ok) {
                throw new Error('获取音频失败');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);
        } catch (error) {
            console.error('获取音频时出错:', error);
        }
    };

    const playTTS = async (text) => {
        try {
            const response = await fetch('/api/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error('TTS 音频获取失败');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setTtsAudioUrl(url);
        } catch (error) {
            console.error('获取 TTS 音频时出错:', error);
        }
    };

    return (
        <div>
            <MBComponent />
            {audioUrl && (
                <audio controls>
                    <source src={audioUrl} type="audio/mpeg" />
                    您的浏览器不支持音频元素。
                </audio>
            )}
            <button onClick={() => playTTS('你好，世界！')}>播放 TTS</button>
            {ttsAudioUrl && (
                <audio controls>
                    <source src={ttsAudioUrl} type="audio/mpeg" />
                    您的浏览器不支持音频元素。
                </audio>
            )}
        </div>
    );
};

export default MBPage;