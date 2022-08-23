import React from 'react';

const SubmitConfirmation = () => {
  return (
    <div>
      <i className='fa fa-envelope display-4'></i>
      <div>
        <div className='h3 fw-bold mb-3 mt-3'>정상적으로 접수 되었습니다.</div>
        <div>
          고객님의 상담문의가 정상적으로 접수 되었습니다.
          <br />
          내용 확인 후 기재해주신 연락처로 연락 드리겠습니다.
          <br />
          감사합니다.
        </div>
      </div>
    </div>
  );
};

export default SubmitConfirmation;
