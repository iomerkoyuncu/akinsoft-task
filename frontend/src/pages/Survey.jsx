import React from "react"

import { useNavigate } from "react-router-dom"

import AddIcon from "@mui/icons-material/Add"
import TextField from "@mui/material/TextField"

function Survey() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h-screen flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl '>Anketi Düzenle</h1>
				<hr className='border-2 border-black' />

				<div className='flex flex-col justify-center items-center'>
					<div className='flex m-2'>
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
						<button className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<h4 className='p-2 '>Değişiklikleri Kaydet</h4>
						</button>
					</div>
				</div>

				<h1 className='font-bold text-3xl '>Soru Ekle</h1>
				<hr className='border-2 border-black' />

				<div className='flex flex-col justify-center items-center'>
					<div className='flex m-2'>
						<TextField
							id='outlined-basic'
							label='Soru'
							variant='outlined'
							sx={{
								width: "300px",
								margin: "5px",
							}}
						/>
						<button className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<h4 className='p-2 '>Ekle</h4>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Survey
