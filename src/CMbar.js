import React from 'react';
import { Link } from 'react-router-dom';
import './CMbar.css';

import heroImg from './image/hero.png';
import characterLabel from './image/character_label.png';
import monsterLabel from './image/monster_label.png';

import skeletonImg from './image/skeleton.png';
import skeletonBig from './image/skeleton2.png';
import demonImg from './image/demon.png';
import outsiderImg from './image/outsider.png';
import assassinImg from './image/assassin.png';
import treeImg from './image/tree.png';
import shadowImg from './image/shadow.png';
import zombieImg from './image/zombie.png';
import deathImg from './image/death.png';

const monsters = [
  {
    id: 'skeleton',
    name: '스켈레톤',
    desc: '죽어서도 싸우는 비운의 병사.\n느리고 약하지만,\n방심하면 뼈맛을 보게 될지도…?',
    img: skeletonImg,
    bigImg: skeletonBig,
  },
  {
    id: 'demon',
    name: '보스',
    desc: '지옥의 불꽃 속에서 태어난 절대자.\n그의 검은 한순간에 모든 걸 태운다.',
    img: demonImg,
    bigImg: demonImg,
  },
  {
    id: 'outsider',
    name: '외곽자',
    desc: '보랏빛 천 아래, 단 하나의 눈이 모든 것을 꿰뚫는다.',
    img: outsiderImg,
    bigImg: outsiderImg,
  },
  {
    id: 'assassin',
    name: '암살자',
    desc: '보이지 않는 자의 단칼.',
    img: assassinImg,
    bigImg: assassinImg,
  },
  {
    id: 'tree',
    name: '저주받은 나무',
    desc: '움직이지 않아도 공포는 스며든다.',
    img: treeImg,
    bigImg: treeImg,
  },
  {
    id: 'shadow',
    name: '그림자',
    desc: '보이지 않는 공격자.',
    img: shadowImg,
    bigImg: shadowImg,
  },
  {
    id: 'zombie',
    name: '좀비',
    desc: '끝없이 다가오는 저주받은 자.',
    img: zombieImg,
    bigImg: zombieImg,
  },
  {
    id: 'death',
    name: '죽음',
    desc: '그 누구도 피할 수 없는 그림자.',
    img: deathImg,
    bigImg: deathImg,
  },
];

const character = { id: 'hero', img: heroImg };

function CMbar({ onSelectMonster }) {
  return (
    <div className="cmbar">
      <div className="character-wrapper">
        <div className="group">
          <img src={characterLabel} className="label" alt="캐릭터 라벨" />
          <Link to={`/character/${character.id}`}>
            <img src={character.img} className="icon selected" alt="캐릭터" />
          </Link>
        </div>
      </div>

      <div className="monster-wrapper">
        {monsters.map((monster, index) => (
          <div className="group" key={monster.id}>
            {index === 0 && <img src={monsterLabel} className="label" alt="몬스터 라벨" />}
            <img
              src={monster.img}
              className="icon"
              alt={monster.name}
              onClick={() => onSelectMonster && onSelectMonster(monster)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CMbar;
