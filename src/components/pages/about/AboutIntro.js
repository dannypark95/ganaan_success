import React from 'react';

import Header from '../../layout/Header';
import About from '../../layout/dropdown/About';

const AboutIntro = () => {
  return (
    <div>
      <Header text={'학원소개'} sub={'인사말'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>학원소개</div>
            <About current={'intro'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>인사말</span>
            </div>
            <div className='introText'>
              안녕하세요?
              <br></br>
              <br></br>
              최근 세계적인 경제불황과 더불어 환율사태로 여러가지 어려움이
              많으시리라 생각됩니다. 최근 세부의 공항을 이용하는 한국 단기
              유학생 및 관광객수도 예년에 비해 줄어든 것도 사실입니다만,
              세계적인 관광지이자 교육의 환경도 좋은 이곳 세부에서의 영어교육을
              포기 할 수 없어서 좀 더 고민이 많으실것입니다.
              <br></br>
              <br></br>
              저희는 결코 짧지 않은 기간동안 아이들과 함께 하면서, 이런
              조건하에서 단순한 어학실력의 향상 뿐 만 아니라 아이들 스스로
              새롭게 변화, 발전해가는 모습을 목격하여 왔습니다. 그런 학생들을
              보며, 저희의 역할과 또한 어학연수의 성공을 위해서 진정으로 필요한
              것이 무엇인지 늘 치열히 고민 또 고민하게 됩니다.
              <br></br>
              <br></br>
              <span>
                아이들의 가능성에 대한 무한한 "믿음"과 철저한 "관리"만이 그
                해답이라 확신하며
              </span>
              , 지금까지 저희와 함께 한 많은 연수참가학생들과 저희를 믿고 늘
              지지해주신 학부모님들께 다시 한번 감사의 말씀을 전하며 앞으로도
              더욱 성실히, 열심히 우리 아이들을 관리하여 어려운 시기의
              부모님들의 땀방울이 결코 헛된것이 아니라는것을 보여 드리고자
              노력하겠습니다.
              <br></br>
              <br></br>
              감사합니다.
              <br></br>
              <br></br>
              <div className='signature'>- Success 어학원 -</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
