import React from 'react';
import AdvanceButton from './AdvanceButton'
import '../styles/LandingPage.css'

export default function LandingPage(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="LandingPage">
      <h1>The Greatest Showman</h1>
      <h4>Starring: Hugh Jackman, Michelle Williams, Zac Efron & Zendaya</h4>
      <AdvanceButton text="Start" onClick={e => props.updateKey(e, 'two')} />
    </div>
  );
}