import React from 'react';
import '../styles/AdvanceButton.css';

export default function AdvanceButton(props) {
  // props= text that goes inside button, onClick cb

  return <button type="button" onClick={() => props.onClick()}>{props.text}</button>
}