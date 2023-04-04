import React, { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSurvey } from '../features/surveys/surveySlice'
import { createQuestion, getQuestionsBySurveyId, reset } from '../features/questions/questionSlice'
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'
import TextField from '@mui/material/TextField'
import Question from '../components/Question'

function EditSurvey() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const { user } = useSelector((state) => state.auth)
  const { surveys } = useSelector((state) => state.survey)
  const { questions, isError, message, isSuccess, isLoading } = useSelector((state) => state.question)

  const existingSurvey = surveys.find((survey) => survey.survey_id === Number(params.id))

  const { survey_id, user_id, title, description } = existingSurvey

  const [formdata, setFormdata] = useState({
    title,
    description
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedSurveyData = {
      id: survey_id,
      surveyData: {
        title: formdata.title,
        description: formdata.description
      }
    }

    dispatch(updateSurvey(updatedSurveyData))
    toast.success('Anket başarıyla güncellendi.')
    navigate('/my-surveys')
  }

  const [question, setQuestion] = useState('')

  const handleQuestionSubmit = (e) => {
    e.preventDefault()

    const questionData = {
      survey_id,
      question
    }

    dispatch(createQuestion(questionData))
    toast.success('Soru başarıyla eklendi.')
    setQuestion('')
  }

  useEffect(() => {
    dispatch(getQuestionsBySurveyId(survey_id))
  }, [dispatch, survey_id])

  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="w-4/5 ">
        <h1 className="font-bold text-3xl ">Anketi Düzenle</h1>
        <hr className="border-2 border-black" />

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex mt-4">
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={handleChange}
                  name="title"
                  value={formdata.title}
                  id="outlined-basic"
                  label="Anket Adı"
                  variant="outlined"
                  sx={{
                    width: '300px',
                    margin: '5px'
                  }}
                />
                <TextField
                  onChange={handleChange}
                  name="description"
                  value={formdata.description}
                  id="outlined-basic"
                  label="Anket Konusu"
                  variant="outlined"
                  sx={{
                    width: '300px',
                    margin: '5px'
                  }}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex justify-between items-center p-2 m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                  >
                    Değişiklikleri Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-3xl ">Soruları Düzenle</h1>
        <hr className="border-2 border-black" />
        <div className="flex justify-center">
          <button
            className="flex justify-between items-center p-2 m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
            onClick={() => dispatch(getQuestionsBySurveyId(survey_id))}
          >
            Yenile
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center">
            {questions.length > 0 && !isLoading ? (
              questions.map((question) => <Question key={question.question_id} question={question} />)
            ) : (
              <h1 className="p-2">Bu ankette hiç soru yok.</h1>
            )}
          </div>
        </div>
        <h1 className="font-bold text-3xl ">Soru Ekle</h1>
        <hr className="border-2 border-black" />

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex mt-4">
              <form onSubmit={handleQuestionSubmit} className="flex">
                <TextField
                  onChange={(e) => setQuestion(e.target.value)}
                  name="question"
                  value={question}
                  id="outlined-basic"
                  label="Soru"
                  variant="outlined"
                  sx={{
                    width: '300px',
                    margin: '5px'
                  }}
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex justify-between items-center p-2 m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                  >
                    Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditSurvey
