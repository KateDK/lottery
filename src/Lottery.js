import React from 'react';
import Ball from './Ball';

class Lottery extends React.Component{
  state ={
    balls: [],
  }

  static defaultProps = {
    title: 'Lotto',
    numBalls:6,
    maxNum:40,
  }


  drawBalls = (props) => {
    console.log('yo');
    const {numBalls,maxNum} = this.props;
    const balls = [];
    for(let i = 1; i <= numBalls; i++){
      balls.push(Math.ceil(Math.random() * maxNum));
    }
    this.setState({balls});
  }


  render(){
    const {title} = this.props;
    const {balls} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {balls.map(ball => <Ball num={ball} key={ball+Math.random()}/>)}
        <button onClick={this.drawBalls}>generate</button>
      </div>
    )
  }
}

export default Lottery;
