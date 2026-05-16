import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Map, ArrowRight, FileCode } from 'lucide-react'

const sitemapGroups = [
  {
    title: 'Main Pages',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/facilities', label: 'Facilities & Infrastructure' },
      { to: '/cells', label: 'Cells' },
      { to: '/admissions', label: 'Admission' },
      { to: '/programmes', label: 'Programmes' },
      { to: '/library', label: 'Library' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/student-achievements', label: 'Student Achievement' },
      { to: '/contact', label: 'Contact Us' },
      { to: '/udan', label: 'Udan' }
    ]
  },
  {
    title: 'Academics & Activities',
    links: [
      { to: '/academics', label: 'Academics' },
      { to: '/announcement', label: 'Announcements' },
      { to: '/collaboration-mou', label: 'Collaboration (MoU)' },
      { to: '/moot', label: 'Moot Court Society' },
      { to: '/e-lectures', label: 'E-Lecture / Online Lectures' },
      { to: '/governing-body', label: 'Governing Body' },
      { to: '/legalaid', label: 'Legal Aid' },
      { to: '/events', label: 'Events' },
      { to: '/news', label: 'News' },
      { to: '/placements', label: 'Placements' },
      { to: '/faculty', label: 'Faculty' },
      { to: '/testimonials', label: 'Testimonials' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { to: '/blog', label: 'Blogs' },
      { to: '/careers', label: 'Career' },
      { to: '/application', label: 'Application Form' },
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms & Conditions' },
      { to: '/sitemap', label: 'Website Sitemap' }
    ]
  }
]

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Sitemap | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Browse all important pages, academic sections, resources, and student support pages on the Jadhavar College of Law website."
        />
      </Helmet>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Map className="h-4 w-4 text-blue-300" />
            Website Navigation
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">Sitemap</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Find every important section of the college website from one accessible page.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {sitemapGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">{group.title}</h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center justify-between rounded-lg border border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6">
          <a
            href="/sitemap.xml"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <FileCode className="h-4 w-4" />
            Open XML Sitemap
          </a>
        </div>
      </section>
    </>
  )
}
