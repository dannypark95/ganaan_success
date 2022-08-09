import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

const CurriculumApply = () => {
  const [date, setDate] = useState(new Date());

  let navigate = useNavigate();

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

      let path = '/submit';
      navigate(path);
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
                      여권에 표기된 영문이름과 동일해야 함.
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
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      inline
                      label='남자'
                      name='group1'
                      type='radio'
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='여자'
                      name='group1'
                      type='radio'
                      id={`inline-checkbox-1`}
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
                    <div key={`inline-checkbox`}>
                      <Form.Check
                        inline
                        label='있음'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='없음'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
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
                  <Form.Group as={Col} controlId='formCountry'>
                    <Form.Label>연수기간</Form.Label>
                    <div key={`inline-checkbox`}>
                      <Form.Check
                        inline
                        label='4주(1차) : 2023년 1월1일 ~ 1월28일'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='4주(2차) : 2023년 1월15일 ~ 2월11일'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                      <Form.Check
                        label='6주 : 2023년 1월1일 ~ 2월11일'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='8주 : 2023년 1월1일 ~ 2월25일'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId='airport' as={Col}>
                    <Form.Label>출발공항</Form.Label>
                    <div key={`inline-checkbox`}>
                      <Form.Check
                        inline
                        label='인천출발'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                      <Form.Check
                        inline
                        label='부산출발'
                        name='group1'
                        type='radio'
                        id={`inline-checkbox-1`}
                      />
                    </div>
                  </Form.Group>
                </Row>

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
