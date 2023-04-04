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

        <Header />
        <Main />
        <Footer />

      </Router>
      <ToastContainer />
    </>

  );
}

export default App;
