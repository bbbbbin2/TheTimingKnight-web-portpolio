import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/commentList';
import CommentInput from '../components/commentInput';
//import './PostDetailPage.css';

const PostDetailPage = () => {
  const { id } = useParams(); // URL 파라미터에서 게시글 ID를 가져옵니다.
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 게시글 상세 정보를 API에서 가져옵니다.
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  const handleLike = () => {
    // 공감 버튼 클릭 시 API로 공감 요청
    fetch(`/api/posts/${id}/like`, { method: 'POST' })
      .then(() => setPost((prevPost) => ({ ...prevPost, likes: prevPost.likes + 1 })));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <button onClick={handleLike}>공감 ({post.likes})</button>
      </div>
      <CommentList postId={id} />
      <CommentInput postId={id} />
    </div>
  );
};

export default PostDetailPage;
