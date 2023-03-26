import React from "react"

import { useNavigate } from "react-router-dom"

import AddIcon from "@mui/icons-material/Add"
import TextField from "@mui/material/TextField"

function CreateNewSurvey() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h-screen flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>Yeni Anket Oluştur</h1>
				<hr className='border-2 border-black' />

				<div className='flex flex-col justify-center items-center'>
					<h1 className='m-2'>
						Yeni anket oluşturmak için aşağıdaki bilgileri doldurun.
					</h1>

					<div className='flex '>
						<TextField
							id='outlined-basic'
							label='Anket Adı'
							variant='outlined'
							sx={{
								width: "300px",
								margin: "5px",
							}}
						/>
						<TextField
							id='outlined-basic'
							label='Anket Konusu'
							variant='outlined'
							sx={{
								width: "300px",
								margin: "5px",
							}}
						/>
					</div>
					<button className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						Anketi Oluştur
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateNewSurvey
