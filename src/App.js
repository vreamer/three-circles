import React, {useState} from 'react';
import './App.css';

function App() {
  const [goal, setGoal] = useState(false)
  const [action, setAction] = useState(false)
  const [knowledge, setKnowledge] = useState(false)

  return (
    <div className='app-container'>
      <h3>Three Circles</h3>
      <div className='three-circles-container'>
        <div onClick={() => setGoal(!goal)} className={'goal-circle' + (goal ? ' selected' : '')}></div>
        <div onClick={() => setAction(!action)} className={'action-circle' + (action ? ' selected' : '')}></div>
        <div onClick={() => setKnowledge(!knowledge)} className={'knowledge-circle' + (knowledge ? ' selected' : '')}></div>
      </div>
    </div>
  );
}

export default App;
