import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../components/Spinner'
import { getUserAnswers } from '../features/answers/answerSlice'

import AnswerCard from '../components/AnswerCard'

function MySurveys() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { answers, isLoading } = useSelector((state) => state.answer)
  const { question } = useSelector((state) => state.question)

  useEffect(() => {
    dispatch(getUserAnswers(user.id))
  }, [dispatch, user.id])

  const filteredAnswers = removeDuplicatesByKey([...answers], 'question_id')

  function removeDuplicatesByKey(arr, key) {
    return arr
      .reverse()
      .filter((obj, index, self) => index === self.findIndex((t) => t[key] === obj[key]))
      .reverse()
  }

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="w-screen flex justify-center items-start">
        <div className="w-4/5 ">
          <h1 className="font-bold text-3xl text-center">Cevaplarım</h1>
          <hr className="border-2 border-black" />

          <div className="flex justify-center items-center">
            <div className="flex flex-wrap">
              {filteredAnswers.map((answer, index) => (
                <AnswerCard key={index} answer={answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MySurveys
