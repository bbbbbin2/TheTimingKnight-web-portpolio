// src/pages/MyPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../components/PostList'; // 내가 작성한 글 리스트 렌더링용
import './MyPage.css'; // 필요시 스타일 추가

function MyPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // 로그인이 되어 있지 않으면 로그인 페이지로 이동
      navigate('/Login');
      return;
    }

    // 1) 내 정보 가져오기
    fetch('/api/users/me', {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // 토큰 만료 또는 유효하지 않은 경우
          navigate('/Login');
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setUser(data);
      })
      .catch(() => {
        navigate('/login');
      });

    // 2) 내가 쓴 글 목록 가져오기
    fetch('/api/users/me/posts', {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-page">
      <h1>{user.username}님의 마이페이지</h1>

      <section className="profile">
        <h2>프로필 정보</h2>
        <p><strong>이메일:</strong> {user.email}</p>
        <p><strong>가입일:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </section>

      <section className="my-posts">
        <h2>내가 작성한 글</h2>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p>작성한 글이 없습니다.</p>
        )}
      </section>
    </div>
  );
}

export default MyPage;
