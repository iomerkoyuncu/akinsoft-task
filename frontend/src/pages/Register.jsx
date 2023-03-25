import React from "react"

import { TextField } from "@mui/material"

function Register() {
	return (
		<div className='w-screen h-96 flex flex-col justify-center items-center'>
			<div className='w-64 h-64 bg-white rounded-md flex flex-col justify-center items-center'>
				<h4>Yeni Hesap Oluşturma</h4>
				<div className='flex flex-col p-2'>
					<TextField
						sx={{
							margin: "5px",
						}}
						id='name'
						label='name'
						variant='outlined'
					/>
					<TextField
						sx={{
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
						label='Password'
						variant='outlined'
					/>

					<TextField
						sx={{
							margin: "5px",
						}}
						id='password2'
						label='Password2'
						variant='outlined'
					/>
				</div>
				<div className='w-full p-2 flex justify-end items-center'>
					<button className='flex justify-between items-center px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<h4 className='p-2 '>Kayıt Ol</h4>
					</button>
				</div>
			</div>
			<button className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
				<h4 className='p-2 '>Hesabım var, Giriş Yap</h4>
			</button>
		</div>
	)
}

export default Register
