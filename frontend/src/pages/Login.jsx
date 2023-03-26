import React from "react"

import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Login() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h flex flex-col justify-center items-center'>
			<div className='w-96 h-96 bg-white rounded-md shadow-lg flex flex-col justify-center items-center mb-10'>
				<h1 className='font-bold text-3xl text-center m-2'>
					Hesabına Giriş Yap
				</h1>
				<div className='h-48 flex flex-col justify-evenly p-2'>
					<TextField
						sx={{
							width: "300px",
							margin: "5px",
						}}
						id='email'
						label='Email'
						variant='outlined'
					/>

					<TextField
						sx={{
							margin: "5px",
						}}
						id='password'
						type={"password"}
						label='Password'
						variant='outlined'
					/>
				</div>
				<div className='w-full p-2 flex justify-end items-center'>
					<button className='flex justify-between items-center px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<h4 className='p-2 '>Giriş Yap</h4>
					</button>
					<button
						onClick={() => {
							navigate("/register")
						}}
						className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<h4 className='p-2 '>Hesabın Yok mu? Kayıt Ol</h4>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
