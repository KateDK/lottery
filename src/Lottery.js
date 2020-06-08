import React from 'react';

class Lottery extends React.Component{
  static defaultProps = {
    title: 'Lotto',
    numBalls:6,
    maxNum:40,
  }

  render(){
    const {title, numBalls, maxNum} = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

export default Lottery;
