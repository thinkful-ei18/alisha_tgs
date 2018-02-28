import React, { Component } from 'react';
import './TGS.css';

const COMPONENTS = {
  one: LandingPage,
  two: QuestionOne,
  // three: GoNow,
  // four: QuestionTwo,
  // five: GoodAnswer,
  // six: BadAnswer
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

function LandingPage(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

  return (
    <div className="TGS">
      <h1>The Greatest Showman</h1>
      <h4>Starring: Hugh Jackman, Michelle Williams, Zac Efron & Zendaya</h4>
      <button onClick={(e) => props.updateKey(e, 'two')}>Start</button>
    </div>
  );
}

function QuestionOne(props) {
  // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

    return (
      <div className="QuestionOne">
        <h1>Have you seen it?</h1>
        <YesButton />
        <NoButton />
      </div>
    )
  }

function YesButton(props) {

  // if(this.state.currentKey === 'two') {
    return (
      <span className="button">
        <button onClick={(e) => props.updateKey(e, 'four')}>yes</button>
      </span>
    )
//   }

//   return (
//     <span className="button">
//       <button onClick={(e) => props.updateKey(e, 'five')}>yes</button>
//     </span>
//   )  
}

function NoButton(props) {

  // if (this.state.currentKey === 'two') {
    return (
      <span className="button">
        <button onClick={(e) => props.updateKey(e, 'three')}>no</button>
      </span>
    )
  // }

  // return (
  //   <span className="button">
  //     <button onClick={(e) => props.updateKey(e, 'six')}>yes</button>
  //   </span>
  // )  
}

// function QuestionTwo(props) {
//   // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice) 

//   return (
//     <div className="QuestionTwo">
//       <h1>Did you like it?</h1>
//       <YesButton />
//       <NoButton />
//     </div>
//   )
// }

// function GoNow(props) {
//   // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

//   return (
//     <div className="GoNow">
//       <h1>Stop what you're doing and go buy a ticket!</h1>
//     </div>
//   )
// }

// function GoodAnswer(props) {
//   // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

//   return (
//     <div className="GoodAnswer">
//       <h1>Let's be friends!!</h1>
//     </div>
//   )
// }

// function BadAnswer(props) {
//   // props = updateKey={(e, choice) => this.updateCurrentKey(e, choice)

//   return (
//     <div className="BadAnswer">
//       <h1>Booooo!!</h1>
//     </div>
//   )
// }