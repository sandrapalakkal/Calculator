import { useState } from 'react'
import './App.css'

function App() {
  const [total, setTotal] = useState('');
  const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
  }

  const clear = () => {
    setTotal("");
  }

  function handleDelete() {
    setTotal(total.slice(0, -1));
  }

  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    }
    catch {
      setTotal("Error");
    }

  }
  return (
    <>
      <div className='App'>
        <h1>Calculator</h1>
        <div className='container'>
          <form action="">
            <input type="text" value={total} />
          </form>

          <div className="keypad">
            <button onClick={clear} id='clear'>AC</button>
            <button id='delete' onClick={handleDelete}>DEL</button>
            <button name='/' onClick={handleClick} className='highlight'>&divide;</button>
            <button className='numbers' name='7' onClick={handleClick}>7</button>
            <button className='numbers' name='8' onClick={handleClick}>8</button>
            <button className='numbers' name='9' onClick={handleClick}>9</button>
            <button name='*' onClick={handleClick} className='highlight'>&times;</button>
            <button className='numbers' name='4' onClick={handleClick}>4</button>
            <button className='numbers' name='5' onClick={handleClick}>5</button>
            <button className='numbers' name='6' onClick={handleClick}>6</button>
            <button name='-' onClick={handleClick} className='highlight'>-</button>
            <button className='numbers' name='1' onClick={handleClick}>1</button>
            <button className='numbers' name='2' onClick={handleClick}>2</button>
            <button className='numbers' name='3' onClick={handleClick}>3</button>
            <button name='+' onClick={handleClick} className='highlight'>+</button>
            <button name='.' onClick={handleClick}>.</button>
            <button className='numbers' name='0' onClick={handleClick}>0</button>
            <button onClick={calculate} className='highlight' id='equal'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
