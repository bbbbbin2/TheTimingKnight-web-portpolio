import React, { useEffect, useState } from 'react';
import '../styles/MainPage.css';
import Header from '../components/Header.js';
import character from '../image/character.png';
import downloadIcon from '../image/ko_googleplay.svg';
import logo2 from '../image/logo2.png';
import point from '../image/point.png';
import pp from '../image/pp.png';
import monster from '../image/monster.png';


function MainPage() {
  const [username, setUsername] = useState(null); // 로그인된 유저의 유저네임 상태

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 토큰이 있을 경우, JWT에서 유저 정보를 추출하거나 API 호출로 유저 정보를 가져옵니다.
      const decodedToken = decodeJwt(token); // decodeJwt 함수는 JWT 토큰을 디코딩하는 함수입니다.
      if (decodedToken) {
        setUsername(decodedToken.sub); // 'sub'는 JWT에서 유저 이름이 저장된 부분
      }
    }
  }, []);

  const decodeJwt = (token) => {
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload)); // base64로 인코딩된 payload를 디코딩
      return decoded;
    } catch (e) {
      console.error('JWT 디코딩 오류:', e);
      return null;
    }
  };

  const navigateToLogin = () => {
    window.location.href = '/login'; // 로그인 페이지로 이동
  };

  const navigateToDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1nI0KzoqhH6snnJA6GDedj4ihMGP5qsKK/view?usp=sharing'; // 다운로드 페이지로 이동
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      // 서버에 로그아웃 요청 (선택)
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });

      // 토큰 삭제
      localStorage.removeItem('token');

      // 로그인 페이지로 이동
      window.location.href = '/login';
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="MainPage">
      <Header />

      <img src={logo2} alt="Logo2" className="logo2" />
      <img src={point} alt="Point" className="point" />

      {/* MainPage.js */}
<div className="sidebar">
  <div className="character-box">
    <img 
      src={character} 
      alt="캐릭터" 
      className="character" 
      onClick={navigateToLogin} 
      style={{ cursor: 'pointer' }} 
    />
    {/* 이미지 위 오버레이 텍스트 */}
    <p 
      className="login-overlay" 
      onClick={navigateToLogin}
    >
      {username || '로그인 / 회원가입'}
    </p>
  </div>

  {/* 기존 auth-links는 더 이상 필요없습니다 */}
  {/*
  <div className="auth-links">
    {username ? (
      <p className="login-link" style={{ cursor: 'pointer' }}>
        {username}
      </p>
    ) : (
      <p className="login-link" onClick={navigateToLogin}>
        로그인 / 회원가입
      </p>
    )}
  </div>
  */}

  {/* 로그아웃 버튼 */}
  {username && (
    <button id="logoutBtn" onClick={handleLogout}>
      로그아웃
    </button>
  )}

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
