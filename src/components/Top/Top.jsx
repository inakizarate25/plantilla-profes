import './Top.css'
import React, { useState } from 'react';
import arrow from '../../assets/arrow-up (2).svg'


const Top = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="Top">
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src={arrow}  alt="" />
        </button>
      )}
    </div>
  );
};

export default Top;