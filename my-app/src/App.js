import logo from './logo.svg';
import './App.css';
import {addDecimalPoint, 
  changeOperand, 
  deleteLSD, 
  peformCalculation, 
  ResetCalculation, 
  ResetDisplay, 
  insertValue, 
  DisplayValue
} from './calculator'

function App() {
  return (
    <div className="App">
      <section class="container">
        <input type="text" id="tb" class="text-input" placeholder="0" readonly/>
        <button class="c1" id="AC" onClick={ResetDisplay}>AC</button>
        <button class="c2" id="del" onClick={deleteLSD}>DEL</button>
        <button class="c2" id="div" onClick={() => changeOperand('divide')}>/</button>
        <button class="d1" id="seven" onClick={() => insertValue(7)}>7</button>
        <button class="d1" id="eight" onClick={() => insertValue(8)}>8</button>
        <button class="d1" id="nine" onClick={() => insertValue(9)}>9</button>
        <button class="d1" id="mult" onClick={() => changeOperand('multiply')}>*</button>

        <button class="e1" id="four" onClick={() => insertValue(4)}>4</button>
        <button class="e1" id="five" onClick={() => insertValue(5)}>5</button>
        <button class="e1" id="six" onClick={() => insertValue(6)}>6</button>
        <button class="e1" id="minus" onClick={() => changeOperand('subtract')}>-</button>
        <button class="f1" id="one" onClick={() => insertValue(1)}>1</button>
        <button class="f1" id="two" onClick={() => insertValue(2)}>2</button>
        <button class="f1" id="three" onClick={() => insertValue(3)}>3</button>
        <button class="f1" id="plus" onClick={() => changeOperand('add')}>+</button>
        <button class="g1" id="zero" onClick={() => insertValue(0)}>0</button>
        <button class="g1" id="dot" onClick={addDecimalPoint}>.</button>
        <button class="h2" id="equals" onClick={peformCalculation}>=</button>
      </section>
    </div>
  );
}

export default App;

