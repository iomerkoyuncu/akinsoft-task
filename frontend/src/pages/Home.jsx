import React, { useEffect, useState } from "react"

import AddIcon from "@mui/icons-material/Add"

import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAllSurveys, reset } from "../features/surveys/surveySlice"

import { useAuthStatus } from "../hooks/useAuthStatus"

import Spinner from "../components/Spinner"
import SurveyCard from "../components/SurveyCard"

function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)

	const { loggedIn, checkingStatus } = useAuthStatus()

	const { surveys, isLoading, isSuccess } = useSelector((state) => state.survey)

	useEffect(() => {
		dispatch(getAllSurveys())

		if (!user) {
			dispatch(reset())
		}
	}, [dispatch])

	if (isLoading) {
		return <Spinner />
	} else {
		return (
			<div className='w-screen h-screen flex justify-center items-start'>
				<div className='w-4/5 '>
					<h1 className='font-bold text-3xl text-center'>
						Hoşgeldin, {user?.name}
					</h1>
					<h1 className='font-bold text-2xl '>Tüm Anketler</h1>
					<hr className='border-2 border-black' />

					{loggedIn ? (
						<div className='flex justify-center items-center'>
							<button
								onClick={() => navigate("/new-survey")}
								className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
								<AddIcon />
								<h4 className='p-2 '>Yeni Anket Oluştur!</h4>
							</button>
						</div>
					) : (
						<div className='flex justify-center items-center m-2 text-center'>
							<h1 className=''>Anketleri görmek için giriş yapmalısın.</h1>
							<div className='text-center'>
								<button
									onClick={() => navigate("/login")}
									className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '> Giriş Yap</h4>
								</button>
							</div>
						</div>
					)}

					{surveys.length > 0 ? (
						<div className='flex flex-wrap justify-center items-center'>
							{surveys.map((survey) => (
								<SurveyCard key={survey.id} survey={survey} />
							))}
						</div>
					) : (
						<div className='flex justify-center items-center'>
							<h1>Görünürde hiç anket yok.</h1>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default Home
