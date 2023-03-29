import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createSurvey, reset } from '../features/surveys/surveySlice'
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'
import TextField from '@mui/material/TextField'

function CreateNewSurvey() {
  const [formdata, setFormdata] = useState({
    title: '',
    description: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { isLoading, isError, message } = useSelector((state) => state.survey)

  useEffect(() => {
    dispatch(reset())
  }, [isError, message, dispatch, navigate])

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const { title, description } = formdata

  const handleSubmit = (e) => {
    e.preventDefault()

    const surveyData = {
      title,
      description,
      user_id: user.id
    }

    dispatch(createSurvey(surveyData))
    toast.success('Anket başarıyla oluşturuldu.')
  }

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="w-screen h-screen flex justify-center items-start">
        <div className="w-4/5 ">
          <h1 className="font-bold text-3xl text-center">Yeni Anket Oluştur</h1>
          <hr className="border-2 border-black" />

          <div className="flex flex-col justify-center items-center">
            <h1 className="m-2">Yeni anket oluşturmak için aşağıdaki bilgileri doldurun.</h1>

            <div className="flex ">
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={handleChange}
                  name="title"
                  value={title}
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
                  value={description}
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
                    Anketi Oluştur
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateNewSurvey
