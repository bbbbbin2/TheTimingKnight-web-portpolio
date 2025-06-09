import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Signup from './pages/signup';
import CommunityPage from './pages/communityPage';
import PostDetailPage from './pages/postDetailPage';
import CreatePostPage from './pages/CreatePostPage';
import CharactersPage from './pages/characters';
import NewsPage from './pages/NewsPage';
import GameShop from './pages/GameShop';
import Worldview from './pages/Worldview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/gameshop" element={<GameShop />} />
         <Route path="/worldview" element={<Worldview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
