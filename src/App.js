import './App.css';
import Box from './component/Box.js';
import { useState } from 'react';

const styles = {
  text : {
    textAlign: 'center'
  },
  wrapper : {
    padding: '1rem',
    width: '700px',
    border: '1px solid gray',
    margin: '1rem auto'
  },
  flex : {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

const choice = { 
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const [computerResult, setComputerResult] = useState('');

  const play = (userChoice)=>{
    let computerChoice = randomChoice();

    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);

    let playResult = judgement(choice[userChoice],computerChoice);
    setResult(playResult);

    let computerPlayResult = computerJudgement(playResult)
    setComputerResult(computerPlayResult);
  }

  const judgement = (user, computer) =>{
    console.log(user,computer);
    if(user.name === computer.name){
      return "TIE"
    }else if(user.name === "Rock"){
      return computer.name === "Scissors" ? "WIN" : "LOSE"
    }else if(user.name === "Scissors"){
      return computer.name === "Paper" ? "WIN" : "LOSE"
    }else if(user.name === "Paper"){
      return computer.name === "Rock" ? "WIN" : "LOSE"
    }
  }

  const computerJudgement = (result)=>{
    if(result === "TIE"){
      return "TIE"
    }else{
      return result === "WIN"? "LOSE":"WIN"
    }
  }

  const randomChoice = ()=>{
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 array로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    // console.log(itemArray,randomItem);
    // console.log(randomItem);
    // console.log(finalItem);

    return choice[finalItem];
  }

  return (
    <div>
      <h1 style={styles.text}>가위바위보✊✌️🖐️</h1>
      <div style={styles.wrapper}>
        <div style={styles.flex}>
          <Box title="YOU" item={userSelect} result={result}/>
          <Box title="COMPUTER" item={computerSelect} result={computerResult}/>
        </div>
        <div>
          <div className="btn-group">
            <button onClick={()=>play("scissors")}>가위</button>
            <button onClick={()=>play("rock")}>바위</button>
            <button onClick={()=>play("paper")}>보</button>
          </div>
          <h2 style={styles.text}>
            
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
