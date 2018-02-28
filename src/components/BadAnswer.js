import React from 'react';
import AdvanceButton from './AdvanceButton';
import '../styles/BadAnswer.css'

export default function BadAnswer(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="BadAnswer">
      <h1>Maybe you should watch it again...</h1>
      <AdvanceButton text="start over" onClick={e => props.updateKey(e, 'one')} />
    </div>
  )
}