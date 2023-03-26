import React from "react"

import { useNavigate } from "react-router-dom"

import AddIcon from "@mui/icons-material/Add"
import TextField from "@mui/material/TextField"

function MySurveys() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h-screen flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>Anketlerim</h1>
				<hr className='border-2 border-black' />

				<div className='flex flex-col justify-center items-center'>
					<h1 className='m-2'>Anketlerinizi buradan yönetebilirsiniz.</h1>

					<div className='flex flex-wrap justify-center items-center'>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>İlk Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>iknici Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>iknici Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>iknici Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>iknici Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
						<div className='w-64 h-24 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300 cursor-pointer'>
							<h1 className='font-bold text-xl text-center'>iknici Anketim</h1>
							<p className='text-center'>Çevre Kirliliği</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MySurveys
