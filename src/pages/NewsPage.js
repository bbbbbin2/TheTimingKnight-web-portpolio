// src/pages/NewsPage.js
import React, { useState } from 'react';
import '../styles/news.css';
// 실제 있는 배너 이미지 파일로 경로 맞춰서 import
// import bannerImg from '../image/bn.png';  
import Header from '../components/Header';

const TABS = ['공지사항', '업데이트', '이벤트'];
const news_DATA = [
  { id: 1, type: '안내', title: '기사는 타이밍 어플 정식 출시 예정', time: '5월 28일' },
  { id: 1, type: '안내', title: '홈페이지 점검 진행 안내', time: '5월 28일' },
  /* … */
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('공지사항');
  const [query, setQuery] = useState('');

  const filtered = news_DATA
    .filter(item => item.title.includes(query))
    .filter(item => activeTab === '공지사항' || item.type === activeTab);

  return (
    <>
      {/* 1️⃣ Header */}
      <Header />
{/* 
      {/* 2️⃣ 배너 (Header 바로 아래) */}
      <div
        className="news-banner"
        // style={{
        //   backgroundImage: `url(${bannerImg})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   height: '240px',
        // }}
      >
      </div> 

      {/* 3️⃣ 나머지 공지사항 리스트 */}
      <div className="news-page">
        <ul className="news-tabs">
          {TABS.map(tab => (
            <li
              key={tab}
              className={tab === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="news-controls">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <ul className="news-list">
          {filtered.map(item => (
            <li key={item.id}>
              <span className="pill">{item.type}</span>
              <span className="title">{item.title}</span>
              <span className="time">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
