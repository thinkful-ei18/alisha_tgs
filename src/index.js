import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TGS from './TGS';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TGS />, document.getElementById('root'));
registerServiceWorker();
