import React, { useRef } from 'react';
import "./refresher.css";

function RefreshButton() {
  const buttonRef = useRef();

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button className='ref-btn' ref={buttonRef} onClick={handleClick}>
      Reset Transaction
    </button>
  );
}

export default RefreshButton;