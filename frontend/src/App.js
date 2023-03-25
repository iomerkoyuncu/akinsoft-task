import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
