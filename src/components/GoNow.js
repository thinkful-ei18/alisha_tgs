import React from 'react';
import AdvanceButton from './AdvanceButton';
import '../styles/LandingPage.css'

export default function GoNow(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="GoNow">
      <h1>Stop what you're doing and go buy a ticket!</h1>
      <AdvanceButton text="start over" onClick={e => props.updateKey(e, 'one')} />
    </div>
  )
}