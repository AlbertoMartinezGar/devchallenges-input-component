import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';

import { useState } from 'react';

function App() {

  const [icon, setIcon] = useState("")
  const rowObj = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }

  return (
    <div className="App">
      <h1>Input Component</h1> 
      {/* Normal Input */} 
      <p className='text'>&lt; Input /&gt;</p>
      <Input/>

      {/* Input with error */} 
      <p className='text'>&lt; Input error /&gt;</p>
      <Input error/>

      {/* Input disabled */} 
      <p className='text'>&lt; Input disabled /&gt;</p>
      <Input disabled/>

      {/* Input with helper text */} 
      <p className='text'>&lt; Input helperText="" /&gt;</p>
      <div style={rowObj}>
        <Input helperText="Some interesting text"/>
        <Input helperText="Some interesting text" error/>
      </div>

      {/* Input with icons */} 
      <p className='text'>&lt; Input startIcon/endIcon="" /&gt;</p>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      <div style={rowObj}>
        <Input helperText="Some interesting text"/>
        <Input helperText="Some interesting text" error/>
      </div>
      
    </div>
  );
}

export default App;
