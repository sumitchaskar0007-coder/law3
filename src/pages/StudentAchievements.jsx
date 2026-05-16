import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Award, Medal, Star, Trophy } from 'lucide-react'

const achievements = [
  { title: 'Moot Court Participation', detail: 'Student participation and awards in moot court competitions will be displayed here.' },
  { title: 'Academic Excellence', detail: 'Rank holders, university merit, and academic distinction updates will be published here.' },
  { title: 'Research & Publications', detail: 'Student research papers, articles, and seminar presentations will be highlighted here.' },
  { title: 'Sports & Cultural Recognition', detail: 'Achievements in cultural, sports, debate, and co-curricular activities will be listed here.' }
]

export default function StudentAchievements() {
  return (
    <>
      <Helmet>
        <title>Student Achievements | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Student Achievements page of Jadhavar College of Law covering academic, moot court, research, sports, and cultural accomplishments."
        />
      </Helmet>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Trophy className="h-4 w-4 text-yellow-300" />
            Student Recognition
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">Student Achievements</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Celebrating student excellence in academics, advocacy, research, leadership, sports, and cultural activities.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  {index === 0 ? <Trophy className="h-6 w-6" /> : index === 1 ? <Medal className="h-6 w-6" /> : index === 2 ? <Award className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{achievement.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{achievement.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Submit Achievement Details</h2>
            <p className="mt-2 text-slate-700">
              Students may submit verified certificates, competition details, photographs, and faculty approval to the college office for publication.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
