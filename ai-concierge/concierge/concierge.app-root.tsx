import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConciergeApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <ConciergeApp />
  </BrowserRouter>
), document.getElementById('root'));

