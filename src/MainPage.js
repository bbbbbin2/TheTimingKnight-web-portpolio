//메인페이지
import React from 'react';
import './MainPage.css'; // CSS도 따로 관리하면 좋음
import Header from './Header.js';
import character from './image/character.png';
import downloadIcon from './image/ko_googleplay.svg';
import pp from './image/pp.png';
import logo2 from './image/logo2.png';
import point from './image/point.png';
import monster from './image/monster.png';

function MainPage() {
  const navigateToLogin = () => {
    window.location.href = '/login'; // 로그인 페이지로 이동
  };

  const navigateToDownload = () => {
    window.location.href = '/download'; // 다운로드 페이지로 이동
  };

  return (
    <div className="MainPage">
        
      <Header />

      <img src={logo2} alt="Logo2" className="logo2" />
      <img src={point} alt="Point" className="point" />

      <div className="sidebar">
        <div className="character-box">
          <img 
            src={character} 
            alt="캐릭터" 
            className="character" 
            onClick={navigateToLogin} 
            style={{ cursor: 'pointer' }} 
          />
        </div>

        <div className="monster-container">
          <img src={monster} alt="몬스터" className="monster" />
          <img src={pp} alt="호버 이미지" className="pp-image" />
        </div>

        <div className="download-section">
          <img 
            src={downloadIcon} 
            alt="다운로드" 
            className="download-icon" 
            onClick={navigateToDownload} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
