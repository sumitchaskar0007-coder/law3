import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Handshake, Building2, FileText, Users, ArrowRight } from 'lucide-react'

const collaborationAreas = [
  'Internships with advocates, law firms, NGOs, and legal service organizations',
  'Guest lectures, seminars, workshops, and faculty exchange programs',
  'Legal aid, community outreach, and social justice initiatives',
  'Research, publication, moot court, and skill development activities'
]

const mouRecords = [
  { title: 'Legal Practice & Internship Partners', status: 'Details to be updated by office' },
  { title: 'Academic Collaboration Partners', status: 'Details to be updated by office' },
  { title: 'NGO / Legal Aid Collaboration', status: 'Details to be updated by office' }
]

export default function CollaborationMou() {
  return (
    <>
      <Helmet>
        <title>Collaboration MoU | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Collaboration and MoU section for Jadhavar College of Law including academic, legal practice, internship, research, and outreach partnerships."
        />
      </Helmet>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
              <Handshake className="h-4 w-4 text-blue-300" />
              Partnerships & MoUs
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Collaboration (MoU)</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The college develops collaborations that strengthen practical legal training, professional exposure, research, and community service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Collaboration Areas</h2>
            <div className="mt-6 space-y-4">
              {collaborationAreas.map((area) => (
                <div key={area} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                  <p className="text-slate-700">{area}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">MoU Records</h2>
            <div className="mt-6 space-y-4">
              {mouRecords.map((record) => (
                <div key={record.title} className="rounded-lg bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-1 h-5 w-5 text-blue-700" />
                    <div>
                      <h3 className="font-bold text-slate-900">{record.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{record.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <Building2 className="mb-4 h-8 w-8 text-blue-700" />
            <h3 className="text-xl font-bold text-slate-900">For Institutions</h3>
            <p className="mt-2 text-slate-600">Organizations interested in collaboration may contact the college office with a proposal and institutional profile.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <Users className="mb-4 h-8 w-8 text-blue-700" />
            <h3 className="text-xl font-bold text-slate-900">For Students</h3>
            <p className="mt-2 text-slate-600">Collaboration activities will be announced through notices, faculty coordinators, and student support cells.</p>
          </div>
        </div>
      </section>
    </>
  )
}
