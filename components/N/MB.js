"use client"
import { useState } from 'react';
import { FaHome, FaUser, FaFile, FaCog } from 'react-icons/fa';

const menuItems = [
  { icon: FaHome, title: '首页', content: '首页内容' },
  { icon: FaUser, title: '用户', content: '用户内容' },
  { icon: FaFile, title: '文档', content: '文档内容' },
  { icon: FaCog, title: '设置', content: '设置内容' },
];

export default function MBapp() {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div className="flex h-screen">
      {/* 左侧导航栏 */}
      <nav className="w-64 bg-gray-800 text-white">
        <ul className="py-4">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                activeItem === item ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveItem(item)}
            >
              <item.icon className="h-6 w-6 mr-3" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 右侧内容区 */}
      <main className="flex-1 p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">{activeItem.title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700">{activeItem.content}</p>
        </div>
      </main>
    </div>
  );
}

