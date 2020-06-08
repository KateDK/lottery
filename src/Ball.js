import React from 'react';
import './Ball.css'

const Ball = (props) => {
  const {num} = props;
  return <div className='Ball'>{num}</div>
}

export default Ball
