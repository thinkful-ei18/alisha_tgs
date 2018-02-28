import React, { Component } from 'react';
import './TGS.css';

const COMPONENTS = {
  one: LandingPage,
  two: QuestionOne,
  three: GoNow,
  four: QuestionTwo,
  five: GoodAnswer,
  six: BadAnswer
};

export default class TGS extends Component {

  constructor() {
    super();
    this.state= {
      currentKey: 'one'
    }
  }

  render() {
    const Component=COMPONENTS[this.state.currentKey]
    return <Component />
  }
}

function LandingPage() {
  return (
    <div className="TGS">
      <h1>The Greatest Showman</h1>
      <h4>Starring: Hugh Jackman, Michelle Williams, Zac Efron & Zendaya</h4>
      <button onClick={e => this.startButton(e)}>Start</button>
    </div>
  );
}

function QuestionOne() {

    return (
      <div className="QuestionOne">
        <h1>Have you seen it?</h1>
        <YesButton />
        <NoButton />
      </div>
    )
  }

function YesButton() {

  return (
    <span className="button">
      <button onClick={e => this.yesButton(e)}>yes</button>
    </span>
  )
}

function NoButton() {

  return (
    <span className="button">
      <button onClick={e => this.noButton(e)}>no</button>
    </span>
  )
}

function QuestionTwo() {

  return (
    <div className="QuestionTwo">
      <h1>Did you like it?</h1>
      <YesButton />
      <NoButton />
    </div>
  )
}

function GoNow() {

  return (
    <div className="GoNow">
      <h1>Stop what you're doing and go buy a ticket!</h1>
    </div>
  )
}

function GoodAnswer() {

  return (
    <div className="GoodAnswer">
      <h1>Let's be friends!!</h1>
    </div>
  )
}

function BadAnswer() {

  return (
    <div className="BadAnswer">
      <h1>Booooo!!</h1>
    </div>
  )
}