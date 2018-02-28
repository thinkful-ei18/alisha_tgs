import React, { Component } from 'react';
import './TGS.css';


export default class TGS extends Component {

  constructor() {
    super();

    this.state= {
      clicked: false,
      yesButtonClick: false,
      noButtonClick: false
    }

    this.yesButton = this.yesButton.bind(this);
    this.noButton = this.noButton.bind(this);
  }



  startButton(e) {
    this.setState({clicked: true})
  }

  yesButton(e) {
    this.setState({ yesButtonClick: true })
  }

  noButton(e) {
    this.setState({ noButtonClick: true })
  }

  render() {

    if (!this.state.clicked) {
      return (
        <div className="TGS">
          <h1>The Greatest Showman</h1>
          <h4>Starring: Hugh Jackman, Michelle Williams, Zac Efron & Zendaya</h4>
          <button onClick={ e => this.startButton(e) }>Start</button>
        </div>
      );
    }

    return <QuestionOne />
  }
}

class QuestionOne extends Component {

  constructor() {
    super();
    this.yesButton = this.yesButton.bind(this);
    this.noButton = this.noButton.bind(this);
  }

  render() {
    if (this.state.yesButtonClick) {
      return <QuestionTwo />
    } else if (this.state.noButtonClick) {
      return <GoNow />
    }
    return (
      <div className="QuestionOne">
        <h1>Have you seen it?</h1>
        <YesButton />
        <NoButton />
      </div>
    )
  }


//   if(this.state.yesButtonClick===undefined) {
//     return (
//       <div className="QuestionOne">
//         <h1>Have you seen it?</h1>
//         <YesButton />
//         <NoButton />
//       </div>
//       )
//   } else if(this.state.yesButtonClick) {
//     return <QuestionTwo />
//   } else if (this.state.noButtonClick) {
//     return <GoNow />
//   } 
// }

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
      <h1>Did you like it></h1>
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