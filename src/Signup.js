//회원가입 페이지
import React, { useState } from 'react';
import Header from './Header';
import './Signup.css';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 여기에 회원가입 처리 로직 추가 (예: API 요청)
    console.log('회원가입 정보:', { id, password });
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="Signup">
    <div className="signup-container">
    <Header />
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
      <div className="input-with-button">
        <input type="text" placeholder="아이디를 입력해주세요." />
        <button className="check-btn">중복 확인</button>
      </div>
      
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
  
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-btn">가입하기</button>
        </form>
    </div>
    </div>
  );
}

export default Signup;
