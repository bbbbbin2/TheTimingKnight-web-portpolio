// components/CardCarousel.js
import { useState } from 'react';
import './CardCarousel.css'; // 스타일 분리

const cardData = [
  { id: 0, title: '세계관', image: '/1.png', link: '/worldview' },
  { id: 1, title: '캐릭터/몬스터', image: '/2.png', link: '/character' },
  { id: 2, title: '제작자', image: '/3.png', link: '/creator' },
];

const CardCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(1);

  const prev = () => {
    setCenterIndex((centerIndex + cardData.length - 1) % cardData.length);
  };

  const next = () => {
    setCenterIndex((centerIndex + 1) % cardData.length);
  };

  const getCardStyle = (index) => {
    const diff = index - centerIndex;
    const mod = (n) => (n + cardData.length) % cardData.length;
    const relative = mod(diff);

    if (relative === 0) return 'card center';
    if (relative === 1) return 'card right';
    return 'card left';
  };

  return (
    <div className="carousel-container">
      <img src="/left.png" alt="left" className="arrow left-arrow" onClick={prev} />
      <div className="carousel">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={getCardStyle(index)}
            onClick={() => {
              if (index === centerIndex) {
                window.location.href = card.link;
              }
            }}
          >
            <img src={card.image} alt={card.title} className="card-image" />
          </div>
        ))}
      </div>
      <img src="/right.png" alt="right" className="arrow right-arrow" onClick={next} />
    </div>
  );
};

export default CardCarousel;
