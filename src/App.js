import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (event) => {
      setResult(result.concat(event.target.value));
  }
  const calculate = () => {
      setResult(eval(result).toString());
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0,-1));
  }
  
  return (
    <div className = "ctn">
        <form>
            <input type="text" value={result} placeholder="0" className="answer"/>
        </form>
        <div className="keys">
            <button id="clear" onClick={clear} className="sign"><i class="fas fa-trash"></i></button>
            <button onClick={backspace} id="backspace" className="sign"><i class="fas fa-backspace"></i></button>
            <button name ="%" onClick={handleClick} value="%" className="sign">%</button>
            <button name ="/" onClick={handleClick} value="/" className="sign">&divide;</button>
            <button name ="7" onClick={handleClick} value="7">7</button>
            <button name ="8" onClick={handleClick} value="8">8</button>
            <button name ="9" onClick={handleClick} value="9">9</button>
            <button name ="*" onClick={handleClick} value="*" className="sign">x</button>
            <button name ="4" onClick={handleClick} value="4">4</button>
            <button name ="5" onClick={handleClick} value="5">5</button>
            <button name ="6" onClick={handleClick} value="6">6</button>
            <button name ="-" onClick={handleClick} value="-" className="sign">-</button>
            <button name ="1" onClick={handleClick} value="1">1</button>
            <button name ="2" onClick={handleClick} value="2">2</button>
            <button name ="3" onClick={handleClick} value="3">3</button>
            <button name ="+" onClick={handleClick} value="+" className="sign">+</button>
            <button id="clone" className="sign"><a href="https://github.com/MeneghiniOrnella" target="_blank" className="sign"><i class="fab fa-github-alt"></i></a></button>
            <button name ="0" onClick={handleClick} value="0">0</button>
            <button name ="." onClick={handleClick} value=".">.</button>
            <button name ="=" onClick={calculate} value="=" className="sign" id="equidad">=</button>
          </div>
    </div>
  );
}

export default App;