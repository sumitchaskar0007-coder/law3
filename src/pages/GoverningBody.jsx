import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BriefcaseBusiness, GraduationCap, Landmark, Scale, Users } from 'lucide-react'

const members = [
  { role: 'Chairperson', details: 'Institution nominee / management representative' },
  { role: 'Principal / Head of Institution', details: 'Academic and administrative leadership' },
  { role: 'University Nominee', details: 'Representative as per affiliating university norms' },
  { role: 'Bar Council / Legal Expert', details: 'Professional guidance for legal education standards' },
  { role: 'Faculty Representatives', details: 'Teaching staff members nominated by the college' },
  { role: 'Administrative Representative', details: 'Office and compliance coordination' }
]

const responsibilities = [
  'Review academic planning, institutional development, and compliance matters.',
  'Guide quality initiatives, student support systems, and professional activities.',
  'Support policy decisions related to legal education and campus governance.',
  'Monitor statutory, university, and professional body requirements.'
]

export default function GoverningBody() {
  return (
    <>
      <Helmet>
        <title>Governing Body | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Governing Body section of Jadhavar College of Law with roles, responsibilities, and institutional governance details."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
              <Landmark className="h-4 w-4 text-blue-300" />
              Institutional Governance
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Governing Body</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The Governing Body provides strategic direction, academic oversight, and policy guidance for the college in line with university and professional requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">Body Composition</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {members.map((member) => (
                <div key={member.role} className="rounded-lg border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">{member.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">Key Functions</h2>
            <ul className="space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <Scale className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <BriefcaseBusiness className="mb-4 h-8 w-8 text-blue-700" />
            <h3 className="text-xl font-bold text-slate-900">Governance Records</h3>
            <p className="mt-2 text-slate-600">
              Meeting notices, minutes, and approved policy updates may be published here as provided by the college office.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <GraduationCap className="mb-4 h-8 w-8 text-blue-700" />
            <h3 className="text-xl font-bold text-slate-900">Academic Guidance</h3>
            <p className="mt-2 text-slate-600">
              The body supports curriculum delivery, student welfare, examination readiness, and professional exposure initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
