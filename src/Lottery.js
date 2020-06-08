import React from 'react';
import Ball from './Ball';
import './Lottery.css';


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
      <div className='Lottery'>
        <h1>{title}</h1>
        <div className="Lottery_balls">
          {balls.map(ball => <Ball num={ball} key={ball+Math.random()}/>)}
        </div>
        <button className='Lottery_button' onClick={this.drawBalls}>generate</button>
      </div>
    )
  }
}

export default Lottery;
