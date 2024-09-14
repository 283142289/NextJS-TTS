"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import RecommendedNews from '../../components/RecommendedNews';
import LSide from '../../components/L-side';
import A_side from '../../components/A-side';
import Th_box from '../../components/th-box';
import N_main_box from '../../components/N/main-box';
import Top from '../../components/top';
import { supabase } from '../../lib/supabase';

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center justify-start space-x-2 py-2 px-4 hover:bg-gray-100 cursor-pointer">
    <span className="material-icons text-xl">{icon}</span>
    <span className="text-sm">{text}</span>
  </div>
);

const TagButton = ({ text, isActive, onClick }) => (
  <button 
    className={`px-4 py-2 ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
    onClick={onClick}
  >
    {text}
  </button>
);

const NewsCard = ({ id, title, content, source, time, imageUrl }) => (
  <Link href={`/news/${id}`} className="block">
    <div className="flex items-start space-x-4 mb-4 border-b pb-4 hover:bg-gray-50 transition duration-300">
      {imageUrl && (
        <div className="w-1/4">
          <Image src={imageUrl} alt={title} width={200} height={150} objectFit="cover" />
        </div>
      )}
      <div className={imageUrl ? "w-3/4" : "w-full"}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {content && <p className="text-gray-600 mb-2">{content.substring(0, 100)}...</p>}
        <p className="text-sm text-gray-500">{source} · {time}</p>
      </div>
    </div>
  </Link>
);

export default function News() {
  const sidebarItems = [
    { icon: "article", text: "新闻" },
    { icon: "attach_money", text: "财经" },
    { icon: "sports_soccer", text: "體育" },
    { icon: "mail", text: "Mail" },
    { icon: "book", text: "字典" },
    { icon: "wb_sunny", text: "天气" },
    { icon: "movie", text: "娛樂圈" },
    { icon: "local_movies", text: "電影" },
    { icon: "flight", text: "旅遊" },
    { icon: "restaurant", text: "Food" },
    { icon: "local_offer", text: "著數" },
  ];

  const tags = ["焦點", "娛樂", "財經", "Style", "購物", "搜選"];
  const [activeTag, setActiveTag] = useState("焦點");
  const [newsDatax, setNewsDatax] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize =3;

  useEffect(() => {
    const fetchNewsData = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_at', { ascending: false }) // 添加这行来按发布日期降序排序
        .range(currentPage * pageSize, (currentPage + 1) * pageSize - 1)
      
      if (error) {
        console.error('获取新闻数据时出错:', error);
      } else {
        // 只在第一页时替换数据，其他情况下追加数据
        setNewsDatax(prevData => currentPage === 0 ? data : [...prevData, ...data]);
      }
    };
    fetchNewsData();
  }, [currentPage]); // 添加 currentPage 作为依赖项

  const loadMoreNews = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const newsData = {
    "焦點": [
      {
        title: "颱風摩羯逼近 天文台預計今晚發八號信號",
        content: "天文台預計，颱風摩羯將於今晚登陸香港，預計將發出八號烈風或暴風信號。",
        source: "Yahoo新聞",
        time: "1 小時前",
        imageUrl: "/typhoon-news.jpg"
      },
      {
        title: "立法會通過新法案：加強網絡安全管理",
        content: "立法會今日通過了《網絡安全條例》，旨在提高本地企業的網絡安全意識。",
        source: "am730",
        time: "2 小時前"
      },
    ],
    "娛樂": [
      {
        title: "娛樂--颱風摩羯逼近 天文台預計今晚發八號信號",
        content: "天文台預計，颱風摩羯將於今晚登陸香港，預計將發出八號烈風或暴風信號。",
        source: "Yahoo新聞",
        time: "1 小時前",
        imageUrl: "/typhoon-news.jpg"
      },
      {
        title: "立法會通過新法案：加強網絡安全管理",
        content: "立法會今日通過了《網絡安全條例》，旨在提高本地企業的網絡安全意識。",
        source: "am730",
        time: "2 小時前"
      },
    ],
    "財經": [
      {
        title: "財經-颱風摩羯逼近 天文台預計今晚發八號信號",
        content: "天文台預計，颱風摩羯將於今晚登陸香港，預計將發出八號烈風或暴風信號。",
        source: "Yahoo新聞",
        time: "1 小時前",
        imageUrl: "/typhoon-news.jpg"
      },
      {
        title: "立法會通過新法案：加強網絡安全管理",
        content: "立法會今日通過了《網絡安全條例》，旨在提高本地企業的網絡安全意識。",
        source: "am730",
        time: "2 小時前"
      },
    ],
  };

  return (
    <>
      <Top />
      <div className="flex">
        <LSide />
        <div className="w-4/5 p-4">
          <div className="bg-red-500 text-white p-4 mb-4 flex justify-between items-center">
            <span>颱風摩羯 天文台 18:20 將發出八號信號</span>
            <MdArrowForward />
          </div>
          <div className="flex space-x-4 mb-6 border-b">
            {tags.map((tag, index) => (
              <TagButton 
                key={index} 
                text={tag} 
                isActive={tag === activeTag} 
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
       
          {newsDatax.map((news, index) => (
            <NewsCard 
              key={index}
              id={news.id}
              title={news.title}
              content={news.content}
              source={news.source}
              time={news.published_at}
              imageUrl={news.imageUrl}
            />
          ))}
          <button onClick={loadMoreNews} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            加载更多
          </button>
        </div>
      </div>
      <RecommendedNews/>
     
      
      {JSON.stringify(newsDatax)}
      
     
      <div className="flex mt-8">
        <div className="w-3/5 pr-4">
          <Th_box/>
        </div>
        <div className="w-2/5 pl-4">
          <A_side/>
        </div>
      </div>
      <N_main_box/>
    </>
  );
}
