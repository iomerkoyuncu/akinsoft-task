import React from "react"

import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Register() {
	const navigate = useNavigate()

	return (
		<div className='w-screen flex flex-col justify-center items-center'>
			<div className='w-[500px]  bg-white rounded-md flex flex-col justify-center items-center mb-10'>
				<div className='w-full p-5 '>
					<h1 className='font-bold text-3xl text-center '>Hesap Oluştur</h1>
				</div>
				<div className='flex flex-col p-2'>
					<TextField
						sx={{
							width: "300px",
							margin: "5px",
						}}
						id='name'
						label='İsminiz'
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
						type={"password"}
						label='Şifre'
						variant='outlined'
					/>

					<TextField
						sx={{
							margin: "5px",
						}}
						id='password2'
						type={"password"}
						label='Şifreyi yeniden girin'
						variant='outlined'
					/>
				</div>
				<div className='w-full p-2 flex justify-evenly items-center'>
					<button className='flex justify-between items-center px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<h4 className='p-2 '>Kayıt Ol</h4>
					</button>
					<button
						onClick={() => {
							navigate("/login")
						}}
						className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<h4 className='p-2 '>Zaten Hesabın var mı?, Giriş Yap</h4>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Register
