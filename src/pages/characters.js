import React, { useState } from 'react';
import Header from '../components/Header';
import CMbar, { character } from './CMbar';
import MonsterDetail from './MonsterDetail';
import bg3 from '../image/bg3.png';

function CharactersPage() {
  const [selectedMonster, setSelectedMonster] = useState(character);

  return (
    <div
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Header />

      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        {selectedMonster && <MonsterDetail monster={selectedMonster} />}
      </div>

      <CMbar onSelectMonster={setSelectedMonster} />
    </div>
  );
}

export default CharactersPage;
