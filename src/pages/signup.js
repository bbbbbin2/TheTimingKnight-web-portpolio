import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Signup.css';
import Logo from '../pages/Logo.js';


function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateUsername = () => {
    return username.length >= 3;
  };

  const checkUsernameDuplicate = async () => {
    if (!validateUsername()) {
      setError('아이디는 3자 이상이어야 합니다.');
      setIsUsernameAvailable(false);
      setUsernameChecked(true);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/users/check-username?username=${username}`);
      setIsUsernameAvailable(response.data.available);
      setUsernameChecked(true);
      setError('');
    } catch (err) {
      setIsUsernameAvailable(false);
      setUsernameChecked(true);
      setError('중복 확인 중 오류가 발생했습니다.');
    }
  };

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 8) {
      setPasswordStrength('비밀번호는 8자 이상이어야 합니다.');
      return false;
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(pwd)) {
      setPasswordStrength('영문, 숫자, 특수문자를 모두 포함해야 합니다.');
      return false;
    } else {
      setPasswordStrength('');
      return true;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitted(true);

    // 비밀번호 확인
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setError('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setPasswordMatch(true);
    }

    // 비밀번호 강도 확인
    if (!checkPasswordStrength(password)) {
      return;
    }

    // 아이디 중복 확인
    if (!usernameChecked || !isUsernameAvailable) {
      setError('아이디 중복 확인을 완료해주세요.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/users/signup', {
        username,
        email,
        password,
      });
      setSuccess('회원가입이 완료되었습니다!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignup(e);
    }
  };

  return (
    <div className="signup-page">
      {/* 로고 섹션 */}
      <div className="logo-section">
        <h1 className="logo-title">기사는 타이밍</h1>
        <div className="logo-underline"></div>
      </div>

      {/* 회원가입 폼 */}
      <div className="signup-container">
      <Logo />

        
        <div className="signup-form">
          {/* 아이디 입력 및 중복확인 */}
          <div className="input-group">
            <div className="username-check">
              <input
                type="text"
                placeholder="아이디 (3자 이상)"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameChecked(false);
                  setIsUsernameAvailable(null);
                  setError('');
                }}
                onKeyPress={handleKeyPress}
                className="signup-input username-input"
              />
              <button 
                type="button" 
                onClick={checkUsernameDuplicate}
                className="duplicate-check-btn"
                disabled={!username || username.length < 3}
              >
                중복확인
              </button>
            </div>
            {usernameChecked && isUsernameAvailable === false && (
              <p className="error-message">사용 불가능한 아이디 입니다.</p>
            )}
            {usernameChecked && isUsernameAvailable === true && (
              <p className="success-message">사용 가능한 아이디입니다.</p>
            )}
          </div>

          {/* 이메일 입력 */}
          <div className="input-group">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="signup-input"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="input-group">
            <input
              type="password"
              placeholder="비밀번호 (영문, 숫자, 특수문자 8자 이상)"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
              onKeyPress={handleKeyPress}
              className="signup-input"
            />
            {passwordStrength && (
              <p className="password-strength">{passwordStrength}</p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="input-group">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatch(e.target.value === password);
              }}
              onKeyPress={handleKeyPress}
              className="signup-input"
            />
            {isSubmitted && !passwordMatch && confirmPassword && (
              <p className="error-message">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>

          {/* 에러/성공 메시지 */}
          {error && <p className="error-message main-error">{error}</p>}
          {success && <p className="success-message main-success">{success}</p>}

          {/* 회원가입 버튼 */}
          <button
            onClick={handleSignup}
            className="signup-button"
            disabled={!username || !email || !password || !confirmPassword || !isUsernameAvailable || passwordStrength}
          >
            회원가입
          </button>
        </div>

        {/* 로그인 링크 */}
        <div className="signup-links">
          <p className="login-text">이미 계정이 있으신가요?</p>
          <button 
            className="login-link-button"
            onClick={() => navigate('/login')}
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;