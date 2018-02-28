import React, { Component } from 'react';
import './TGS.css';

export default class TGS extends Component {

  constructor() {
    super();

    this.state= {
      clicked: false
    }
  }

  startButton(e) {
    this.setState({clicked: true})
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

    return <PageOne />
  }

}

function PageOne() {

  return (
    <div className="PageOne">
      <h1>Have you seen it?</h1>
    </div>
    )

}