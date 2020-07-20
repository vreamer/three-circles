import React, { useState } from 'react';
import './App.scss';

const CIRCLE_RADIUS = 150
const INTERSECT_OFFSET = 25
const CIRCLE_STROKE_WIDTH = 3
const width = 2 * CIRCLE_RADIUS + (CIRCLE_RADIUS - INTERSECT_OFFSET) * 1.732
const height = 2 * CIRCLE_RADIUS + (CIRCLE_RADIUS - INTERSECT_OFFSET) * 1.5

function App() {
  const [goal, setGoal] = useState(false)
  const [action, setAction] = useState(false)
  const [knowledge, setKnowledge] = useState(false)

  const onCircleClick = (e) => {
    const elements = document.elementsFromPoint(e.pageX, e.pageY)
    const selectedCircles = elements.filter(e => e.nodeName === 'circle' && e.className.baseVal.indexOf('menu-circle') >= 0)
    selectedCircles.forEach((c) => {
      switch (c.id) {
        case 'menu-circle-goals':
          setGoal(!goal)
          break
        case 'menu-circle-actions':
          setAction(!action)
          break
        case 'menu-circle-knowledge':
          setKnowledge(!knowledge)
          break
        default:
          console.log('circle does not belong to menu')
      }
    })
  }

  return (
    <div className='app-container'>
      <h3>Three Circles</h3>
      <svg width={width} height={height}>
        <circle id='menu-circle-goals' className={'menu-circle goals ' + (goal ? 'selected' : '')} onClick={onCircleClick} cx={width / 2} cy={CIRCLE_RADIUS} r={CIRCLE_RADIUS - CIRCLE_STROKE_WIDTH} />
        <circle id='menu-circle-actions' className={'menu-circle actions ' + (action ? 'selected' : '')} onClick={onCircleClick} cx={CIRCLE_RADIUS} cy={height - CIRCLE_RADIUS} r={CIRCLE_RADIUS - CIRCLE_STROKE_WIDTH} />
        <circle id='menu-circle-knowledge' className={'menu-circle knowledge ' + (knowledge ? 'selected' : '')} onClick={onCircleClick} cx={width - CIRCLE_RADIUS} cy={height - CIRCLE_RADIUS} r={CIRCLE_RADIUS - CIRCLE_STROKE_WIDTH} />
      </svg>
    </div>
  );
}

export default App;
