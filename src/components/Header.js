// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="logo-and-tabs">
       {/* 로고 클릭 시 메인으로 */}
       <Link to="/">
         <img src={logo} alt="기사 타이밍 로고" className="logo" />
       </Link>  
        <nav className="tabs">
          <ul>
            <li><Link to="/">메인</Link></li>  {/* 메인 페이지 이동 */}
            <li className="game-intro">
              <Link to="/characters">게임소개</Link>
              <div className="tooltip">
                <Link to="/worldview" className="tooltip-link">세계관</Link>
                <Link to="/characters" className="tooltip-link">캐릭터/몬스터</Link>
              </div>
            </li>
            <li><Link to="/news">공지사항</Link></li>
            <li><Link to="/gameshop">상점</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
            <li><Link to="/profile">마이페이지</Link></li>
          </ul>
        </nav>
      </div>
      <div className="overlay"></div>
    </header>
  );
}

export default Header;
