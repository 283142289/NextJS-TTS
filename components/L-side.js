import React from 'react';
import { 
  FaNewspaper, 
  FaMoneyBillWave, 
  FaFutbol, 
  FaEnvelope, 
  FaBook, 
  FaSun, 
  FaFilm, 
  FaPlane, 
  FaUtensils, 
  FaTag,
  FaChevronDown // 添加这个导入
} from 'react-icons/fa';

const iconMap = {
  article: FaNewspaper,
  attach_money: FaMoneyBillWave,
  sports_soccer: FaFutbol,
  mail: FaEnvelope,
  book: FaBook,
  wb_sunny: FaSun,
  movie: FaFilm,
  local_movies: FaFilm,
  flight: FaPlane,
  restaurant: FaUtensils,
  local_offer: FaTag,
};

const SidebarItem = ({ icon, text }) => {
  const IconComponent = iconMap[icon] || FaNewspaper;
  return (
    <div className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-100 cursor-pointer">
      <IconComponent className="text-gray-600" />
      <span className="text-sm text-gray-800">{text}</span>
    </div>
  );
};

const LSide = () => {
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

  return (
    <div className="bg-white shadow-md w-64 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-semibold text-gray-800">全部服務</span>
        <FaChevronDown className="text-gray-600" />
      </div>
      <div className="py-2">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default LSide;
