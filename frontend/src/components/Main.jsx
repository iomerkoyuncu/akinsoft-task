import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import CreateNewSurvey from '../pages/CreateNewSurvey'
import MySurveys from '../pages/MySurveys'
import MyAnswers from '../pages/MyAnswers'
import Survey from '../pages/Survey'
import NotFound from '../pages/NotFound'
import EditSurvey from '../pages/EditSurvey'

import { useSelector } from 'react-redux'

function Main() {
  const { user } = useSelector((state) => state.auth)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {user && (
        <>
          <Route path="/new-survey" element={<CreateNewSurvey />} />
          <Route path="/edit-survey/:id" element={<EditSurvey />} />
          <Route path="/my-surveys" element={<MySurveys />} />
          <Route path="/my-answers" element={<MyAnswers />} />
          <Route path="/survey/:id" element={<Survey />} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Main
