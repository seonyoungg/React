import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

const lists = {
  rock : {
    name : 'Rock',
    img: 'https://em-content.zobj.net/source/samsung/395/rock_1faa8.png'
  },
  scissors: {
    name : 'Scissors',
    img: 'https://em-content.zobj.net/source/google/387/scissors_2702-fe0f.png'
  },
  paper : {
    name : 'Paper',
    img: 'https://em-content.zobj.net/source/google/387/spiral-notepad_1f5d2-fe0f.png'
  }
}

export default class AppClass extends Component {
  constructor(props){
    super(props);
    this.state={
      userSelect : null,
      computerSelect : null,
      userResult: '',
      computerResult: '',
    };
  }

  randomGame = ()=>{
    let listsArray = Object.keys(lists);
    let randomItem = Math.floor(Math.random() * listsArray.length);
    let finalItem = listsArray[randomItem];
    return lists[finalItem];
  };
  
  finalState = (user, computer)=>{
    if(user === computer){
      return "TIE";
    }else if(
            (user === 'rock' && computer === 'scissors') ||
            (user === 'scissors' && computer === 'paper') ||
            (user === 'paper' && computer === 'rock')){
      return "WIN";
      }else{
        return 'LOSE';
      }
  };

  computerState = (result)=>{
    if(result === "TIE"){
      return "TIE";
    }else if(
      result === "WIN"
      ){return "LOSE";
      }else{
      return "WIN";
    };
  }

  playGame = (userChoice)=>{
    const computerChoice = this.randomGame();
    const result = this.finalState(userChoice, computerChoice.name.toLowerCase());
    const comResult = this.computerState(result);

    this.setState({
      userSelect : lists[userChoice],
      computerSelect : computerChoice,
      userResult : result,
      computerResult : comResult,  
    });
  };

  render() {
    return (
      <div className="game-wrap">
        <h1>Rock Scissors Paper</h1>
        <div className="game-box">
            <BoxClass title="YOU" 
                      name={this.state.userResult}
                      img={this.state.userSelect? this.state.userSelect.img: ''}/>
            <BoxClass title="COMPUTER"
                      name={this.state.computerResult}
                      img={this.state.computerSelect? this.state.computerSelect.img:''}/>
        </div>
        <div className="game-btn-wrap">
            <button onClick={()=>{this.playGame('rock')}}>Rock</button>
            <button onClick={()=>{this.playGame('scissors')}}>Scissors</button>
            <button onClick={()=>{this.playGame('paper')}}>Paper</button>
        </div>
      </div>
    )
  }
}
