import React from 'react';
import AdvanceButton from './AdvanceButton';
import '../styles/GoodAnswer.css'


export default function GoodAnswer(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="GoodAnswer">
      <h1>Let's be friends!!</h1>
      <AdvanceButton text="start over" onClick={e => props.updateKey(e, 'one')} />
    </div>
  )
}