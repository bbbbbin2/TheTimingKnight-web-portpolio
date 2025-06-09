// src/pages/Worldview.js
import React, { useState, useEffect } from 'react';
import hero from '../image/hero.png';
import outsider2 from '../image/outsider2.png';
import zombie2 from '../image/zombie2.png';
import assassin2 from '../image/assassin2.png';
import demon2 from '../image/demon2.png';
import bg3 from '../image/bg3.jpg';
import Header from '../components/Header.js';
import '../styles/Worldview.css';

const KnightAdventureWorldview = () => {
  const [activeRegion, setActiveRegion] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const regions = [
    {
      id: 0,
      name: '아르카디아 왕국',
      description:
        '푸른 초원과 맑은 강물이 흐르는 평화로운 왕국. \n용감한 기사들이 태어나고 자라나는 곳으로, \n 모든 모험의 시작점입니다.',
      details:
        '수백 년간 평화를 유지해온 아르카디아는 \n비옥한 토지와 따뜻한 기후로 유명합니다. \n왕성 주변으로는 훈련장과 마법 학원이 자리잡고 있으며, \n  젊은 기사들이 꿈을 키워나가는 희망의 터전입니다. \n 하지만 최근 어둠의 기운이 느껴지기 시작했다고 전해집니다.',
      color: '#10b981',
      bgColor: '#d1fae5',
      img: hero,
    },
    {
      id: 1,
      name: '그림자 숲',
      description:
        '짙은 안개가 자욱하게 깔린 신비로운 숲. \n고대의 비밀과 잃어버린 유물들이 숨겨져 있다고\n 전해지는 위험한 지역입니다.',
      details:
        '한때는 요정들의 성역이었던 이곳은 \n알 수 없는 저주로 인해 어둠에 잠겼습니다. \n나무들은 하늘을 가릴 정도로 높이 자라고, \n 길을 잃은 여행자들은 다시는 돌아오지 못한다는 전설이 있습니다. \n하지만 용기 있는 모험가라면 귀중한 보물을 발견할 수도 있습니다.',
      color: '#6b7280',
      bgColor: '#f3f4f6',
      img: outsider2,
    },
    {
      id: 2,
      name: '크리스탈 동굴',
      description:
        '무수히 많은 크리스탈이 반짝이는 지하 동굴. \n 마법의 힘이 응축된 이곳에서는 \n강력한 마법 아이템을 얻을 수 있습니다.',
      details:
        '대지 깊숙한 곳에 자리한 이 동굴은 \n수천 년에 걸쳐 형성된 마법 크리스탈들로 가득합니다. \n각 크리스탈들은 서로 다른 마법속성을 지니고 있으며,\n 숙련된 마법사만이 그 힘을 온전히 다룰 수 있습니다. \n동굴 깊숙한 곳에는 전설의 크리스탈이 잠들어 있다고 합니다.',
      color: '#7c3aed',
      bgColor: '#ddd6fe',
      img: zombie2,
    },
    {
      id: 3,
      name: '망자의 유적',
      description:
        '잃어버린 고대 문명의 거대한 유적.\n 강력한 마법사들이 남긴 지식과 함께\n 위험한 저주도 깃들어 있는 곳입니다.',
      details:
        '수천 년 전 번영했던 고대 마법 제국의 마지막 흔적입니다.\n 거대한 석조 건물들과 복잡한 마법진들이 여전히 작동하고 있으며,\n 고대의 지식을 찾아 많은 학자들이 찾아옵니다. \n하지만 이곳을 지키는 고대의 수호자들과 강력한 저주 때문에 \n함부로 접근할 수 없는 위험한 장소이기도 합니다.',
      color: '#0d9488',
      bgColor: '#99f6e4',
      img: assassin2,
    },
    {
      id: 4,
      name: '지옥의 관문',
      description:
        '모든 악의 근원이 되는 지옥으로 통하는 관문.\n 세상의 균형을 지키기 위해 \n반드시 봉인해야 하는 최후의 전장입니다.',
      details:
        '세계의 경계선에 위치한 이곳은 지옥과 현실 세계를 잇는 차원의 틈입니다. 끝없이 타오르는 용암과 검은 연기가 하늘을 뒤덮고 있으며, \n강력한 악마들이 이 세상으로 침입하려 합니다. \n모든 시련을 극복한 진정한 영웅만이 \n이곳에서 최후의 결전을 치르고 세상을 구원할 수 있습니다.',
      color: '#dc2626',
      bgColor: '#fecaca',
      img: demon2,
    },
  ];

  return (
    <div className="worldview">
      <Header />

      {/* 지도 섹션 */}
      <section className="worldmap-section">
        <h2>세계 지도</h2>
        <p>각 지역을 클릭하여 자세한 이야기를 확인하세요</p>
        <div
          className="map-container"
          style={{ backgroundImage: `url(${bg3})`, transform: `translateY(${scrollY * 0.2}px)` }}
        >
          {regions.map(r => {
            let left, top;
            switch (r.id) {
              case 0: left = '28%'; top = '20%'; break;
              case 1: left = 'calc(45% + 30px)'; top = '40%'; break;
              case 2: left = '75%'; top = '60%'; break;
              case 3: left = '40%'; top = '73%'; break;
              case 4: left = '65%'; top = '15%'; break;
              default: left = '0'; top = '0';
            }
            return (
              <div
                key={r.id}
                className={`region-icon${activeRegion === r.id ? ' active' : ''}`}
                style={{ left, top, boxShadow: activeRegion === r.id ? `0 0 30px ${r.color}` : '' }}
                onClick={() => {
                  setActiveRegion(r.id);
                  document.getElementById(`region-${r.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setActiveRegion(r.id)}
              >
                <img src={r.img} alt={r.name} />
                <div className="region-label">{r.name}</div>
              </div>
            );
          })}
          <svg className="map-path">
            <path
              d="M150 120 Q300 150 350 200 Q500 250 600 300 Q700 250 680 220"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
            />
          </svg>
        </div>
      </section>

      {/* 상세 섹션 */}
      <section className="detail-section">
        {regions.map((r, i) => (
          <div
            key={r.id}
            id={`region-${r.id}`}
            className={`detail-container bg-${r.id}`}
            onMouseEnter={() => setActiveRegion(r.id)}
          >
            <div className={`detail-content ${i % 2 ? 'reverse' : ''}`}>
              <div className="detail-text">
                <h2>{r.name}</h2>
                <p>{r.description}</p>
                <div className="detail-box">
                  <p>{r.details}</p>
                </div>
              </div>
              <div className="detail-image">
                <img src={r.img} alt={r.name} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 하단 네비게이션 */}
      <nav className="bottom-nav">
        {regions.map(r => (
          <button
            key={r.id}
            className={activeRegion === r.id ? 'nav-btn active' : 'nav-btn'}
            style={{ backgroundColor: activeRegion === r.id ? r.color : '#d1d5db' }}
            onClick={() => {
              setActiveRegion(r.id);
              document.getElementById(`region-${r.id}`)?.scrollIntoView({ behavior: 'smooth' });
            }}
            title={r.name}
          />
        ))}
      </nav>
    </div>
  );
};

export default KnightAdventureWorldview;
