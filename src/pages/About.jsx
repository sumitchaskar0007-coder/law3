import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Award,
  Award as Medal,
  BookMarked,
  BookOpen,
  Briefcase,
  Building,
  CheckCircle,
  ChevronRight,
  Clock,
  Eye,
  Globe,
  GraduationCap,
  Heart,
  Library,
  Lightbulb,
  Quote,
  Scale,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const section = sectionRef.current

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const leadership = [
    {
      name: 'Dr. Sudhakarrao Jadhavar',
      position: 'President & Founder',
      qualification: 'M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.',
      experience: '25+ years in Educational Leadership',
      image: '/assets/images/about1.png',
      achievements: [
        'Pioneer in value-based education system',
        'Established 80+ educational institutions',
        'National award for educational innovation',
        'Visionary behind Yuva Sansad initiative'
      ],
      message:
        'Education is not just about acquiring knowledge; it is about building character, fostering innovation, and creating responsible citizens who will lead our nation towards a brighter future.',
      color: 'from-blue-600 to-purple-700'
    },
    {
      name: 'Adv. Shardulrao Sudhakarrao Jadhavar',
      position: 'Vice President',
      qualification: 'M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL, CMED, D.LL&L.W., L.L.M.',
      experience: '15+ years in Legal Education',
      image: '/assets/images/about2.png',
      achievements: [
        'Expert in civil and constitutional law',
        'Instrumental in legal curriculum development',
        'Moot court competition pioneer',
        'Industry-academia bridge builder'
      ],
      message:
        'Legal education must evolve with society needs. We are committed to producing not just lawyers, but legal visionaries who can navigate the complexities of modern jurisprudence.',
      color: 'from-green-600 to-blue-700'
    }
  ]

  const messages = [
    {
      title: "President's Message",
      icon: <Users className="h-8 w-8" />,
      content:
        'At Jadhavar Law College, we believe in transforming students into competent legal professionals equipped to handle contemporary legal challenges. Our 3-year LLB program is designed to provide comprehensive legal education with practical exposure.',
      author: 'Dr. Sudhakarrao Jadhavar',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      title: "Vice President's Message",
      icon: <Scale className="h-8 w-8" />,
      content:
        'We focus on developing critical thinking, research skills, and ethical values. Our curriculum is regularly updated to incorporate emerging areas of law and technological advancements in the legal field.',
      author: 'Adv. Shardulrao Sudhakarrao Jadhavar',
      color: 'bg-gradient-to-br from-green-500 to-green-700'
    },
    {
      title: "Principal's Message",
      icon: <GraduationCap className="h-8 w-8" />,
      content:
        'Our faculty comprises experienced legal practitioners and academicians who provide personalized attention. We emphasize moot court training, legal aid clinics, and internships to ensure holistic development.',
      author: 'Dr. Sapna Sukrut Dev',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700'
    }
  ]

  const programHighlights = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Comprehensive Curriculum',
      description: 'Covers all major legal subjects including Constitutional Law, Contract Law, Criminal Law, and International Law'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Practical Training',
      description: 'Regular court visits, internship programs, and moot court competitions'
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: 'Modern Infrastructure',
      description: 'Well-equipped library with legal databases, smart classrooms, and computer labs'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Industry Exposure',
      description: 'Guest lectures by legal luminaries, workshops, and seminars'
    }
  ]

  const visionMission = [
    {
      title: 'Vision',
      icon: <Eye className="h-6 w-6" />,
      points: [
        'To be a premier institution for legal education',
        'Produce socially responsible legal professionals',
        'Promote justice, equity, and good conscience',
        'Contribute to legal research and reforms'
      ],
      color: 'border-blue-200 bg-blue-50'
    },
    {
      title: 'Mission',
      icon: <Target className="h-6 w-6" />,
      points: [
        'Impart quality legal education with ethical values',
        'Develop analytical and critical thinking skills',
        'Provide exposure to practical aspects of law',
        'Foster research and innovation in legal studies'
      ],
      color: 'border-green-200 bg-green-50'
    },
    {
      title: 'Objectives',
      icon: <CheckCircle className="h-6 w-6" />,
      points: [
        'Comprehensive understanding of legal principles',
        'Development of professional skills',
        'Promotion of social justice awareness',
        'Preparation for legal practice and judiciary'
      ],
      color: 'border-purple-200 bg-purple-50'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>About Jadhavar Law College - 3 Year LLB Program Pune | Leadership & Vision</title>
        <meta
          name="description"
          content="Learn about Jadhavar Law College's 3-year LLB program in Pune. Discover our vision, mission, leadership team, and commitment to excellence in legal education."
        />
        <meta
          name="keywords"
          content="Jadhavar Law College, 3-year LLB Pune, legal education, law college Pune, LLB program, legal studies, law college leadership"
        />
        <meta property="og:title" content="About Jadhavar Law College - Premier Legal Education in Pune" />
        <meta
          property="og:description"
          content="Excellence in legal education with comprehensive 3-year LLB program at Jadhavar Law College, Pune."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.jadhavarcollegeoflaw.com/about" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-12 md:py-16"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-sm"
            >
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">Established Excellence in Legal Education</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-3xl font-bold text-white md:text-5xl"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jadhavar Law College
              </span>
              <br />
              <span className="mt-2 block text-xl font-normal text-gray-300 md:text-2xl">3-Year LLB Program</span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto max-w-2xl text-base text-gray-300 md:text-lg"
            >
              Transforming Aspirations into Legal Excellence Since 2010
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          />
        </div>
      </motion.section>

      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Building className="h-4 w-4" />
                About the College
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Premier Institution for <span className="text-blue-600">Legal Education</span>
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Jadhavar Law College offers a comprehensive 3-year LLB program approved by the Bar Council of India. Our
                curriculum blends theoretical knowledge with practical skills, preparing students for successful careers in
                law, judiciary, corporate sector, and legal academia.
              </p>
            </div>

            <div className="mb-12 grid items-stretch gap-6 md:grid-cols-3">
              {visionMission.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className={`flex h-full flex-col rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${item.color}`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>

                  <ul className="flex-1 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start text-sm">
                        <ChevronRight className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="mb-8 text-center text-xl font-bold text-gray-900">
                <span className="text-blue-600">Program Highlights</span> of 3-Year LLB
              </h3>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {programHighlights.map((highlight) => (
                  <motion.div
                    key={highlight.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <div className="text-blue-600">{highlight.icon}</div>
                    </div>
                    <h4 className="mb-2 font-semibold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-sm">
              <UserCheck className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Governing Body & Management</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-gray-600">Guided by visionaries transforming legal education landscape</p>
          </div>

          <div className="mx-auto max-w-6xl space-y-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="group relative overflow-hidden lg:w-1/3">
                    <div className="h-56 lg:h-full">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 p-3 shadow backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-blue-600" />
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Experience</p>
                          <p className="text-xs text-gray-700">{leader.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 lg:w-2/3">
                    <div className="mb-4">
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{leader.name}</h3>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                        <Briefcase className="h-3 w-3" />
                        {leader.position}
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <GraduationCap className="mr-2 h-3 w-3 text-blue-600" />
                        <span>{leader.qualification}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 flex items-center text-sm font-semibold text-gray-900">
                        <Medal className="mr-2 h-4 w-4 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {leader.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start text-sm">
                            <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                      <div className="flex items-start">
                        <Quote className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                        <div>
                          <p className="text-sm italic leading-relaxed text-gray-800">"{leader.message}"</p>
                          <p className="mt-2 text-xs font-medium text-gray-600">- {leader.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${leader.color}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                <span className="text-blue-600">Messages</span> from Leadership
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">Words of wisdom from our esteemed leaders guiding the institution</p>
            </div>

            <div className="mx-auto grid max-w-4xl items-stretch gap-8 px-6 md:grid-cols-2">
              {messages.map((message, index) => (
                <motion.div
                  key={message.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-lg transition-all duration-500 group-hover:blur-xl" />

                  <div className="relative flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white ${message.color}`}>
                      {message.icon}
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-gray-900">{message.title}</h3>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{message.content}</p>

                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <p className="text-sm font-semibold text-gray-900">{message.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Why Choose <span className="text-blue-600">Our 3-Year LLB</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Scale className="h-6 w-6" />,
                  title: 'Bar Council Approved',
                  desc: 'Recognized by Bar Council of India'
                },
                {
                  icon: <BookMarked className="h-6 w-6" />,
                  title: 'Modern Curriculum',
                  desc: 'Updated syllabus with emerging laws'
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: 'Global Perspective',
                  desc: 'International law and human rights'
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Skill Development',
                  desc: 'Moot courts, legal drafting, research'
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Expert Faculty',
                  desc: 'Experienced practitioners & academicians'
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Career Support',
                  desc: 'Placement assistance & internships'
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: 'Social Justice Focus',
                  desc: 'Legal aid clinics & pro bono work'
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: 'Research Opportunities',
                  desc: 'Journal publication & conferences'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-gray-100 bg-white p-5 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
