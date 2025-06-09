import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameShop.css';
import Header from '../components/Header';

import money1 from '../image/money1.png';
import money2 from '../image/money2.png';
import money3 from '../image/money3.png';

const GameShop = () => {
  const navigate = useNavigate();

  const rubyPackages = [
    { id: 'ruby1', title: '힘의조각', count: '1000개', price: 1000,   bonus: 0,    image: money1 },
    { id: 'ruby2', title: '꿈의조각', count: '1000개',      price: 1000,   bonus: 400,  image: money2 },
    { id: 'ruby3',title: '염색조각', count: '1000개',        price: 1000,  bonus: 1100, image: money3 },
    // { id: 'ruby4', name: '힘의조각\n2000+2000',  price: 33000,  bonus: 4000, image: money1 },
    // { id: 'ruby5', name: '꿈의조각\n2000+2000',  price: 58000,  bonus: 9000, image: money2 },
    // { id: 'ruby6', name: '염색조각\n2000+2000',  price: 124000, bonus: 25000, image: money3 },
  ];
  
  const handlePurchase = (pkg) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('상품은 앱 내에서 구매 가능합니다.');
      // navigate('/login');
      // return;
    }
    // alert(`${pkg.name.split('\n')[0]} ${pkg.price.toLocaleString()}원 구매가 완료되었습니다!`);
  };

  return (
    
    <div className="game-shop">
      <div className="header-container">
        <Header />
      </div>
      
      <div className="shop-content">
        <div className="shop-header">
          <div className="container">
            <div className="info-notice">
              <span className="info-icon">ℹ️</span>
              상품은 앱 내에서 구매 가능합니다.
            </div>
            <div className="tab-menu">
              <button className="tab-btn active">조각 패키지</button>
            </div>
          </div>
        </div>
        
        <div className="container">
  <div className="ruby-grid">
    {rubyPackages.map((pkg) => (
      <div key={pkg.id} className="ruby-item">
        <div className="ruby-image-container">
          <img src={pkg.image} alt={pkg.title} className="ruby-image" />
        </div>
        <div className="ruby-info">
          <h3 className="ruby-name">
            {pkg.title}
            <br />
            {pkg.count}
          </h3>
          <div className="ruby-price-info">
            <span className="price-badge">new</span>
            <span className="price-value">\{pkg.price.toLocaleString()}</span>
          </div>
          <button onClick={() => handlePurchase(pkg)} className="buy-btn">
            구매
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default GameShop;
