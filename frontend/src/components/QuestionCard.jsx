import React, { useState, useEffect } from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import { useSelector, useDispatch } from 'react-redux'
import { postAnswer } from '../features/answers/answerSlice'
import { pushSurveyAnswers } from '../features/answers/answerSlice'

function QuestionCard({ question }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const [answer, setAnswer] = useState('')

  const handleChange = (event) => {
    setAnswer(event.target.value)
    dispatch(
      pushSurveyAnswers({
        question_id: question.question_id,
        answer: event.target.value,
        user_id: user.id
      })
    )
  }

  return (
    <div className="border-4 rounded-md border-black p-5 m-2">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <span className="font-bold">{question.question}</span>
        </FormLabel>
        <RadioGroup row onChange={handleChange} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
          <FormControlLabel value="Kesinlikle Katılmıyorum" control={<Radio />} label="Kesinlikle Katılmıyorum" />
          <FormControlLabel value="Katılmıyorum" control={<Radio />} label="Katılmıyorum" />
          <FormControlLabel value="Kısmen Katılıyorum" control={<Radio />} label="Kısmen Katılıyorum" />
          <FormControlLabel value="Katılıyorum" control={<Radio />} label="Katılıyorum" />
          <FormControlLabel value="Kesinlikle Katılıyorum" control={<Radio />} label="Kesinlikle Katılıyorum" />
        </RadioGroup>
      </FormControl>
      <div className="flex justify-end items-center">
        <p>SORU ID: {question.question_id}</p>
      </div>
    </div>
  )
}

export default QuestionCard
