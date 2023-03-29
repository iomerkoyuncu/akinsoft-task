import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuestion, deleteQuestion } from '../features/questions/questionSlice'

import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'
import TextField from '@mui/material/TextField'

function Question({ question }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    question: question.question
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleQuestionSubmit = (e) => {
    e.preventDefault()

    dispatch(
      updateQuestion({
        id: question.question_id,
        question: formData.question
      })
    )
    toast.success('Soru başarıyla güncellendi')
  }

  const handleDelete = (e) => {
    e.preventDefault()

    dispatch(deleteQuestion(question.question_id))
    toast.success('Soru silindi.')
  }

  return (
    <div className="flex mt-4">
      <form className="flex" onSubmit={handleQuestionSubmit}>
        <TextField
          onChange={handleChange}
          name="question"
          value={formData.question}
          id="outlined-basic"
          label="Soru"
          variant="outlined"
          sx={{
            width: '300px',
            margin: '5px'
          }}
        />

        <div className="flex ">
          <button onClick={handleDelete}>
            <h4 className="flex justify-between items-center p-2 m-2 px-2 mx-2 text-white bg-red-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer">
              Sil
            </h4>
          </button>
          <button type="submit">
            <h4 className='className="flex justify-between items-center p-2 m-2 px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"'>
              Düzenle
            </h4>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Question
