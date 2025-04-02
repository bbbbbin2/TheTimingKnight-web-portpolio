import React from 'react';
import './App.css';
import logo from './image/logo.png';  // 로고 이미지
import character from './image/character.png';  // 캐릭터 이미지
import downloadIcon from './image/ko_googleplay.svg';  // 다운로드 아이콘
import pp from './image/pp.png';  // 호버 시 나타날 이미지
import logo2 from './image/logo2.png';
import point from './image/point.png';
import monster from "./image/monster.png"; // ✅ 올바른 상대 경로

function App() {
  const navigateToLogin = () => {
    window.location.href = '/login';  // 로그인 페이지로 이동
  };

  const navigateToDownload = () => {
    window.location.href = '/download';  // 다운로드 페이지로 이동
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-and-tabs">
          <img src={logo} alt="기사 타이밍 로고" className="logo" />
          <nav className="tabs">
            <ul>
              <li><a href="#home">메인</a></li>
              <li className="game-intro">
                <a href="#intro">게임소개</a>
                <div className="tooltip">
                  <a href="worldview.html" className="tooltip-link">세계관</a>
                  <a href="characters.html" className="tooltip-link">캐릭터/몬스터</a>
                  <a href="creator.html" className="tooltip-link">제작자</a>
                </div>
              </li>
              <li><a href="#news">공지사항</a></li>
              <li><a href="#store">상점</a></li>
              <li><a href="#community">커뮤니티</a></li>
              <li><a href="#profile">마이페이지</a></li>
            </ul>
          </nav>
        </div>
        <div className="overlay"></div>
      </header>

      <img src={logo2} alt="Logo2" className="logo2" />
      <img src={point} alt="Point" className="point" />

      
      <div className="sidebar">
        <div className="character-box">
          <img 
            src={character} 
            alt="캐릭터" 
            className="character" 
            onClick={navigateToLogin} /* 클릭 시 로그인 페이지로 이동 */
            style={{ cursor: "pointer" }} /* 클릭 가능하게 커서 변경 */
          />
        </div>
              
            <div className="monster-container">
            <img src={monster} alt="몬스터" className="monster" />
            <img src={pp} alt="호버 이미지" className="pp-image" />
          </div>
        <div className="download-section">
          <img src={downloadIcon} alt="다운로드" className="download-icon" onClick={navigateToDownload} />
        </div>
      </div>
    </div>
  );
}

export default App;
