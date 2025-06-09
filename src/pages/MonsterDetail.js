// src/pages/MonsterDetail.js
import React from 'react';
import '../styles/MonsterDetail.css';  // styles 폴더로 경로 조정


function MonsterDetail({ monster }) {
  return (
    <div className="monster-detail">
      <div className="monster-text">
        <h1 className="monster-name">{monster.name}</h1>
        <p className="monster-desc">{monster.desc}</p>
      </div>
      <div className="monster-image">
        <img src={monster.bigImg} alt={monster.name} />
      </div>
    </div>
  );
}

export default MonsterDetail;
