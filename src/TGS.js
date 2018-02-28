import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import QuestionOne from './components/QuestionOne';
import GoNow from './components/GoNow';
import QuestionTwo from './components/QuestionTwo';
import GoodAnswer from './components/GoodAnswer';
import BadAnswer from './components/BadAnswer';


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

  updateCurrentKey(e, choice) {
    this.setState({
      currentKey: choice
    })
  }

  render() {
    const Component=COMPONENTS[this.state.currentKey]
    return <Component updateKey={(e, choice) => this.updateCurrentKey(e, choice)}/>
  }
}