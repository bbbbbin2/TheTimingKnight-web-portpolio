import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logo.css';
import logo from '../image/logo.png';

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img src={logo} alt="기사 타이밍 로고" className="logo" />
    </Link>
  );
}

export default Logo;