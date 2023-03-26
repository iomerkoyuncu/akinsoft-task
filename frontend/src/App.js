import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import CreateNewSurvey from './pages/CreateNewSurvey';
import MySurveys from './pages/MySurveys';
import Survey from './pages/Survey';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/new-survey' element={<CreateNewSurvey />} />
          <Route path='/my-surveys' element={<MySurveys />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
