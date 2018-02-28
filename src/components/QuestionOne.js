import React from 'react';
import AdvanceButton from './AdvanceButton'
import '../styles/LandingPage.css'

export default function QuestionOne(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="QuestionOne">
      <h1>Have you seen it?</h1>
      <AdvanceButton text="yes" onClick={e => props.updateKey(e, 'four')} />
      <AdvanceButton text="no" onClick={e => props.updateKey(e, 'three')} />
    </div>
  )
}