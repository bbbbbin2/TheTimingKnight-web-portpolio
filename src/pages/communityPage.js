import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import '../styles/communityPage.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`/posts?page=${currentPage}&size=3`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('서버 오류 발생');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.content);
        setTotalPages(data.totalPages);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [navigate, currentPage]);

  const handleCreatePostClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인 후 글을 작성할 수 있습니다.');
      navigate('/login');
    } else {
      navigate('/create-post');
    }
  };

  return (
    <div className="community-container">
      <Header />
      <header className="community-header">
        <h1>커뮤니티</h1>
        <div className="community-button-wrap">
          <button className="community-button" onClick={handleCreatePostClick}>
            글 작성
          </button>
        </div>
      </header>

      <div className="community-post-list">
        {loading ? (
          <p>불러오는 중...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>에러: {error}</p>
        ) : posts.length === 0 ? (
          <p>게시글이 없습니다.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="community-post-item">
              <div className="community-post-header">
                <h2 className="community-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="community-meta">
                  작성자: {post.username} | 댓글: {post.comments_count}
                </p>
              </div>
              <p className="community-preview">
                {post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}
              </p>
            </div>
          ))
        )}
      </div>

      {/* 페이지네이션 버튼 */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            disabled={currentPage === idx}
            className={currentPage === idx ? 'active' : ''}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
