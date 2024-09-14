import React from 'react';
import Image from 'next/image';

const Top = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* 左侧部分 */}
      <div className="flex items-center">
        <h1 className="text-purple-600 text-2xl font-bold mr-4">Yahoo!</h1>
        <div className="rounded-full bg-gray-100 px-3 py-2 flex items-center">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" className="ml-2 bg-transparent outline-none border-none focus:ring-0" placeholder="美国总统" />
        </div>
        <button className="ml-4 px-3 py-2 rounded-full bg-purple-500 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>

      {/* 右侧部分 */}
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          <span className="ml-1 text-gray-600">28°C</span>
          <svg className="w-5 h-5 text-gray-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          <span className="ml-1 text-gray-600">东北 8</span>
          <svg className="w-5 h-5 text-yellow-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
        <button className="px-3 py-2 rounded-full bg-gray-200 mr-4">登录</button>
        <button className="px-3 py-2 rounded-full bg-gray-200 mr-4">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.414-1.414A2.003 2.003 0 0118 14.141V10a2.003 2.003 0 01-2.121-2.086l-.707-.707A2.003 2.003 0 0113.141 6H7"></path></svg>
        </button>
        <button className="px-3 py-2 rounded-full bg-gray-200">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Top;
