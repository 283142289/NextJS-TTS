import React, { useState } from 'react';
import Image from 'next/image';

const TagButton = ({ text, isActive, onClick }) => (
  <button 
    className={`px-4 py-2 rounded-full transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

const NewsCard = ({ title, content, source, time }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="w-1/4 bg-blue-500 text-white p-4 rounded-lg flex flex-col items-center justify-center">
      <p className="text-sm font-bold mb-2">即時快訊</p>
      <Image src="https://picsum.photos/seed/picsum/100/50" alt="Fortune Insight" width={100} height={50} />
    </div>
    <div className="w-3/4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-500">{source} · {time}</p>
    </div>
  </div>
);

const RecommendedNews = () => {
  const tags = ["热门", "港闻", "獨家", "娛樂", "Style", "體育", "財經", "著數"];
  const [activeTag, setActiveTag] = useState("热门");

  const newsData = {
    "热门": [
      {
        title: "本地 | 天文台：八號烈風或暴風信號會至少維持至明日正午12時",
        content: "天文台表示，八號烈風或暴風信號會至少維持至明日正午12時",
        source: "Fortune Insight",
        time: "36 分鐘前"
      },
      // 可以添加更多热门新闻...
    ],
    // 为其他标签添加对应的新闻数据...
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">为你推荐</h1>
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {tags.map((tag, index) => (
          <TagButton 
            key={index} 
            text={tag} 
            isActive={tag === activeTag} 
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>
      {newsData[activeTag]?.map((news, index) => (
        <NewsCard 
          key={index}
          title={news.title}
          content={news.content}
          source={news.source}
          time={news.time}
        />
      ))}
    </div>
  );
};

export default RecommendedNews;