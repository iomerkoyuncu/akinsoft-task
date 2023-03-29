import React, { useState, useEffect } from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import { addAnswer } from '../features/answers/answerSlice'
import { useSelector, useDispatch } from 'react-redux'

function QuestionCard({ question }) {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
    dispatch(addAnswer({ questionId: question.question_id, answer: event.target.value }))
  }

  return (
    <div className="border-4 rounded-md border-black p-5 m-2">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <span className="font-bold">{question.question}</span>
        </FormLabel>
        <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
          <FormControlLabel value="1" control={<Radio />} label="Kesinlikle Katılmıyorum" />
          <FormControlLabel value="2" control={<Radio />} label="Katılmıyorum" />
          <FormControlLabel value="3" control={<Radio />} label="Kısmen Katılıyorum" />
          <FormControlLabel value="4" control={<Radio />} label="Katılıyorum" />
          <FormControlLabel value="5" control={<Radio />} label="Kesinlikle Katılıyorum" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default QuestionCard
