import React, { useState } from 'react';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';

import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CommunityForum = () => {
  const [formCheck, setFormCheck] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  let navigate = useNavigate();

  const onCheck = () => {
    if (formCheck) {
      setFormCheck(false);
    } else {
      setFormCheck(true);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formCheck) {
      console.log('Please check the box!');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      console.log('Email Sent');

      const formHTML = e.target;

      const contactEmail = emailjs.sendForm(
        'service_led28bd',
        'template_t2szo8j',
        formHTML,
        'IXEyL3xjCMoc12wcW'
      );

      await Promise.all([contactEmail]);

      let path = '/';
      navigate(path);

      alert('상담요청이 완료되었습니다. 이메일을 확인해주세요.');
    }
  };

  return (
    <div>
      <Header text={'커뮤니티'} sub={'상담게시판'} />

      <div className='container'>
        <div className='pageGrid'>
          <div className='page-g1'>
            <div className='sideTitle'>커뮤니티</div>
            <Community current={'forum'} />
          </div>
          <div className='page-g2'>
            <div className='pageTitle'>
              <span className='subTitleNav'>상담요청</span>
            </div>
            <div>
              <div className='text-left mb-3'>
                {/* 더 빠른 답변을 원하신다면, 카카오톡 아이콘을 클릭하여 대화를
                신청해 주세요. */}
              </div>
              <div>
                <Form onSubmit={sendEmail}>
                  <Row className='mb-3 text-left'>
                    <Form.Group as={Col} controlId='typeValidation'>
                      <Form.Label>문의유형</Form.Label>
                      <Form.Select aria-label='Default select example'>
                        <Form.Control type='class' name='contactType' />
                        <option disabled>선택</option>
                        <option value='camp'>영어캠프</option>
                        <option value='walkin'>Walk-In</option>
                        <option value='abroad'>관리형 조기유학</option>
                        <option value='misc'>기타</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId='nameValidation'>
                      <Form.Label>이름</Form.Label>
                      <Form.Control type='name' name='contactName' />
                    </Form.Group>
                  </Row>
                  <Row className='text-left mb-3'>
                    <Form.Group as={Col} controlId='emailValidation'>
                      <Form.Label>이메일</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='name@example.com'
                        name='contactEmail'
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='kakaoValidation'>
                      <Form.Label>카카오톡</Form.Label>
                      <Form.Control type='text' name='contactKakao' />
                    </Form.Group>

                    <Form.Group controlId='prefValidation' as={Col}>
                      <Form.Label>문의선호</Form.Label>
                      <div key={`contact-checkbox`}>
                        <Form.Check
                          inline
                          label='이메일'
                          name='contactPref'
                          type='radio'
                          id={`contact-checkbox-1`}
                        />
                        <Form.Check
                          inline
                          label='카카오톡'
                          name='contactPref'
                          type='radio'
                          id={`contact-checkbox-1`}
                        />
                      </div>
                    </Form.Group>
                  </Row>

                  <Form.Group
                    className='mb-3 text-left'
                    controlId='contactText'
                  >
                    <Form.Label>문의내용</Form.Label>
                    <Form.Control
                      name='contactText'
                      as='textarea'
                      rows={4}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <div key='form-checkBox' className='mb-3 text-left'>
                      <Form.Check
                        type='checkbox'
                        id='order-checkbox'
                        label='기제하신 정보를 확인하시고 책크해주세요.'
                        onChange={() => {
                          return onCheck();
                        }}
                      />
                    </div>
                  </Form.Group>

                  {showAlert && (
                    <div className='alertInformation'>
                      Please check the agreement
                    </div>
                  )}

                  <div className='text-center'>
                    <Button
                      variant='primary'
                      type='submit'
                      className='applyButton'
                    >
                      상담신청
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
