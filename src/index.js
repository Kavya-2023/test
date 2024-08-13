// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuestionProvider } from './contexts/questions'; 
import AllRoutes from './AllRoutes';

ReactDOM.render(
  <QuestionProvider>
    <AllRoutes/>
  </QuestionProvider>,
  document.getElementById('root')
);
