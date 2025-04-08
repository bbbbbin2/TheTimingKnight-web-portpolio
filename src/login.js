import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import './login.css';



function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', { id, password });
  };

  return (
    <div className="login">
    <Header />

    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
      <p>아직 계정이 없으면 회원가입을 진행해주세요!</p>
      <button className="signup-btn" onClick={() => navigate('/signup')}>
        회원가입
      </button>
    </div>
    </div>
  );
}

export default Login;
