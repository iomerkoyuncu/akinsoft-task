import React, { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSurvey, reset } from '../features/surveys/surveySlice'
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'
import TextField from '@mui/material/TextField'

function EditSurvey() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const { user } = useSelector((state) => state.auth)
  const { surveys } = useSelector((state) => state.survey)

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

  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="w-4/5 ">
        <h1 className="font-bold text-3xl text-center">Anketi Düzenle</h1>
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
      </div>
    </div>
  )
}

export default EditSurvey
