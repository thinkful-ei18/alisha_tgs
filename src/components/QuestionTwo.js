import React from 'react';
import AdvanceButton from './AdvanceButton'
import '../styles/QuestionTwo.css'

export default function QuestionTwo(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice) 

  return (
    <div className="QuestionTwo">
      <h1>Did you like it?</h1>
      <AdvanceButton text="yes" onClick={e => props.updateKey(e, 'five')} />
      <AdvanceButton text="no" onClick={e => props.updateKey(e, 'six')} />
    </div>
  )
}