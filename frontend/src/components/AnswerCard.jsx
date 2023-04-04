import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getQuestionById } from '../features/questions/questionSlice'

import Spinner from '../components/Spinner'

function AnswerCard(answer) {
  const dispatch = useDispatch()

  const [question, setQuestion] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getQuestionById(answer.answer.question_id)).then((res) => {
      setQuestion(res.payload)
      setIsLoading(false)
    })
  }, [dispatch, answer.answer.question_id])

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="w-full border-4 border-black rounded-lg p-2 m-2 transition ease-in-out delay-150 hover:scale-105 duration-300">
        <div className="flex justify-between">
          <h1 className="font-bold underline text-xl p-2">ID</h1>
          <p className="font-bold underline p-2">SORU</p>
          <p className="font-bold underline p-2">CEVABINIZ</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-xl ">{answer.answer.question_id}</h1>
          <p className="">{question.question}</p>
          <p className="">{answer.answer.answer}</p>
        </div>
      </div>
    )
  }
}

export default AnswerCard
