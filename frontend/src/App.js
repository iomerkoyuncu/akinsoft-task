import React from 'react';

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>

  );
}

export default App;
