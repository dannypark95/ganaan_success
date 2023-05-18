import React from 'react';

import Table from 'react-bootstrap/Table';

const Week4Menu = () => {
  return (
    <div className='currMenuTable'>
      <div className='currMenuWeek text-center'>
        {/* Week 1 */}
        <Table striped bordered>
          <thead>
            <tr>
              <th> </th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tableRowSpan'>아침</td>
              <td>
                <ul>
                  <li>팬케이크</li>
                  <li>소세지 구이</li>
                  <li>치즈-마카로니 셀러드</li>
                  <li>게살 스프</li>
                  <li>수박 (과일)</li>
                  <li>오랜지 주스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>버터갈릭 브레드</li>
                  <li>에그프라이</li>
                  <li>햄-야채 셀러드</li>
                  <li>야채 스프</li>
                  <li>수박 (과일)</li>
                  <li>망고 주스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>파운드케이크</li>
                  <li>소세지구이</li>
                  <li>치즈-마카로니 셀러드</li>
                  <li>게살 스프</li>
                  <li>수박 (과일)</li>
                  <li>파인애플 주스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>에그 샌드위치</li>
                  <li>에그 프라이</li>
                  <li>햄-야채 셀러드</li>
                  <li>야채 스프</li>
                  <li>수박 (과일)</li>
                  <li>오렌지 주스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>프렌치 토스트</li>
                  <li>소세지 구이</li>
                  <li>치즈-마카로니 셀러드</li>
                  <li>게살 스프</li>
                  <li>수박 (과일)</li>
                  <li>망고 주스</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>점심</td>
              <td>
                <ul>
                  <li>치즈마요덮밥</li>
                  <li>돈까스 (격주)</li>
                  <li>계란탕</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>스파게티</li>
                  <li>고기국수 (격주)</li>
                  <li>미트볼</li>
                  <li>아이스티</li>
                  <li>바나나</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>해물 볶음밥</li>
                  <li>주먹밥 (격주)</li>
                  <li>야끼소바</li>
                  <li>미소된장 - 김치</li>
                  <li>바나나</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>짜장밥</li>
                  <li>카레밥 (격주)</li>
                  <li>계란탕</li>
                  <li>김치</li>
                  <li>바나나</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>오므라이스</li>
                  <li>하이라이스 (격주)</li>
                  <li>셀러드</li>
                  <li>미소된장 - 김치</li>
                  <li>바나나</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>저녁</td>
              <td>
                <ul>
                  <li>흰쌀밥</li>
                  <li>제육볶음</li>
                  <li>데리야끼 치킨 (격주)</li>
                  <li>계란장조림</li>
                  <li>삼색야채볶음</li>
                  <li>깍두기</li>
                  <li>황태국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰쌀밥</li>
                  <li>안동찜닭</li>
                  <li>달콤양념치킨 (격주)</li>
                  <li>소세지 계란 부침</li>
                  <li>미트볼</li>
                  <li>김치</li>
                  <li>우거지 된장국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰쌀밥</li>
                  <li>탕수육</li>
                  <li>마파두부 (격주)</li>
                  <li>감자고추조림</li>
                  <li>가지계란전</li>
                  <li>깍두기</li>
                  <li>쇠고기 미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰쌀밥</li>
                  <li>데리야끼 포크</li>
                  <li>햄버거 스테이크 (격주)</li>
                  <li>어묵볶음</li>
                  <li>오이미역초무침</li>
                  <li>김치</li>
                  <li>콩나물국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰쌀밥</li>
                  <li>닭볶음탕</li>
                  <li>난자완스 (격주)</li>
                  <li>해물-김치전</li>
                  <li>감자채볶음</li>
                  <li>깍두기</li>
                  <li>오뎅국</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* Week 2
        <Table striped bordered>
          <thead>
            <tr>
              <th> </th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tableRowSpan'>아침</td>
              <td>
                <ul>
                  <li>프렌치 토스트</li>
                  <li>스크램블 에그</li>
                  <li>베이컨</li>
                  <li>채소구이</li>
                  <li>오렌지 쥬스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰밥</li>
                  <li>시금치 된장국</li>
                  <li>닭고기 무 일식 조림</li>
                  <li>새우살 양배추 볶음</li>
                  <li>계란말이</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>버터 시나몬 모닝롤</li>
                  <li>과일샐러드</li>
                  <li>에그프라이</li>
                  <li>망고쥬스</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>현미밥</li>
                  <li>쇠고기 미역국</li>
                  <li>어묵 야채 볶음</li>
                  <li>감자 고추 조림</li>
                  <li>비엔나 소세지 볶음</li>
                  <li>무생채</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>팬케이크</li>
                  <li>소세지 구이</li>
                  <li>마카로니 콘샐러드</li>
                  <li>아이스티</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>잡곡밥</li>
                  <li>오징어 무국</li>
                  <li>나물 삼색 볶음</li>
                  <li>쇠고기 껍질콩 볶음</li>
                  <li>김치</li>
                  <li>깍두기</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>버터 갈릭 브레드</li>
                  <li>야채 햄 샐러드</li>
                  <li>치즈 핫도그</li>
                  <li>파인애플 쥬스</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>점심</td>
              <td>
                <ul>
                  <li>등심 돈가스</li>
                  <li>미소 된장국</li>
                  <li>야채 샐러드</li>
                  <li>피클</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>봉골레 스파게티</li>
                  <li>버터 갈릭 브레드</li>
                  <li>야채</li>
                  <li>피클</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>바지락 칼국수</li>
                  <li>김치전</li>
                  <li>깍두기</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>클럽하우스 샌드위치</li>
                  <li>프렌치 프라이</li>
                  <li>아이스티</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>새우 볶음밥</li>
                  <li>미소 된장국</li>
                  <li>야채 샐러드</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>액티비티 외식</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>김밥</li>
                  <li>떡볶이</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>저녁</td>
              <td>
                <ul>
                  <li>흰밥</li>
                  <li>삼치 무조림</li>
                  <li>비엔나 소세지 볶음</li>
                  <li>쇠고기 완자전</li>
                  <li>어묵탕</li>
                  <li>청경채 볶음</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>현미밥</li>
                  <li>제육볶음</li>
                  <li>콩나물국</li>
                  <li>장조림</li>
                  <li>베이컨 양배추 볶음</li>
                  <li>무채나물</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>잡곡밥</li>
                  <li>닭볶음탕</li>
                  <li>다시마 감자국</li>
                  <li>해물모듬전</li>
                  <li>삼색나물볶음</li>
                  <li>계란말이</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰밥</li>
                  <li>오삼불고기</li>
                  <li>야채김치전</li>
                  <li>쌈야채</li>
                  <li>감자볶음</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>흰밥</li>
                  <li>낙지볶음</li>
                  <li>도가니탕</li>
                  <li>가지볶음</li>
                  <li>오이 미역 초무침</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>현미밥</li>
                  <li>돼지고기 BBQ</li>
                  <li>참치 김치찌개</li>
                  <li>해물 야채전</li>
                  <li>피클</li>
                  <li>김치</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>바베큐 파티</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table> */}
        {/* <Table striped bordered>
          <thead>
            <tr>
              <th>3주</th>
              <th>1/15 (일)</th>
              <th>1/16 (월)</th>
              <th>1/17 (화)</th>
              <th>1/18 (수)</th>
              <th>1/19 (목)</th>
              <th>1/20 (금)</th>
              <th>1/21 (토)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tableRowSpan'>아침</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>점심</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>저녁</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table> */}
        {/* <Table striped bordered>
          <thead>
            <tr>
              <th>4주</th>
              <th>1/22 (일)</th>
              <th>1/23 (월)</th>
              <th>1/24 (화)</th>
              <th>1/25 (수)</th>
              <th>1/26 (목)</th>
              <th>1/27 (금)</th>
              <th>1/28 (토)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tableRowSpan'>아침</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>점심</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='tableRowSpan'>저녁</td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>쌀밥</li>
                  <li>소고기무국</li>
                  <li>야채계란찜</li>
                  <li>열무순나물</li>
                  <li>김치/요구르트</li>
                  <li>미역국</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    </div>
  );
};

export default Week4Menu;
