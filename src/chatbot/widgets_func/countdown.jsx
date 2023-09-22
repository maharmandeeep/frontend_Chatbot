import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./widget.scss";


function Countdown(props) {
  
  const [count, setCount] = useState(5);
  const navigate=useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(countdownInterval);
        navigate("/profile");
        
      }
    }, 1000); 

    return () => {
     
      clearInterval(countdownInterval);
    };
  }, [count]);

  return (
    <div className='countdown'>
      <h1> {count}</h1>
      
      {count === 1 &&  <p>Redirecting to another page...</p>}
      
    </div>
  );
}

export default Countdown;
