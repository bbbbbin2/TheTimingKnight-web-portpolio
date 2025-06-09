// src/pages/CMbar.js
import '../styles/CMbar.css';

import heroImg from '../image/hero.png';
import heroBig from '../image/hero2.png';
import characterLabel from '../image/character_label.png';
import monsterLabel from '../image/monster_label.png';
import skeletonImg from '../image/skeleton.png';
import skeletonBig from '../image/skeleton2.png';
import demonImg from '../image/demon.png';
import demonBig from '../image/demon2.png';
import outsiderImg from '../image/outsider.png';
import outsiderBig from '../image/outsider2.png';
import assassinImg from '../image/assassin.png';
import assassinBig from '../image/assassin2.png';
import treeImg from '../image/tree.png';
import treeBig from '../image/tree2.png';
import shadowImg from '../image/shadow.png';
import shadowBig from '../image/shadow2.png';
import zombieImg from '../image/zombie.png';
import zombieBig from '../image/zombie2.png';
import deathImg from '../image/death.png';
import deathBig from '../image/death2.png';


const monsters = [

  {
    id: 'skeleton',
    name: '스켈레톤',
    desc: '죽어서도 싸우는 비운의 병사.\n\n느리고 약하지만,\n전장의 기억이 남아 있어\n자신보다 강한 자도 두려워하지 않는다.\n\n방심하면 뼈맛을 보게 될지도…?',
    img: skeletonImg,
    bigImg: skeletonBig, 
  },
  {
    id: 'demon',
    name: '데몬페인 ',
    desc: '지옥의 불꽃 속에서 태어난 절대자.\n\n그의 발걸음이 닿는 땅마다 불길이 솟아오르고,\n그의 눈빛만으로 약자는 무릎을 꿇는다.\n\n그의 검은 한순간에 모든 걸 태운다.\n\n타이밍을 놓치는 순간,\n넌 재가 될 뿐…',
    img: demonImg,
    bigImg: demonBig,
  },
  {
    id: 'outsider',
    name: '심연의 눈',
    desc: '보랏빛 천 아래, \n단 하나의 눈이 모든 것을 꿰뚫는다.\n\n느릿한 움직임에도 불구하고, \n그 시선은 결코 놓치지 않는다.\n\n눈을 마주친 순간, 이미 그의 손아귀 안에 있다.',
    img: outsiderImg,
    bigImg: outsiderBig,
  },
  {
    id: 'assassin',
    name: '망령술사',
    desc: '검은 망토로 몸을 감싸고,\n 붉은 천으로 얼굴을 가린 수수께끼의 존재.\n\n 한 손에는 해골, 다른 손에는 마법 지팡이를 들고,\n 죽음과 마법을 자유자재로操る다. \n\n그의 주문 한마디에 전세가 역전될 수 있으니, \n타이밍을 놓치지 마라.',
    img: assassinImg,
    bigImg: assassinBig,
  },
  {
    id: 'tree',
    name: '저주받은 나무',
    desc: '온몸이 재처럼 흩날리는 어둠의 잔재.\n\n 나묵가지 같은 팔을 뻗어 생명을 움켜쥐려한다.\n\n 느릿하지만 끈질긴 움직임으로 대지를 오염시키는 존재.\n 그의 손길이 닿는 순간, 모든 것은 잿더미로 돌아간다...',
    img: treeImg,
    bigImg: treeBig,
  },
  {
    id: 'shadow',
    name: '섀도블레이드',
    desc: '보이지 ​보라빛 눈동자로 모든 것을 꿰뚫는\n\n어둠의 검객. \n그의 보라색 검이 번뜩이는 순간, \n 전장은 침묵과 공포로 물든다.\n\n 타이밍을 놓치는 자, 그의 검 끝에서 구원의 여지는 없다. ',
    img: shadowImg,
    bigImg: shadowBig,
  },
  {
    id: 'zombie',
    name: '데드메이스 ',
    desc: '부서진 갑옷과 해골만 남은 비운의 병사.\n\n생전의 기억은 사라졌지만,\n전장의 본능은 여전히 뼈에 새겨져 있다.\n\n느릿한 움직임에도 불구하고,\n빈틈을 보이면 당신의 뼈도 그 옆에 놓이게 될 것이다.',
    img: zombieImg,
    bigImg: zombieBig,
  },
  {
    id: 'death',
    name: '그림자 사신',
    desc: '칠흑 같은 망토를 두르고\n거대한 낫을 휘두르는 사신.\n\n그의 발소리는 들리지 않지만,\n그가 지나간 자리에 생명은 남지 않는다.\n\n숨을 돌리는 그 찰나,\n당신의 그림자도 그를 따르게 될 것이다.',
    img: deathImg,
    bigImg: deathBig,
  },
];
// character는 위에 하나만 선언하고, export도 같이!
export const character = {
  id: 'hero',
  name: '기사',
  desc: '검은 무디고, 방패는 작지만\n그의 눈엔 항상 희망이 깃들어 있다.\n\n용기는 넘치지만,\n타이밍을 몰라 몬스터에게 맞는 게 일상이다...\n\n진짜 기사가 될 수 있을까?',
  img: heroImg,
  bigImg: heroBig
};

function CMbar({ onSelectMonster }) {
  return (
    <div className="cmbar">
      <div className="character-wrapper">
        <div className="group">
          <img src={characterLabel} className="label" alt="캐릭터 라벨" />
          <img
            src={character.img}
            className="icon selected"
            alt="캐릭터"
            onClick={() => onSelectMonster && onSelectMonster(character)}
          />
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
