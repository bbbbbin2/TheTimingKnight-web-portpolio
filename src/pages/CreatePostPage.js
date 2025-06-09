import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';

import '../styles/createPostPage.css';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!title || !content) {
      setError('제목과 내용을 모두 입력해주세요.');
      return;
    }

    setIsLoading(true); // 제출 시 로딩 시작
    setError(null); // 이전에 발생한 에러 초기화

    try {
      // localStorage에서 JWT 토큰 가져오기
      const token = localStorage.getItem('token');
      console.log('JWT Token:', token);  // null이면 문제 있음

      if (!token) { 
        setError('로그인 정보가 없습니다.');
        return;
      }

      // 서버로 게시글 작성 요청
      const response = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      });

      if (!response.ok) {
        throw new Error('게시글 작성에 실패했습니다.');
      }

      // 성공적으로 게시물이 작성되면 커뮤니티 페이지로 이동
      const data = await response.json(); // 서버 응답 받기
      console.log('게시물 작성 성공:', data);

      navigate('/community'); // 게시물 작성 성공 후 페이지 이동
    } catch (error) {
      setError(error.message); // 에러 발생 시 메시지 상태 업데이트
    } finally {
      setIsLoading(false); // 로딩 끝
    }
  };

  return (
    
    <div className="create-post-container">
        
        <Header />
      <h1 className="create-post-title">게시글을 작성해주세요</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="create-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          required
        />
        <textarea
          className="create-post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
          required
        />
        <button type="submit" className="create-post-button" disabled={isLoading}>
          {isLoading ? '작성 중...' : '작성완료'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* 에러 메시지 표시 */}
    </div>
  );
};

export default CreatePostPage;
