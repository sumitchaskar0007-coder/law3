import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Video, PlayCircle, BookOpen, MonitorPlay, ExternalLink } from 'lucide-react'

const TestimonialsCategories = [
  'Constitutional Law',
  'Criminal Law',
  'Civil Procedure',
  'Legal Research & Writing',
  'Moot Court Training',
  'Career Guidance'
]

const TestimonialsVideos = [
  { title: 'E-Testimonials 1', id: 'DESO3P121KM', url: 'https://youtu.be/DESO3P121KM?si=IGzj68ixKXE4gEaV' },
  { title: 'E-Testimonials 2', id: 'T4txjSN3hkw', url: 'https://youtu.be/T4txjSN3hkw?si=DmMCSa6s3ysLyQ24' },
  { title: 'E-Testimonials 3', id: 'eTbIJNya63w', url: 'https://youtu.be/eTbIJNya63w?si=939ebSLOaOtzGAHd' },
  { title: 'E-Testimonials 4', id: 'P2w1TDhBags', url: 'https://youtu.be/P2w1TDhBags?si=ejZBftfB42LDFHBD' },
  { title: 'E-Testimonials 5', id: '6CwB1pcq5JA', url: 'https://youtu.be/6CwB1pcq5JA?si=TBICmMAv9XXfJGSV' },


  { title: 'E-Testimonials 6', id: 'J7LTbZw16s0', url: 'https://youtu.be/J7LTbZw16s0?si=-jXAJLBd48FGHhc4' },

]

export default function ETestimonialss() {
  const [activeVideo, setActiveVideo] = useState(TestimonialsVideos[0])

  return (
    <>
      <Helmet>
        <title>E-Testimonials / Online Testimonialss | Jadhavar College of Law</title>
        <meta
          name="description"
          content="Dedicated online Testimonialss and e-learning resources page for Jadhavar College of Law students."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <MonitorPlay className="h-4 w-4 text-blue-300" />
            Digital Learning
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">E-Testimonials / Online Testimonialss</h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
                Access online classes, recorded sessions, guest Testimonialss, and skill-based learning resources from one dedicated section.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-semibold text-blue-100">Available Testimonialss</p>
              <div className="mt-2 text-5xl font-bold">{TestimonialsVideos.length}</div>
              <p className="mt-2 text-sm text-slate-300">Select any Testimonials below to play it in the main viewer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="aspect-video bg-slate-900">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}`}
                  title={activeVideo.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Now Playing</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">{activeVideo.title}</h2>
                </div>
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Open on YouTube
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Testimonials Playlist</h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {TestimonialsVideos.length} Videos
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {TestimonialsVideos.map((video) => (
                  <button
                    type="button"
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`group rounded-xl border p-4 text-left transition ${activeVideo.id === video.id
                      ? 'border-blue-300 bg-blue-50 shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${activeVideo.id === video.id ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 group-hover:bg-blue-50'
                        }`}>
                        <PlayCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {video.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">Click to play in the main viewer</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
              <Video className="mb-4 h-9 w-9 text-blue-700" />
              <h2 className="text-2xl font-bold text-slate-900">Testimonials Categories</h2>
              <ul className="mt-5 space-y-3">
                {TestimonialsCategories.map((category) => (
                  <li key={category} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    <BookOpen className="h-4 w-4 text-blue-700" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Viewing Note</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the playlist to switch Testimonialss. Each video can also be opened directly on YouTube.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
