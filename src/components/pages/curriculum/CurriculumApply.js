import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SubmitConfirmation from '../../layout/comp/SubmitConfirmation';
import Header from '../../layout/Header';
import Curriculum from '../../layout/dropdown/Curriculum';

const CurriculumApply = () => {
  const [submitCheck, setSubmitCheck] = useState(false);
  const [formCheck, setFormCheck] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState({
    campNameKor: '',
    campNameEng: '',
    campGrade: '',
    campBirthday: '',
    campGender: '',
    campApplicant: '',
    campRelation: '',
    campAbroad: '',
    campCountry: '',
    campDuration: '',
    campAirport: '',
    campAttb: '',
    campHealth: '',
    campMisc: '',
    campKakao: '',
    campEmail: '',
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
      values.campNameKor === '' ||
      values.campNameEng === '' ||
      values.campGrade === '' ||
      values.campBirthday === '' ||
      values.campGender === '' ||
      values.campKakao === '' ||
      values.campGender === '' ||
      values.campEmail === '' ||
      values.campApplicant === '' ||
      values.campAbroad === '' ||
      values.campDuration === '' ||
      values.campAirport === '' ||
      values.campAttb === '' ||
      !formCheck
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      const campEmail = emailjs.sendForm(
        'service_led28bd',
        'template_9vm1dw6',
        form.current,
        'IXEyL3xjCMoc12wcW'
      );

      await Promise.all([campEmail]);

      setSubmitCheck(true);
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

            {submitCheck && <SubmitConfirmation />}

            {!submitCheck && (
              <div>
                <h4 className='text-left'>영어캠프 참가신청서</h4>
                <hr />

                <div className='currApplyForm text-left'>
                  <Form ref={form} onSubmit={sendEmail}>
                    <Row className='mb-3'>
                      <Form.Group as={Col} controlId='formKoreanName'>
                        <Form.Label>참가자 이름 (한글)*</Form.Label>
                        <Form.Control
                          type='text'
                          name='campNameKor'
                          value={values.campNameKor}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='formEnglishName'>
                        <Form.Label>참가자 이름 (영어)*</Form.Label>
                        <Form.Control
                          type='text'
                          name='campNameEng'
                          value={values.campNameEng}
                          onChange={handleChange}
                        />
                        <Form.Text className='text-muted'>
                          여권에 표기된 영문이름과 동일해야 합니다.
                        </Form.Text>
                      </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                      <Form.Group as={Col} controlId='formClass'>
                        <Form.Label>학년*</Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          name='campGrade'
                          onChange={handleChange}
                          defaultValue='학년을 선택해주세요'
                        >
                          <Form.Control type='class' />
                          <option value='학년을 선택해주세요' disabled>
                            학년을 선택해주세요
                          </option>
                          <option value='유치원'>
                            유치원생 (만 3세 ~ 5세)
                          </option>
                          <option value='초등학교 1학년'>초등학교 1학년</option>
                          <option value='초등학교 2학년'>초등학교 2학년</option>
                          <option value='초등학교 3학년'>초등학교 3학년</option>
                          <option value='초등학교 4학년'>초등학교 4학년</option>
                          <option value='초등학교 5학년'>초등학교 5학년</option>
                          <option value='초등학교 6학년'>초등학교 6학년</option>
                          <option value='중학교 1학년'>중학교 1학년</option>
                          <option value='중학교 2학년'>중학교 2학년</option>
                          <option value='중학교 3학년'>중학교 3학년</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId='birthday'>
                        <Form.Label>생년월일*</Form.Label>
                        <Form.Control
                          type='date'
                          name='campBirthday'
                          onChange={handleChange}
                          value={values.campBirthday}
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group controlId='gender' className='mb-4'>
                      <Form.Label>성별*</Form.Label>
                      <div key={`gender-checkbox`}>
                        <Form.Check
                          inline
                          label='남자'
                          name='campGender'
                          type='radio'
                          value='남자'
                          id={`gender-checkbox-1`}
                          onChange={handleChange}
                        />
                        <Form.Check
                          inline
                          label='여자'
                          name='campGender'
                          type='radio'
                          value='여자'
                          id={`gender-checkbox-1`}
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Group>

                    <Row className='mb-3'>
                      <Form.Group as={Col} controlId='formKakao'>
                        <Form.Label>카카오톡 ID*</Form.Label>
                        <Form.Control
                          type='text'
                          name='campKakao'
                          value={values.campKakao}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='formEmail'>
                        <Form.Label>신청자 이메일*</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='name@example.com'
                          name='campEmail'
                          value={values.campEmail}
                          onChange={handleChange}
                        />
                        <Form.Text className='text-muted'>
                          신청후 확인 이메일이 발송됩니다.
                        </Form.Text>
                      </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                      <Form.Group as={Col} controlId='formSubmitter'>
                        <Form.Label>신청자 (이름)*</Form.Label>
                        <Form.Control
                          type='name'
                          name='campApplicant'
                          onChange={handleChange}
                          value={values.campApplicant}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='formSubmitterRole'>
                        <Form.Label>신청자 (참가학생과의 관계)</Form.Label>
                        <Form.Control
                          type='name'
                          name='campRelation'
                          onChange={handleChange}
                          value={values.campRelation}
                        />
                      </Form.Group>
                    </Row>

                    <hr></hr>

                    <Row className='mb-3'>
                      <Form.Group controlId='abroad' as={Col}>
                        <Form.Label>해외 영어연수 경험*</Form.Label>
                        <div key={`abroad-checkbox`}>
                          <Form.Check
                            inline
                            label='있음'
                            name='campAbroad'
                            type='radio'
                            value='있음'
                            id={`abroad-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='없음'
                            name='campAbroad'
                            type='radio'
                            value='없음'
                            id={`abroad-checkbox-1`}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} controlId='formCountry'>
                        <Form.Label>연수국가</Form.Label>
                        <Form.Control
                          type='text'
                          name='campCountry'
                          value={values.campCountry}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>

                    <hr></hr>

                    {/* <Row className='mb-3'>
                      <Form.Group as={Col} controlId='formDuration'>
                        <Form.Label>연수기간*</Form.Label>
                        <div key={`duration-checkbox`}>
                          <Form.Check
                            inline
                            label='4주(1차) : 2023년 1월1일 ~ 1월28일'
                            name='campDuration'
                            type='radio'
                            value='4주(1차) : 2023년 1월1일 ~ 1월28일'
                            id={`duration-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='4주(2차) : 2023년 1월15일 ~ 2월11일'
                            name='campDuration'
                            type='radio'
                            value='4주(2차) : 2023년 1월15일 ~ 2월11일'
                            id={`duration-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            label='6주 : 2023년 1월1일 ~ 2월11일'
                            name='campDuration'
                            type='radio'
                            value='6주 : 2023년 1월1일 ~ 2월11일'
                            id={`duration-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='8주 : 2023년 1월1일 ~ 2월25일'
                            name='campDuration'
                            type='radio'
                            value='8주 : 2023년 1월1일 ~ 2월25일'
                            id={`duration-checkbox-1`}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group controlId='airport' as={Col}>
                        <Form.Label>출발공항*</Form.Label>
                        <div key={`airport-checkbox`}>
                          <Form.Check
                            inline
                            label='인천출발'
                            name='campAirport'
                            type='radio'
                            value='인천출발'
                            id={`airport-checkbox-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='부산출발'
                            name='campAirport'
                            type='radio'
                            value='인천출발'
                            id={`airport-checkbox-1`}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                    </Row> */}

                    {/* <hr /> */}

                    <Form.Group className='mb-3'>
                      <Form.Label>학생성격 및 영어능력*</Form.Label>
                      <Form.Control
                        name='campAttb'
                        as='textarea'
                        rows={4}
                        value={values.campAttb}
                        onChange={handleChange}
                      />
                      <Form.Text className='text-muted'>
                        학생 성격 (성향) 및 영어 능력을 간단하게 적어주세요.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>건강 숙지사항</Form.Label>
                      <Form.Control
                        name='campHealth'
                        as='textarea'
                        rows={4}
                        value={values.campHealth}
                        onChange={handleChange}
                      />
                      <Form.Text className='text-muted'>
                        복용하는 약, 알레르기, 조심해야 하는 음식 등 참고해야 할
                        부분을 적어주세요.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>기타 참고사항</Form.Label>
                      <Form.Control
                        name='campMisc'
                        as='textarea'
                        rows={4}
                        value={values.campMisc}
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
                        모든 필수* 정보를 입력해주세요.
                      </div>
                    )}

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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumApply;
