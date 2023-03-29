import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add'
import TextField from '@mui/material/TextField'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import QuestionCard from '../components/QuestionCard'
import { getQuestionsBySurveyId } from '../features/questions/questionSlice'
import { getSurveyById } from '../features/surveys/surveySlice'

function Survey() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const { questions } = useSelector((state) => state.question)
  const { survey } = useSelector((state) => state.survey)

  useEffect(() => {
    dispatch(getQuestionsBySurveyId(params.id))
    dispatch(getSurveyById(params.id))
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="w-4/5 ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl ">{survey.title}</h1>
          <h1 className="font-bold text-xl ">{survey.description}</h1>
        </div>
        <hr className="border-2 border-black" />

        <div className="flex flex-col justify-center items-center">
          <form>
            {questions.map((question) => (
              <QuestionCard question={question} />
            ))}
            <hr className="border-2 border-black" />
            {questions.length > 0 ? (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <h4 className="p-2 ">Cevapları Kaydet</h4>
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-xl ">Henüz Soru eklenmemiş.</h1>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Survey
