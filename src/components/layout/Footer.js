import React from 'react';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className='footer-copyright text-center py-3'>
      &copy; {year} SUCCESS ACADEMY. All Right Reserved.
    </div>
  );
};

export default Footer;
