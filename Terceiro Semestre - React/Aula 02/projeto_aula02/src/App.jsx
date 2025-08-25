import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Raul from './components/Raul';
import './App.css';
import Welcome from './components/Welcome';
import Contador from './components/Conteiror';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Raul' Component={Raul}/>
        <Route path='/Seja-Welcomado' Component={Welcome}/>
        <Route path='/Contador' Component={Contador}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;