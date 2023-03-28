import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

function SurveyCard({ survey }) {
	const navigate = useNavigate()
	const location = useLocation()

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true
		}
	}

	return (
		<div className='w-64 border-4 border-black rounded-lg p-3 m-3 transition ease-in-out delay-150 hover:scale-105 duration-300'>
			<h1 className='font-bold text-xl '>{survey.title}</h1>
			<p className=''>Konu: {survey.description}</p>
			<p>Anket ID: {survey.survey_id} </p>
			<p className=''>
				<span className='font-bold'>{survey.user_id} ID'li kullanıcı</span>{" "}
				tarafından {survey.created_at.split("T")[0]} tarihinde oluşturuldu.
			</p>
			<div className='flex justify-end items-center'>
				{pathMatchRoute("/") ? (
					<button>
						<h4 className='text-white bg-black rounded-md p-2 '>Cevapla</h4>
					</button>
				) : (
					<>
						<button className='px-2'>
							<h4 className='text-white bg-red-600 rounded-md py-2 px-3 '>
								Sil
							</h4>
						</button>
						<button
							onClick={() => navigate(`/edit-survey/${survey.survey_id}`)}>
							<h4 className='text-white bg-blue-600 rounded-md p-2 '>
								Düzenle
							</h4>
						</button>
					</>
				)}
			</div>
		</div>
	)
}

export default SurveyCard
