import React from "react"
import Divider from "../components/Divider"
import AddIcon from "@mui/icons-material/Add"
import { useNavigate } from "react-router-dom"

function Home() {
	const navigate = useNavigate()

	return (
		<div className='w-screen h-screen flex justify-center items-start'>
			<div className='w-4/5 '>
				<h1 className='font-bold text-3xl text-center'>Hoşgeldin, İsmet!</h1>
				<h1 className='font-bold text-2xl '>Anketler</h1>
				<hr className='border-2 border-black' />

				<div className='flex justify-center items-center'>
					<h1>Görünürde hiç anket yok.</h1>
					<button
						onClick={() => navigate("/new-survey")}
						className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
						<AddIcon />
						<h4 className='p-2 '>Yeni Anket Oluştur !</h4>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
