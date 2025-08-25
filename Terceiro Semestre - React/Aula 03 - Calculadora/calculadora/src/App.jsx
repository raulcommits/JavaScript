import './App.css';
import Botoes from './components/Botoes/Index';
import Display from './components/Display/index';
import { useState } from 'react';

function App() {

  const initialStates = [{
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
  }]

  const [states, setStates] = useState(...initialStates);

  function addNumber(number) {
    if (number === '.' && states.displayValue.includes('.')){
      return
    }

    // Tratamento para que não fique um 0 no inicio ao digitar outro valor
    const clearDisplay = states.displayValue === '0' || states.clearDisplay;

    // Pegar o valor atual display e salvar em uma variavel
    const currentValue = clearDisplay ? '' : states.displayValue;

    // Concatenação do valor do display com o número clicado
    const displayValue = currentValue + number;

    setStates(copyValue => {
      return {...copyValue, displayValue, clearDisplay: false}
    });

    const novoValor = parseFloat(displayValue);

    const values = [...states.values];
    values[states.current] = novoValor;
    setStates(copyValue => {
      return {...copyValue, values}
    });
  }

  function clearMemory() {
    setStates(...initialStates);
  }

  function setOperacao(operation) {
    if (states.current === 0) {
      setStates(copyValue => {
        return {...copyValue, operation, current: 1, clearDisplay: true}
      });
    } else {
      const equals = operation === '=';
      const values = [...states.values];

      try {
        values[0] = eval(`${values[0]} ${states.operation} ${values[1]}`);
      } catch(error) {
        values[0] = states.values[0];
      }

      values[1] = 0;

      setStates(copyValue => {
        return {
          ...copyValue,
          displayValue: values[0],
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: true,
          values
        }
      });
    }
  }

  return (
    <div className='container'>
      <h1 className='titulo'>Calculadora Etec em React</h1>
      <Display value = {states.displayValue}/>
      <div className='buttonsContainer'>
        <Botoes label="AC" type="triplo" action={clearMemory}/>
        <Botoes label="/" type="operaciones" action={() => {setOperacao('/')}}/>
        <Botoes label="7" type="" action={() => addNumber('7')}/>
        <Botoes label="8" type="" action={() => addNumber('8')}/>
        <Botoes label="9" type="" action={() => addNumber('9')}/>
        <Botoes label="*" type="operaciones" action={() => {setOperacao('*')}}/>
        <Botoes label="4" type="" action={() => addNumber('4')}/>
        <Botoes label="5" type="" action={() => addNumber('5')}/>
        <Botoes label="6" type="" action={() => addNumber('6')}/>
        <Botoes label="-" type="operaciones" action={() => {setOperacao('-')}}/>
        <Botoes label="1" type="" action={() => addNumber('1')}/>
        <Botoes label="2" type="" action={() => addNumber('2')}/>
        <Botoes label="3" type="" action={() => addNumber('3')}/>
        <Botoes label="+" type="operaciones" action={() => {setOperacao('+')}}/>
        <Botoes label="0" type="duplo" action={() => addNumber('0')}/>
        <Botoes label="." type="" action={() => addNumber('.')}/>
        <Botoes label="=" type="" action={() => {setOperacao('=')}}/>
      </div>
    </div>
  )
}

export default App