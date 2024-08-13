import React from 'react'
import { BrowserRouter ,Router,Route,Routes } from 'react-router-dom';
import App from './App';
import MCQs from './components/mcqs';
import FIBs from './components/fibs';
import Numeric from './components/numeric';
import DisplayQuestions from './components/displayquestions';

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/mcq' element={<MCQs/>}/>
        <Route path='/fib' element={<FIBs/>}/>
        <Route path='/numeric' element={<Numeric/>}/>
        <Route path='/display' element={<DisplayQuestions/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
