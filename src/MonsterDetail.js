import React from 'react';
import './MonsterDetail.css';

function MonsterDetail({ monster }) {
  return (
    <div className="monster-detail">
      <div className="monster-text">
        <h1 className="monster-name">{monster.name}</h1>
        <p className="monster-desc">{monster.desc}</p>
      </div>
      <div className="monster-image">
        <img src={monster.bigImage} alt={monster.name} />
      </div>
    </div>
  );
}

export default MonsterDetail;
