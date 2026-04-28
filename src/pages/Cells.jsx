import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Scale,
  BookOpen,
  Briefcase,
  Search,
  Shield,
  Users,
  AlertCircle,
  MessageSquare,
  Heart,
  UserCheck,
  Target,
  Trophy,
  Award,
  Zap,
  Clock,
  Globe,
  Star,
  TrendingUp,
  FileText,
  GraduationCap,
  BarChart,
  CheckCircle,
  BookMarked,
  Lightbulb,
  Users2,
  ShieldCheck,
  HandHeart,
  ArrowRight
} from 'lucide-react'

export default function Cells() {
  const cells = [
    {
      title: "Legal Aid & Legal Literacy Cell",
      icon: <Scale className="h-10 w-10" />,
      description: "Provides free legal assistance to underprivileged sections and conducts legal awareness programs to educate communities about their rights and legal remedies.",
      objectives: [
        "Offer pro bono legal services",
        "Conduct legal literacy camps",
        "Spread awareness about fundamental rights",
        "Assist in legal documentation"
      ],
      activities: [
        "Weekly legal aid clinics",
        "Community outreach programs",
        "Legal awareness workshops",
        "Mobile legal aid vans"
      ],
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      animationDelay: 0.1
    },
    {
      title: "Moot Court Society",
      icon: <BookOpen className="h-10 w-10" />,
      description: "Develops advocacy skills through simulated court proceedings, mock trials, and participation in national and international moot court competitions.",
      objectives: [
        "Enhance legal research skills",
        "Improve courtroom etiquette",
        "Develop persuasive advocacy",
        "Prepare for competitive mooting"
      ],
      activities: [
        "Weekly moot court sessions",
        "Inter-college competitions",
        "Judges' training workshops",
        "National competition preparation"
      ],
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      animationDelay: 0.2
    },
    {
      title: "Internship & Placement Cell",
      icon: <Briefcase className="h-10 w-10" />,
      description: "Facilitates internship opportunities with law firms, corporate houses, NGOs, and judicial institutions while ensuring campus placements for graduates.",
      objectives: [
        "Secure quality internships",
        "Provide placement assistance",
        "Develop industry connections",
        "Enhance employability skills"
      ],
      activities: [
        "Industry tie-ups and MOUs",
        "Resume building workshops",
        "Interview preparation sessions",
        "Career counseling and guidance"
      ],
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      animationDelay: 0.3
    },
    {
      title: "Research & Publication Cell",
      icon: <Search className="h-10 w-10" />,
      description: "Promotes academic research, publishes law journals, and organizes seminars and conferences to encourage scholarly activities among students and faculty.",
      objectives: [
        "Encourage legal research",
        "Publish academic journals",
        "Organize research seminars",
        "Promote interdisciplinary studies"
      ],
      activities: [
        "Annual law journal publication",
        "Research methodology workshops",
        "Faculty-student collaborative projects",
        "National conferences"
      ],
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      animationDelay: 0.4
    },
    {
      title: "Internal Quality Assurance Cell (IQAC)",
      icon: <ShieldCheck className="h-10 w-10" />,
      description: "Ensures continuous improvement in academic and administrative performance through quality enhancement initiatives and best practices implementation.",
      objectives: [
        "Maintain academic standards",
        "Implement quality benchmarks",
        "Monitor institutional performance",
        "Facilitate accreditation processes"
      ],
      activities: [
        "Quality audits and reviews",
        "Curriculum enhancement",
        "Feedback analysis",
        "Best practices documentation"
      ],
      color: "from-cyan-600 to-cyan-800",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      animationDelay: 0.5
    },
    {
      title: "Anti-Ragging Cell",
      icon: <Shield className="h-10 w-10" />,
      description: "Prevents ragging incidents and ensures a safe, respectful, and conducive learning environment for all students on campus.",
      objectives: [
        "Eliminate ragging practices",
        "Create awareness about consequences",
        "Provide confidential reporting",
        "Ensure immediate action on complaints"
      ],
      activities: [
        "Anti-ragging awareness campaigns",
        "Regular campus monitoring",
        "Student orientation programs",
        "Counseling and support services"
      ],
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      animationDelay: 0.6
    },
    {
      title: "Internal Complaints Committee (ICC)",
      icon: <Users className="h-10 w-10" />,
      description: "Addresses complaints of sexual harassment at workplace and educational institutions as per the POSH Act, ensuring a safe environment for all.",
      objectives: [
        "Prevent sexual harassment",
        "Provide redressal mechanism",
        "Ensure confidentiality",
        "Promote gender sensitivity"
      ],
      activities: [
        "POSH awareness workshops",
        "Regular committee meetings",
        "Confidential inquiry processes",
        "Support and counseling services"
      ],
      color: "from-pink-600 to-pink-800",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      animationDelay: 0.7
    },
    {
      title: "Grievance Redressal Cell",
      icon: <AlertCircle className="h-10 w-10" />,
      description: "Provides a transparent mechanism for students and staff to voice concerns and ensures timely resolution of grievances.",
      objectives: [
        "Address student grievances",
        "Maintain transparency",
        "Ensure timely resolution",
        "Improve institutional processes"
      ],
      activities: [
        "Regular grievance meetings",
        "Online grievance portal",
        "Feedback collection",
        "Process improvement initiatives"
      ],
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      animationDelay: 0.8
    },
    {
      title: "Equal Opportunity & Social Inclusion Cell",
      icon: <MessageSquare className="h-10 w-10" />,
      description: "Promotes inclusive education and equal opportunities for students from diverse backgrounds including differently-abled and marginalized communities.",
      objectives: [
        "Ensure equal opportunities",
        "Promote social inclusion",
        "Support diverse student needs",
        "Foster inclusive environment"
      ],
      activities: [
        "Accessibility audits",
        "Special assistance programs",
        "Inclusive policy development",
        "Awareness campaigns"
      ],
      color: "from-teal-600 to-teal-800",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      animationDelay: 0.9
    },
    {
      title: "Women Development Cell",
      icon: <Heart className="h-10 w-10" />,
      description: "Empowers female students through various programs focusing on personal development, career guidance, and gender equality awareness.",
      objectives: [
        "Empower women students",
        "Address gender-specific issues",
        "Promote leadership skills",
        "Ensure safe campus environment"
      ],
      activities: [
        "Women empowerment workshops",
        "Self-defense training",
        "Career guidance sessions",
        "Networking events"
      ],
      color: "from-rose-600 to-rose-800",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      animationDelay: 1.0
    },
    {
      title: "Discipline & Student Welfare Cell",
      icon: <UserCheck className="h-10 w-10" />,
      description: "Maintains discipline on campus while addressing student welfare issues, ensuring a balanced academic and personal development environment.",
      objectives: [
        "Maintain campus discipline",
        "Address student welfare",
        "Promote ethical behavior",
        "Support student initiatives"
      ],
      activities: [
        "Disciplinary committee meetings",
        "Student welfare programs",
        "Mentorship initiatives",
        "Behavioral counseling"
      ],
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      animationDelay: 1.1
    },
    {
      title: "Cultural & Sports Committee",
      icon: <Trophy className="h-10 w-10" />,
      description: "Organizes cultural events, sports activities, and competitions to promote holistic development and nurture talents beyond academics.",
      objectives: [
        "Promote cultural activities",
        "Encourage sports participation",
        "Develop team spirit",
        "Showcase student talents"
      ],
      activities: [
        "Annual cultural fest",
        "Inter-college sports meets",
        "Talent competitions",
        "Recreational activities"
      ],
      color: "from-violet-600 to-violet-800",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      animationDelay: 1.2
    },
    {
      title: "Constitutional Club",
      icon: <FileText className="h-10 w-10" />,
      description: "Promotes understanding of constitutional principles, fundamental rights, duties, and democratic values through various academic activities.",
      objectives: [
        "Spread constitutional awareness",
        "Study constitutional amendments",
        "Promote democratic values",
        "Encourage civic participation"
      ],
      activities: [
        "Constitution Day celebrations",
        "Debates on constitutional issues",
        "Guest lectures by constitutional experts",
        "Model parliament sessions"
      ],
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      animationDelay: 1.3
    }
  ]

 
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <>
      <Helmet>
        <title>Cells & Centres | Jadhavar Law College Pune - Specialized Committees & Societies</title>
        <meta 
          name="description" 
          content="Explore the various cells, committees, and centres at Jadhavar Law College including Legal Aid Cell, Moot Court Society, Internship Cell, IQAC, and more specialized bodies."
        />
        <meta name="keywords" content="Law college cells, legal aid cell, moot court society, internship cell, research cell, IQAC, anti-ragging, grievance cell, women development, constitutional club, law college committees" />
        <meta property="og:title" content="Specialized Cells & Centres at Jadhavar Law College Pune" />
        <meta property="og:description" content="Comprehensive network of cells and centres supporting academic excellence, student welfare, and professional development at Jadhavar Law College." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/cells-centres" />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-6 border border-white/20"
            >
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">Specialized Committees & Societies</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cells & Centres
              </span>
              <br />
              <span className="text-xl md:text-2xl font-normal text-gray-300 mt-2 block">
                Supporting Excellence in Legal Education
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive network of specialized committees and societies ensuring holistic development, 
              academic support, and professional growth for our law students.
            </motion.p>
          </div>

          {/* Quick Stats */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10"
          >
            
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content - Cells Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                Our <span className="text-blue-600">Specialized Cells</span> & Committees
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-3xl mx-auto"
              >
                Each cell is designed to address specific aspects of legal education, student welfare, 
                and professional development, ensuring comprehensive support for our students.
              </motion.p>
            </div>

            {/* Cells Grid - FIXED: Removed duplicate variants prop */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cells.map((cell, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cell.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                    
                    {/* Main Card */}
                    <div className={`relative h-full ${cell.bgColor} rounded-xl p-6 shadow-lg border ${cell.borderColor} group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                      
                      {/* Animated Corner Accent */}
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${cell.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Icon Container */}
                      <motion.div 
                        animate={pulseAnimation}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${cell.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cell.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {cell.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {cell.description}
                        </p>

                        {/* Objectives */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-4 w-4 text-gray-500" />
                            <h4 className="text-sm font-semibold text-gray-800">Key Objectives</h4>
                          </div>
                          <ul className="space-y-1.5">
                            {cell.objectives.map((objective, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Activities */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-gray-500" />
                            <h4 className="text-sm font-semibold text-gray-800">Major Activities</h4>
                          </div>
                          <ul className="space-y-1.5">
                            {cell.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <Star className="h-3 w-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hover Indicator */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <ArrowRight className="h-5 w-5 text-blue-600" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Gradient Border Bottom */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cell.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-12 border-t border-gray-200"
            >
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Our Approach</h3>
                    </div>
                    <p className="text-gray-700">
                      Each cell operates with student participation at its core, ensuring practical learning 
                      opportunities and real-world exposure. Regular monitoring and feedback mechanisms 
                      help us continuously improve our services.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Users2 className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Student Benefits</h3>
                    </div>
                    <p className="text-gray-700">
                      Active participation in these cells enhances students' practical skills, 
                      builds professional networks, develops leadership qualities, and provides 
                      valuable experience beyond classroom learning.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How to <span className="text-blue-600">Participate</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get involved in our cells and committees to enhance your legal education experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Register Interest",
                  description: "Submit your interest through the student portal or directly approach cell coordinators",
                  icon: <BookMarked className="h-8 w-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Attend Orientation",
                  description: "Participate in orientation sessions to understand cell objectives and activities",
                  icon: <GraduationCap className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Active Participation",
                  description: "Engage in cell activities, meetings, and contribute to various initiatives",
                  icon: <BarChart className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white text-2xl font-bold mb-4`}>
                    {step.step}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Want to Get Involved?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our specialized cells and committees to enhance your skills and contribute to the legal community
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-sm"
                >
                  Contact Cell Coordinators
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Download Cell Brochure
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}