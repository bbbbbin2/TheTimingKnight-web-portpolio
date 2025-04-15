import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage'; // ✅ 메인 페이지 분리
import Login from './login'; // 로그인 페이지
import Signup from './Signup'; // 회원가입 페이지
import CharactersPage from './characters'; // characters.js로 만든 컴포넌트


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/signup" element={<Signup />} /> {/* 회원가입 추가 */}
          <Route path="/characters" element={<CharactersPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
