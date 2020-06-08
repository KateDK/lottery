import React from 'react';

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
    return (
      <div>
        <h1>{title}</h1>

        <button onClick={this.drawBalls}>generate</button>
      </div>
    )
  }
}

export default Lottery;
