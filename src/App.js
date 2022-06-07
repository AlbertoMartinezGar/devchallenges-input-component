import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';

import React, { useState } from 'react';

function App() {

  const [icon, setIcon] = useState("pets")
  const rowObj = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }

  const room = "room";
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
      <p>Choose an Icon...</p>
      <select onChange={(e) => {setIcon(e.target.value)}}>
        <option>pets</option>
        <option>assignment</option>
        <option>savings</option>
        <option>perm_identity</option>
        <option>translate</option>
      </select>
      <div style={rowObj}>
        <Input startIcon={icon}/>
        <Input endIcon={icon}/>
      </div>
      
      {/* Input text */}
      <p className='text'>&lt; Input value="Text" /&gt;</p>
      <Input value="Text"/>

      {/* Input sizes */} 
      <p className='text'>&lt; Input size="" /&gt;</p>
      <div style={rowObj}>
        <Input size="sm"/>
        <Input size="md"/>
      </div>
    </div>
  );
}

export default App;
