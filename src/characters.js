import React, { useState } from 'react';
import Header from './Header';
import CMbar from './CMbar';
import MonsterDetail from './MonsterDetail'; // 상세정보 컴포넌트

function CharactersPage() {
  const [selectedMonster, setSelectedMonster] = useState(null);

  return (
    <div style={{ backgroundColor: '#eeeeee', minHeight: '100vh', paddingBottom: '120px', position: 'relative' }}>
      <Header />

      {/* 중앙 콘텐츠 */}
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        {selectedMonster && <MonsterDetail monster={selectedMonster} />}
      </div>

      {/* 하단 바 */}
      <CMbar onSelectMonster={setSelectedMonster} />
    </div>
  );
}

export default CharactersPage;
