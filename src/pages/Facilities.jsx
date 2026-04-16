import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Building,
  BookOpen,
  Scale,
  Users,
  Monitor,
  Wifi,
  Home,
  Dumbbell,
  Coffee,
  CheckCircle,
  MapPin,
  Clock,
  Award,
  Shield,
  Heart,
  Zap,
  Star,
  ArrowRight,
  ChevronRight,
  Library,
  Mic,
  Video,
  Users2,
  Target,
  Globe
} from 'lucide-react'

export default function Facilities() {
  const facilities = [
    {
      title: "Infrastructure Overview",
      icon: <Building className="h-10 w-10" />,
      description: "State-of-the-art campus spread over 5 acres with modern architecture designed specifically for legal education. Eco-friendly construction with ample green spaces.",
      features: [
        "5-acre sprawling campus",
        "Eco-friendly green building",
        "24/7 security surveillance",
        "Ample parking facilities",
        "Wheelchair accessible campus",
        "Solar power utilization"
      ],
      stats: "5 Acre Campus",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      animationDelay: 0.1
    },
    {
      title: "Library",
      icon: <BookOpen className="h-10 w-10" />,
      description: "Digital library with 25,000+ legal volumes, subscriptions to major law journals, and access to online legal databases like SCC Online, Manupatra, and Westlaw.",
      features: [
        "25,000+ legal volumes",
        "Digital resource center",
        "24/7 online database access",
        "Quiet study zones",
        "Group discussion rooms",
        "Photocopy and printing"
      ],
      stats: "25K+ Books",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      animationDelay: 0.2
    },
    {
      title: "Moot Court Hall",
      icon: <Scale className="h-10 w-10" />,
      description: "Fully equipped moot court hall simulating real courtroom environment with judge's bench, witness box, and advanced audio-visual recording systems.",
      features: [
        "Real courtroom simulation",
        "HD recording facilities",
        "Judges' chamber setup",
        "Digital evidence display",
        "Acoustic treatment",
        "100-seater capacity"
      ],
      stats: "Real Court Simulation",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      animationDelay: 0.3
    },
    {
      title: "Classrooms",
      icon: <Users className="h-10 w-10" />,
      description: "Smart classrooms with interactive whiteboards, audio-visual aids, comfortable seating, and optimal acoustics for effective teaching-learning process.",
      features: [
        "Smart boards & projectors",
        "Ergonomic furniture",
        "Air-conditioned rooms",
        "High-speed internet",
        "Sound amplification",
        "Natural lighting"
      ],
      stats: "Smart Classrooms",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      animationDelay: 0.4
    },
    {
      title: "Auditorium",
      icon: <Mic className="h-10 w-10" />,
      description: "500-seater auditorium with professional lighting, sound systems, and stage facilities for seminars, conferences, and cultural events.",
      features: [
        "500 seating capacity",
        "Dolby sound system",
        "Professional lighting",
        "Green rooms",
        "Recording studio",
        "VIP seating area"
      ],
      stats: "500 Seater",
      color: "from-red-600 to-rose-600",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      borderColor: "border-red-200",
      animationDelay: 0.5
    },
    {
      title: "Conference Hall",
      icon: <Video className="h-10 w-10" />,
      description: "Modern conference halls equipped with video conferencing facilities for national and international seminars, workshops, and guest lectures.",
      features: [
        "Video conferencing",
        "Simultaneous interpretation",
        "Wireless presentation",
        "Executive seating",
        "Catering services",
        "Business center"
      ],
      stats: "Video Conferencing",
      color: "from-indigo-600 to-violet-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      borderColor: "border-indigo-200",
      animationDelay: 0.6
    },
    {
      title: "Wi-Fi Campus",
      icon: <Wifi className="h-10 w-10" />,
      description: "High-speed fiber optic internet connectivity across campus with secure access points in all academic and residential areas.",
      features: [
        "Fiber optic backbone",
        "24/7 connectivity",
        "Secure access points",
        "High bandwidth",
        "IT support desk",
        "Digital campus portal"
      ],
      stats: "High-Speed Internet",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200",
      animationDelay: 0.7
    },
    {
      title: "Hostel Facilities",
      icon: <Home className="h-10 w-10" />,
      description: "Separate hostel facilities for boys and girls with modern amenities, mess, recreational areas, and 24/7 security.",
      features: [
        "AC & non-AC rooms",
        "In-house mess",
        "Common room with TV",
        "Laundry services",
        "Medical facilities",
        "24/7 security"
      ],
      stats: "Safe Accommodation",
      color: "from-teal-600 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      borderColor: "border-teal-200",
      animationDelay: 0.8
    },
    {
      title: "Sports & Gymnasium",
      icon: <Dumbbell className="h-10 w-10" />,
      description: "Well-equipped sports complex with indoor and outdoor facilities including gymnasium, basketball court, and yoga center.",
      features: [
        "Modern gym equipment",
        "Indoor sports complex",
        "Outdoor playground",
        "Yoga & meditation hall",
        "Swimming pool",
        "Sports coach"
      ],
      stats: "Fitness Center",
      color: "from-orange-600 to-amber-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      animationDelay: 0.9
    },
    {
      title: "Canteen",
      icon: <Coffee className="h-10 w-10" />,
      description: "Hygienic and spacious canteen serving nutritious meals, snacks, and beverages at subsidized rates for students and staff.",
      features: [
        "Hygienic kitchen",
        "Varied menu options",
        "Subsidized rates",
        "Outdoor seating",
        "Juice center",
        "Snack counter"
      ],
      stats: "Healthy Dining",
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      animationDelay: 1.0
    }
  ]

  const highlights = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Modern Infrastructure",
      description: "Purpose-built campus designed specifically for legal education excellence"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "24/7 security with CCTV surveillance across entire campus"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tech-Enabled",
      description: "Digital classrooms and high-speed connectivity for modern learning"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Student-Centric",
      description: "All facilities designed with student comfort and convenience in mind"
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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Facilities & Infrastructure | Jadhavar Law College Pune - Modern Campus</title>
        <meta 
          name="description" 
          content="Explore world-class facilities at Jadhavar Law College Pune including modern library, moot court hall, smart classrooms, hostel, sports complex, and Wi-Fi campus for 3-year LLB program."
        />
        <meta name="keywords" content="Jadhavar Law College facilities, law college infrastructure Pune, legal education campus, law library, moot court hall, hostel facilities, sports complex, Wi-Fi campus, law college amenities" />
        <meta property="og:title" content="Modern Facilities & Infrastructure at Jadhavar Law College Pune" />
        <meta property="og:description" content="State-of-the-art campus with advanced learning facilities for comprehensive legal education in 3-year LLB program." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/facilities" />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
      >
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
              <Building className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">World-Class Infrastructure</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Facilities & Infrastructure
              </span>
              <br />
              <span className="text-xl md:text-2xl font-normal text-gray-300 mt-2 block">
                Modern Learning Environment for Legal Education
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Experience state-of-the-art facilities designed to provide comprehensive legal education 
              and holistic development for our 3-year LLB students at Jadhavar Law College.
            </motion.p>
          </div>

          {/* Highlights */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-blue-300 mb-2 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{highlight.title}</h3>
                <p className="text-xs text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Facilities Grid */}
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
                Our <span className="text-blue-600">Campus Facilities</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-3xl mx-auto"
              >
                Designed to foster academic excellence, practical learning, and overall development 
                of future legal professionals
              </motion.p>
            </div>

            {/* Facilities Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="group h-full"
                >
                  <div className="relative h-full">
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                    
                    {/* Main Card */}
                    <div className={`relative h-full ${facility.bgColor} rounded-xl p-6 shadow-lg border ${facility.borderColor} group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                      
                      {/* Stats Badge */}
                      <div className={`absolute top-4 right-4 bg-gradient-to-br ${facility.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                        {facility.stats}
                      </div>
                      
                      {/* Icon Container */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${facility.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        {facility.icon}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {facility.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {facility.description}
                        </p>

                        {/* Features */}
                        <div className="mb-2">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-1.5">
                            {facility.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <ChevronRight className="h-3 w-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
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
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Campus Tour CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Experience Our Campus</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Schedule a campus tour to personally experience our world-class facilities and infrastructure
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Campus Tour
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Virtual Tour
                  </motion.button>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Special <span className="text-blue-600">Features</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Additional amenities that enhance the learning and living experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Digital Library Access",
                  description: "24/7 access to online legal databases including SCC Online, Manupatra, and Westlaw International",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Users2 className="h-8 w-8" />,
                  title: "Collaborative Spaces",
                  description: "Designated areas for group discussions, project work, and collaborative learning",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Career Resource Center",
                  description: "Dedicated space for placement preparation, interview practice, and career counseling",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      
    </>
  )
}