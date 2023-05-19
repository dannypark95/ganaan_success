import React, { useRef, useState } from 'react';

import Header from '../../layout/Header';
import Community from '../../layout/dropdown/Community';
import SubmitConfirmation from '../../layout/comp/SubmitConfirmation';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CommunityContact = () => {
  const [submitCheck, setSubmitCheck] = useState(false);
  const [formCheck, setFormCheck] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState({
    contactName: '',
    contactEmail: '',
    contactKakao: '',
    contactType: '',
    contactText: '',
    contactPref: '',
  });

  const form = useRef();

  const onCheck = () => {
    setFormCheck(!formCheck);
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      values.contactName === '' ||
      values.contactEmail === '' ||
      values.contactKakao === '' ||
      values.contactType === '' ||
      values.contactText === '' ||
      values.contactPref === '' ||
      !formCheck
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      const contactEmail = emailjs.sendForm(
        'service_led28bd',
        'template_t2szo8j',
        form.current,
        'IXEyL3xjCMoc12wcW'
      );
      await Promise.all([contactEmail]);
      setSubmitCheck(true);
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
              <span className='subTitleNav'>상담문의</span>
            </div>
            {submitCheck && <SubmitConfirmation />}

            {!submitCheck && (
              <div>
                <div className='text-left mb-3'></div>
                <div>
                  <Form ref={form} onSubmit={sendEmail}>
                    <Row className='mb-3 text-left'>
                      <Form.Group as={Col} controlId='typeValidation'>
                        <Form.Label>문의유형</Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          name='contactType'
                          onChange={handleChange}
                          defaultValue='선택해주세요'
                        >
                          <Form.Control type='class' />
                          <option value='선택해주세요' disabled>
                            선택해주세요
                          </option>
                          <option value='영어캠프'>영어캠프</option>
                          <option value='Walk-In'>Walk-In</option>
                          <option value='관리형 조기유학'>
                            관리형 조기유학
                          </option>
                          <option value='기타'>기타</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId='nameValidation'>
                        <Form.Label>이름</Form.Label>
                        <Form.Control
                          type='name'
                          name='contactName'
                          onChange={handleChange}
                          value={values.contactName}
                        />
                      </Form.Group>
                    </Row>
                    <Row className='text-left mb-3'>
                      <Form.Group as={Col} controlId='emailValidation'>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='name@example.com'
                          name='contactEmail'
                          value={values.contactEmail}
                          onChange={handleChange}
                        />
                        <Form.Text className='text-muted'>
                          신청후 확인 이메일이 발송됩니다.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Col} controlId='kakaoValidation'>
                        <Form.Label>카카오톡 ID</Form.Label>
                        <Form.Control
                          type='text'
                          name='contactKakao'
                          value={values.contactKakao}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group controlId='prefValidation' as={Col}>
                        <Form.Label>문의선호</Form.Label>
                        <div key={`contact-checkbox`}>
                          <Form.Check
                            inline
                            label='이메일'
                            name='contactPref'
                            value='이메일'
                            type='radio'
                            id={`contact-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='카카오톡'
                            name='contactPref'
                            type='radio'
                            value='카카오톡'
                            id={`contact-checkbox-1`}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                    </Row>

                    <Form.Group
                      className='mb-3 text-left'
                      controlId='textValidation '
                    >
                      <Form.Label>문의내용</Form.Label>
                      <Form.Control
                        name='contactText'
                        as='textarea'
                        rows={4}
                        value={values.contactText}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <div key='form-checkBox' className='mb-3 text-left'>
                        <Form.Check
                          type='checkbox'
                          id='order-checkbox'
                          label='정보를 확인하시고 책크해주세요.'
                          onChange={onCheck}
                        />
                      </div>
                    </Form.Group>

                    {showAlert && (
                      <div className='alertInformation text-center mb-3'>
                        모든정보를 입력해주세요.
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityContact;
