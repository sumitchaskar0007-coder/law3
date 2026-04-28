import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

export default function ProgramCard({ title, duration, description, onEnquire, href }) {
=======

export default function ProgramCard({ title, duration, description, onEnquire }) {
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
			<h3 className="font-semibold text-gray-900">{title}</h3>
			<p className="text-sm text-gray-600">{duration}</p>
			<p className="text-sm text-gray-700 mt-2 flex-1">{description}</p>
			<div className="mt-4">
<<<<<<< HEAD
				{href ? (
					<Link to={href} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition">
						Apply Now
					</Link>
				) : (
					<button onClick={onEnquire} className="px-4 py-2 rounded-lg border hover:border-primary">Enquire</button>
				)}
=======
				<button onClick={onEnquire} className="px-4 py-2 rounded-lg border hover:border-primary">Enquire</button>
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
			</div>
		</div>
	)
}


