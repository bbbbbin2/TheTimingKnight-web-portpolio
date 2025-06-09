import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Logo from '../pages/Logo.js';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });
  
      if (response.status === 403) {
        setError('로그인 권한이 없습니다.');
        return;
      }
  
      let data;
      if (response.ok) {
        data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', email);
        alert('로그인 성공!');
        navigate('/');
      } else {
        data = await response.text();
        const errorMessage = data || '로그인 실패';
        setError(errorMessage);
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      setError(' 아이디 또는   비밀번호를 정확히 입력해 주세요.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin(e);
    }
  };

  return (
    <div className="login-page">
      {/* 로고 섹션 */}
      <Logo />
      <div className="logo-section">
        
        <h1 className="logo-title">기사는 타이밍</h1>
        <div className="logo-underline"></div>
      </div>

      {/* 로그인 폼 */}
      <div className="login-container">
        <div className="login-form">
          {/* 이메일 입력 */}
          <div className="input-group">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="login-input"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="input-group">
            <input
              type="password"
              placeholder="비밀번호 (영문, 숫자, 특수문자 8~16자)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="login-input"
            />
          </div>

          {/* 로그인 유지 체크박스 */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              className="login-checkbox"
            />
            <label htmlFor="keepLoggedIn" className="checkbox-label">
              로그인 유지
            </label>
          </div>

          {/* 에러 메시지 */}
          {error && <p className="error-message">{error}</p>}

          {/* 로그인 버튼 */}
          <button
            onClick={handleLogin}
            className="login-button"
          >
            로그인
          </button>
        </div>

        {/* 추가 링크들 */}
        <div className="login-links">
          <div className="link-group">
            <button className="link-button">아이디 찾기</button>
            <span className="link-separator">|</span>
            <button className="link-button">비밀번호 찾기</button>
            <span className="link-separator">|</span>
            <button 
              className="link-button" 
              onClick={() => navigate('/signup')}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>

      {/* 소셜 로그인 */}
      {/* <div className="social-login">
        <div className="social-text">또는 다른 방법으로 로그인</div>
        <div className="social-buttons">
          <button className="social-button kakao">카카오</button>
          <button className="social-button naver">네이버</button>
        </div>
      </div> */}
    </div>
  );
}

export default Login;