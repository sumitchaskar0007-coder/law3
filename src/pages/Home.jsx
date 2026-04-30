import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import FAQSection from '../components/FAQSection'
import Facilities from '../components/Facilities'
import GlimpseLawCollege from '../components/GlimpseLawCollege'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)

  const videoId = 'PaDE1ETKP8A'
  const thumbnailSrc = '/assets/images/vedio-2.png'

  const placementItems = [
    {
      image: '/assets/images/law-placement1.png',
      title: '100% Placement Assistance',
      alt: 'Placement Assistance at Jadhavar Law College',
      text: 'Support with internships, law firms, chambers, and corporate legal departments.'
    },
    {
      image: '/assets/images/law-placement2.png',
      title: 'Strong Legal Industry Connect',
      alt: 'Industry Connect at Jadhavar Law College',
      text: 'Guest lectures by senior advocates, judges, legal advisors, and corporate lawyers.'
    },
    {
      image: '/assets/images/law-placement3.png',
      title: 'Pre-Placement Training',
      alt: 'Pre-Placement Training at Jadhavar Law College',
      text: 'Courtroom etiquette, drafting skills, communication, moot courts, and interview preparation.'
    },
    {
      image: '/assets/images/law-placement4.png',
      title: 'Diverse Legal Sectors',
      alt: 'Diverse Legal Sectors at Jadhavar Law College',
      text: 'Litigation, Corporate Law, Judiciary, Legal Process Outsourcing, NGOs, and Public Services.'
    }
  ]

  const certifications = [
    {
      icon: '/assets/icons/criminal-law.png',
      title: 'Criminal Law Practice',
      desc: 'Practical courtroom training in criminal litigation',
      points: ['Criminal Drafting & Pleadings', 'Trial Court Procedures', 'Evidence Law Practice'],
      cert: 'Criminal Drafting & Moot Court Training'
    },
    {
      icon: '/assets/icons/corporate-law.png',
      title: 'Corporate & Business Law',
      desc: 'Corporate compliance and commercial law exposure',
      points: ['Company Law & Compliance', 'Contract Drafting', 'Mergers & Acquisitions'],
      cert: 'Corporate Compliance Certification'
    },
    {
      icon: '/assets/icons/judicial-law.png',
      title: 'Judicial Exams Preparation',
      desc: 'Focused preparation for judiciary & competitive exams',
      points: ['Bare Act Mastery', 'Answer Writing Practice', 'Legal Reasoning Skills'],
      cert: 'Judiciary Coaching Program'
    },
    {
      icon: '/assets/icons/meditation.png',
      title: 'ADR & Mediation',
      desc: 'Alternative dispute resolution and negotiation skills',
      points: ['Mediation Techniques', 'Arbitration Procedures', 'Negotiation Skills'],
      cert: 'ADR & Mediation Certification'
    },
    {
      icon: '/assets/icons/ip-law.png',
      title: 'Intellectual Property Law',
      desc: 'Specialized training in IP & cyber laws',
      points: ['Patent & Trademark Law', 'Copyright Protection', 'Cyber Law Essentials'],
      cert: 'IP Law Specialist Certification'
    },
    {
      icon: '/assets/icons/legal-research.png',
      title: 'Legal Research & Writing',
      desc: 'Advanced drafting and legal research methodology',
      points: ['Legal Research Techniques', 'Opinion & Judgment Drafting', 'Citation & Referencing'],
      cert: 'Advanced Legal Drafting Certification'
    }
  ]

  const whyChooseItems = [
    ['BCI Approved & University Affiliated', 'Recognized by Bar Council of India and affiliated to reputed university'],
    ['Strong Legal Legacy & Visionary Leadership', 'Guided by experienced legal professionals with a strong educational vision'],
    ['Practice-Oriented Legal Education', 'Hands-on learning through moot courts, internships, and real-world legal exposure'],
    ['National & International Exposure', 'Opportunities for seminars, workshops, and global academic interactions']
  ]

  return (
    <>
      <section
        className="w-full px-8 py-14 text-white"
        style={{ background: 'linear-gradient(90deg, #4a36e0 0%, #9f1bbf 100%)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:w-1/2"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
              Bar Council of India Approved
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Shape Your <span className="text-yellow-300">Future in Law</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-100">
              Jadhavar College of Law, Pune offers a <strong>3-Year LL.B Professional Program </strong>
              designed to prepare students for <strong>advocacy, judiciary, corporate law,</strong> and public service
              through academic excellence and practical legal training.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/admissions">
                <button className="rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black shadow-md transition hover:bg-yellow-300">
                  Apply Now
                </button>
              </Link>

              <a href="/assets/prospectus.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="rounded-md bg-white px-6 py-3 font-semibold text-black shadow-md transition hover:bg-gray-100">
                  Download Prospectus
                </button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-4 sm:grid-cols-4 md:gap-4 md:pt-6">
              {[
                ['2024', 'Established'],
                ['1000+', 'Association With Lawyers'],
                ['50+', 'MOU'],
                ['95%', 'Placement Support']
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-bold text-yellow-400 sm:text-2xl">{value}</p>
                  <p className="text-xs text-gray-300">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              {!showVideo ? (
                <button
                  type="button"
                  className="h-full w-full cursor-pointer bg-cover bg-center"
                  style={{ backgroundImage: `url(${thumbnailSrc})` }}
                  onClick={() => setShowVideo(true)}
                  aria-label="Play campus overview video"
                >
                  <span className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-purple-600 transition hover:scale-110">
                      Play
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    Campus Overview
                  </span>
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setShowVideo(false)}
                    className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
                    aria-label="Close video"
                  >
                    X
                  </button>

                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Jadhavar College of Law Pune"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </>
              )}
            </div>

            <p className="mt-4 text-right text-sm text-gray-200">
              <strong>Dr. Sapna Sukrut Dev</strong>
              <br />
              Principal, Jadhavar College of Law
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <img
              src="/assets/images/law-campus.png"
              alt="Jadhavar Law College Campus"
              className="rounded-xl shadow-lg transition duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">Welcome to Jadhavar College of Law, Pune</h2>
            <p className="leading-relaxed text-gray-600">
              Jadhavar College of Law is a premier institution committed to academic excellence, ethical legal education,
              and professional development. Our 3 Years LL.B program prepares students for advocacy, judiciary, corporate
              law, and public service.
            </p>
            <p className="text-gray-600">
              With experienced faculty, modern infrastructure, and a student-centric approach, we nurture future legal
              professionals with integrity and competence.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Placements</h2>

          <p className="mx-auto mb-16 max-w-4xl text-gray-600">
            At Jadhavar College of Law (3 Years LL.B.), we are committed to shaping confident legal professionals. Our
            dedicated Training & Placement Cell bridges the gap between legal education and professional practice,
            ensuring students are courtroom-ready, corporate-ready, and competitive-exam-ready.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {placementItems.map((item) => (
              <div key={item.title}>
                <div className="mb-6 h-48 w-full overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Vision & Mission</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 text-justify shadow transition hover:shadow-lg">
              <h3 className="mb-3 text-2xl font-bold">Vision</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Jadhavar College Of Law works towards the growth, development and formation of such a generation of
                students who possess the intellectual genius, moral consciousness and social responsibility to ensure the
                Rule of Law, not just locally but also propagating the same globally.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                The College is ground for Judges, Legislators and Public Servants in the making which would form part of
                the governing system in the future. We endeavour to polish students into professionals who make a mark in
                the legal area.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-justify shadow transition hover:shadow-lg">
              <h3 className="mb-3 text-2xl font-bold">Mission</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Jadhavar College Of Law believes in disseminating legal knowledge in a resourceful way with a view to
                help in the nation's development.
              </p>
              <p className="mb-2 text-sm leading-relaxed text-gray-600">
                To evolve and impart comprehensive legal education and to achieve excellence. To promote advanced studies
                and research in all branches of law. To sensitize students regarding socio-legal issues of the country.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                To combine quality education with necessary practical training and to prepare students for a variety of
                legal and law related careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#2f2f2f] py-16 md:py-20" aria-labelledby="career-certifications">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <header className="mb-10 text-center">
            <h2 id="career-certifications" className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Career Enhancement Certifications
            </h2>

            <p className="mx-auto max-w-3xl text-base text-gray-300">
              Professionally designed certification programs at
              <strong className="text-yellow-300"> Jadhavar College of Law </strong>
              that strengthen litigation skills, corporate readiness, and judicial exam preparation.
            </p>
          </header>

          <div className="px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-8"
            >
              {certifications.map((item) => (
                <SwiperSlide key={item.title}>
                  <article className="flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="flex-1 p-5 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                        <img
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="mb-4 text-sm text-gray-600">{item.desc}</p>

                      <ul className="space-y-2 text-left text-sm text-[#b36a2e]">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start">
                            <span className="mr-2 mt-0.5">-</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <footer className="border-t border-gray-200 bg-gray-50 px-5 py-4">
                      <p className="text-xs font-semibold text-gray-800">Certification Included</p>
                      <p className="text-xs text-gray-600">{item.cert}</p>
                    </footer>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Why Choose Jadhavar
            <br /> College of Law?
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map(([title, text], index) => (
              <div key={title} className="rounded-xl bg-gray-50 p-6 transition hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  {index + 1}
                </div>
                <h4 className="mb-2 font-bold">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlimpseLawCollege />
      <Facilities />

      <section className="w-full bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="flex">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Jadhavar Group of Institutes Logo"
                className="ml-20 w-48 object-contain md:w-56 lg:ml-32"
                loading="lazy"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-blue-600">Jadhavar Group of Institutes</p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Awards & Achievements</h2>
              <p className="leading-relaxed text-gray-600">
                Jadhavar College of Law has been consistently recognized for excellence in legal education. Our
                commitment to quality teaching, infrastructure, and student outcomes has earned us numerous accolades and
                certifications.
              </p>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="pb-10"
          >
            {[
              '/assets/images/certificate1.png',
              '/assets/images/certificate2.png',
              '/assets/images/certificate3.png',
              '/assets/images/certificate4.png'
            ].map((cert, index) => (
              <SwiperSlide key={cert}>
                <div className="flex justify-center">
                  <img
                    src={cert}
                    alt={`Jadhavar College of Law Certificate ${index + 1}`}
                    className="h-56 w-full max-w-xs rounded-lg border border-gray-200 object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Student Testimonials</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow">
              <p className="italic text-gray-600">
                "The faculty and moot court training helped me gain confidence for courtroom practice."
              </p>
              <p className="mt-3 font-semibold">- LL.B Student</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <p className="italic text-gray-600">
                "Internship guidance and legal exposure at Jadhavar College of Law shaped my legal career."
              </p>
              <p className="mt-3 font-semibold">- Alumni</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
