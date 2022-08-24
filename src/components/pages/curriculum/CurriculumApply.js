import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SubmitConfirmation from '../../layout/comp/SubmitConfirmation';
import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

const CurriculumApply = () => {
  const [date, setDate] = useState(new Date());

  const sendEmail = async (e) => {
    e.preventDefault();

    if (false) {
      console.log('Please check the box!');
      // setShowAlert(true);
      setTimeout(() => {
        // setShowAlert(false);
      }, 3000);
    } else {
      const formHTML = e.target;

      const customerEmail = emailjs.sendForm(
        'service_led28bd',
        'template_9vm1dw6',
        formHTML,
        'IXEyL3xjCMoc12wcW'
      );

      const backlogEmail = emailjs.sendForm(
        'service_led28bd',
        'template_9vm1dw6',
        formHTML,
        'IXEyL3xjCMoc12wcW'
      );

      await Promise.all([customerEmail, backlogEmail]);
    }
  };

  return (
    <div>
      <Header text={'영어캠프'} sub={'접수신청'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>영어캠프</div>
            <Curriculum current={'apply'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>접수신청</span>
            </div>

            <h4 className='text-left'>온라인 참가신청서</h4>
            <hr />

            <div className='currApplyForm text-left'>
              <Form onSubmit={sendEmail}>
                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formKoreanName'>
                    <Form.Label>참가자 이름 (한글)</Form.Label>
                    <Form.Control type='name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formEnglishName'>
                    <Form.Label>참가자 이름 (영어)</Form.Label>
                    <Form.Control type='name' />
                    <Form.Text className='text-muted'>
                      여권에 표기된 영문이름과 동일해야 합니다.
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formClass'>
                    <Form.Label>학년</Form.Label>
                    <Form.Select aria-label='Default select example'>
                      <Form.Control type='class' />
                      <option disabled>학년을 선택해주세요</option>
                      <option value='elem_1'>초등학교 1학년</option>
                      <option value='elem_2'>초등학교 2학년</option>
                      <option value='elem_3'>초등학교 3학년</option>
                      <option value='elem_4'>초등학교 4학년</option>
                      <option value='elem_5'>초등학교 5학년</option>
                      <option value='elem_6'>초등학교 6학년</option>
                      <option value='midd_1'>중학교 1학년</option>
                      <option value='midd_2'>중학교 2학년</option>
                      <option value='midd_3'>중학교 3학년</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId='birthday'>
                    <Form.Label>생년월일</Form.Label>
                    <Form.Control
                      type='date'
                      name='duedate'
                      placeholder='Due date'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Form.Group controlId='gender' className='mb-4  '>
                  <Form.Label>성별</Form.Label>
                  <div key={`gender-checkbox`}>
                    <Form.Check
                      inline
                      label='남자'
                      name='gender'
                      type='radio'
                      id={`gender-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='여자'
                      name='gender'
                      type='radio'
                      id={`gender-checkbox-1`}
                    />
                  </div>
                </Form.Group>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formKakao'>
                    <Form.Label>카카오톡 아이디</Form.Label>
                    <Form.Control type='name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formEmail'>
                    <Form.Label>신청자 이메일</Form.Label>
                    <Form.Control
                      type='name'
                      placeholder='example@domain.com'
                    />
                    <Form.Text className='text-muted'>
                      신청후 확인 이메일이 발송됩니다.
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formSubmitter'>
                    <Form.Label>신청자 (이름)</Form.Label>
                    <Form.Control type='name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formSubmitterRole'>
                    <Form.Label>신청자 (참가학생과의 관계)</Form.Label>
                    <Form.Control type='name' />
                  </Form.Group>
                </Row>

                <hr></hr>

                <Row className='mb-3'>
                  <Form.Group controlId='abroad' as={Col}>
                    <Form.Label>해외 영어연수</Form.Label>
                    <div key={`abroad-checkbox`}>
                      <Form.Check
                        inline
                        label='있음'
                        name='abroad'
                        type='radio'
                        id={`abroad-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='없음'
                        name='abroad'
                        type='radio'
                        id={`abroad-checkbox-1`}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} controlId='formCountry'>
                    <Form.Label>연수국가</Form.Label>
                    <Form.Control type='name' />
                  </Form.Group>
                </Row>

                <hr></hr>

                <Row className='mb-3'>
                  <Form.Group as={Col} controlId='formDuration'>
                    <Form.Label>연수기간</Form.Label>
                    <div key={`duration-checkbox`}>
                      <Form.Check
                        inline
                        label='4주(1차) : 2023년 1월1일 ~ 1월28일'
                        name='duration'
                        type='radio'
                        id={`duration-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='4주(2차) : 2023년 1월15일 ~ 2월11일'
                        name='duration'
                        type='radio'
                        id={`duration-checkbox-1`}
                      />
                      <Form.Check
                        label='6주 : 2023년 1월1일 ~ 2월11일'
                        name='duration'
                        type='radio'
                        id={`duration-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='8주 : 2023년 1월1일 ~ 2월25일'
                        name='duration'
                        type='radio'
                        id={`duration-checkbox-1`}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId='airport' as={Col}>
                    <Form.Label>출발공항</Form.Label>
                    <div key={`airport-checkbox`}>
                      <Form.Check
                        inline
                        label='인천출발'
                        name='airport'
                        type='radio'
                        id={`airport-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='부산출발'
                        name='airport'
                        type='radio'
                        id={`airport-checkbox-1`}
                      />
                    </div>
                  </Form.Group>
                </Row>

                <hr />

                <Form.Group className='mb-3'>
                  <Form.Label>학생성격 및 영어능력</Form.Label>
                  <textarea
                    class='form-control'
                    rows='5'
                    id='comment'
                  ></textarea>
                  <Form.Text className='text-muted'>
                    학생 성격 (성향) 및 영어 능력을 간단하게 적어주세요.
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>건강 숙지사항</Form.Label>
                  <textarea
                    class='form-control'
                    rows='5'
                    id='comment'
                  ></textarea>
                  <Form.Text className='text-muted'>
                    복용하는 약, 알레르기, 조심해야 하는 음식 등 참고해야 할
                    부분을 적어주세요.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>기타 참고사항</Form.Label>
                  <textarea
                    class='form-control'
                    rows='5'
                    id='comment'
                  ></textarea>
                </Form.Group>
                <hr />

                <div className='text-center'>
                  <Button
                    variant='primary'
                    type='submit'
                    className='applyButton'
                  >
                    신청하기
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumApply;
