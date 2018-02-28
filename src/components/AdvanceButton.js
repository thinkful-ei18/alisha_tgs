import React from 'react';

export default function AdvanceButton(props) {
  // props= text that goes inside button, onClick cb

  return <button type="button" onClick={() => props.onClick()}>{props.text}</button>
}