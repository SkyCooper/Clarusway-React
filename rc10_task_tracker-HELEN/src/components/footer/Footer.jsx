import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-info'>
        This project created by using @React. For recording and deleting task
        list @mockAPI used. And for the updating task list @axios used.  <br /> @Cooper, {new Date().getFullYear()} , Istanbul
      </p>
    </div>
  );
}

export default Footer