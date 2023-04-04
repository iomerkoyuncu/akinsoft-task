import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserSurveys, reset } from '../features/surveys/surveySlice'

import Spinner from '../components/Spinner'
import SurveyCard from '../components/SurveyCard'

function MySurveys() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { surveys, isLoading, isSuccess } = useSelector((state) => state.survey)

  useEffect(() => {
    dispatch(getUserSurveys(user.id))
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="w-screen h-screen flex justify-center items-start">
        <div className="w-4/5 ">
          <h1 className="font-bold text-3xl text-center">Anketlerim</h1>
          <hr className="border-2 border-black" />

          <div className="flex flex-col justify-center items-center">
            <h1 className="m-2">Anketlerinizi buradan yönetebilirsiniz.</h1>

            <div className="flex flex-wrap justify-center items-center">
              {surveys.map((survey) => (
                <SurveyCard key={survey.id} survey={survey} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MySurveys
