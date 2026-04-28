import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Calendar, 
  Download, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle, 
  Users,
  BookOpen,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Percent,
  Bookmark,
  X,
  Loader2
} from 'lucide-react'

const EnquiryModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: 'LLB',
    year: '2026',
    message: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    highestQualification: '',
    percentage: '',
    university: '',
    category: 'General',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    guardianPhone: '',
    howDidYouHear: 'Website'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formType, setFormType] = useState(type || 'enquiry')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    onSubmit(formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: 'LLB',
      year: '2026',
      message: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      highestQualification: '',
      percentage: '',
      university: '',
      category: 'General',
      dateOfBirth: '',
      gender: 'Male',
      guardianName: '',
      guardianPhone: '',
      howDidYouHear: 'Website'
    })
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  const handleSwitchForm = (newType) => {
    setFormType(newType)
    setIsSubmitted(false)
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full mx-auto animate-fadeIn">
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You for Your {formType === 'admission' ? 'Application' : 'Enquiry'}!
            </h3>
            <p className="text-gray-600 mb-6">
              {formType === 'admission' 
                ? 'Your application has been successfully submitted. Our admission team will review your details and contact you within 2-3 working days.'
                : 'Your enquiry has been received. Our team will get back to you within 24 hours.'
              }
            </p>
            <div className="space-y-4">
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  handleSwitchForm(formType === 'admission' ? 'enquiry' : 'admission')
                }}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Submit {formType === 'admission' ? 'Another Enquiry' : 'Admission Application'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-auto my-8 animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {formType === 'admission' ? 'Apply Now - 3-Year LL.B Program' : 'Admission Enquiry'}
            </h3>
            <p className="text-gray-600 mt-1">
              {formType === 'admission' 
                ? 'Fill out the application form for 2026 admissions'
                : 'Get detailed information about our LL.B program'
              }
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Type Switcher */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => handleSwitchForm('enquiry')}
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                formType === 'enquiry'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Quick Enquiry
            </button>
            <button
              onClick={() => handleSwitchForm('admission')}
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                formType === 'admission'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Full Application
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Personal Information</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="+91 9876543210"
                />
              </div>

              {formType === 'admission' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Academic Information</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Interested *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="LLB">3-Year LL.B Program</option>
                  <option value="LLM">LL.M Program</option>
                  <option value="PGDL">PG Diploma in Law</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Year *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="2026">2026-27</option>
                  <option value="2025">2025-26</option>
                </select>
              </div>

              {formType === 'admission' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Qualification *
                    </label>
                    <select
                      name="highestQualification"
                      value={formData.highestQualification}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="">Select qualification</option>
                      <option value="BA">Bachelor of Arts (BA)</option>
                      <option value="BSc">Bachelor of Science (BSc)</option>
                      <option value="BCom">Bachelor of Commerce (BCom)</option>
                      <option value="BBA">Bachelor of Business Administration (BBA)</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Percentage/CGPA *
                      </label>
                      <input
                        type="text"
                        name="percentage"
                        value={formData.percentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="e.g., 75% or 8.5 CGPA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="General">General</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="OBC">OBC</option>
                        <option value="EWS">EWS</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      University/Board *
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Name of university/board"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Additional Fields for Admission Form */}
            {formType === 'admission' && (
              <>
                {/* Address Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Address Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter complete address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-gray-900">Guardian Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Phone *
                      </label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Guardian's phone number"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Message/Enquiry */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formType === 'admission' ? 'Additional Information' : 'Your Enquiry *'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required={formType === 'enquiry'}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder={
                  formType === 'admission'
                    ? 'Any additional information or questions...'
                    : 'Please describe your enquiry in detail...'
                }
              />
            </div>

            {/* How did you hear about us */}
            {formType === 'admission' && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? *
                </label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="Website">College Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Newspaper">Newspaper Advertisement</option>
                  <option value="Friend">Friend/Relative</option>
                  <option value="Seminar">Educational Seminar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                `Submit ${formType === 'admission' ? 'Application' : 'Enquiry'}`
              )}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our Privacy Policy and consent to being contacted by our admission team.
          </p>
        </form>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [openSections, setOpenSections] = useState({
    admissionProcess: true,
    documentsRequired: false,
    feeStructure: false,
    scholarships: false,
    rules: false
  })

  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [modalType, setModalType] = useState('') // 'admission' or 'enquiry'

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleEnquiryClick = (type = 'enquiry') => {
    setModalType(type)
    setShowEnquiryModal(true)
  }

  const handleApplyNowClick = () => {
    setModalType('admission')
    setShowEnquiryModal(true)
  }

  const handleCloseModal = () => {
    setShowEnquiryModal(false)
    setModalType('')
  }

  const handleSubmitEnquiry = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    console.log('Modal type:', modalType)
    // You can make API calls here
    // Example: axios.post('/api/admissions', formData)
    handleCloseModal()
  }

  const admissionCards = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "2026 Admissions Open",
      description: "Apply for 3-Year LL.B Program starting academic year 2026-27",
      cta: "Apply Now",
      onClick: handleApplyNowClick,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Prospectus",
      description: "Complete admission guide with fee structure & eligibility",
      cta: "Download PDF",
      onClick: () => window.open('/assets/prospectus.pdf', '_blank'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Admission Enquiry",
      description: "Mon-Sat: 10:00 AM - 5:00 PM | Get personalized counseling",
      cta: "Enquire Now",
      onClick: () => handleEnquiryClick('enquiry'),
      color: "from-purple-500 to-purple-600"
    }
  ]

  const feeStructure = [
    { category: "Maharashtra State Students", tuition: "₹85,000 per year", development: "₹25,000", total: "₹1,10,000" },
    { category: "Outside Maharashtra Students", tuition: "₹1,70,000 per year", development: "₹25,000", total: "₹1,95,000" },
    { category: "NRI/Foreign Students", tuition: "$2,500 per year", development: "$500", total: "$3,000" }
  ]

  const scholarshipCategories = [
    {
      name: "Merit-Based Scholarships",
      details: [
        "Top 3 university rank holders: 100% tuition fee waiver",
        "90% and above in graduation: 50% fee concession",
        "85-89% in graduation: 25% fee concession"
      ]
    },
    {
      name: "Social Welfare Scholarships",
      details: [
        "SC/ST students: Full fee reimbursement as per Govt. norms",
        "OBC/EBC students: Fee concession as per state policy",
        "Economically weaker sections: Special financial aid"
      ]
    },
    {
      name: "Special Category Scholarships",
      details: [
        "Children of armed forces personnel: 30% concession",
        "Single girl child: 25% fee waiver",
        "Sports achievers: Up to 50% concession"
      ]
    }
  ]

  const rulesRegulations = [
    {
      title: "Academic Regulations",
      points: [
        "Minimum 75% attendance mandatory for all subjects",
        "Internal assessment carries 40% weightage",
        "End-semester examination carries 60% weightage",
        "Minimum 45% marks required to pass each subject"
      ]
    },
    {
      title: "Conduct & Discipline",
      points: [
        "Strict anti-ragging policy as per Supreme Court guidelines",
        "Professional dress code for moot courts and seminars",
        "Mobile phone usage restricted in classrooms",
        "Zero tolerance for substance abuse on campus"
      ]
    },
    {
      title: "Examination Rules",
      points: [
        "Valid college ID card mandatory for examinations",
        "No revaluation for internal assessment marks",
        "Medical certificate required for absentees",
        "University pattern followed for all evaluations"
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>3-Year LL.B Admissions 2026 | Jadhavar College of Law Pune | Apply Now</title>
        <meta
          name="description"
          content="Apply for 3-Year LL.B program at Jadhavar Law College Pune. Check admission process, documents required, FRA approved fee structure, scholarships, and rules for 2026 batch."
        />
        <meta name="keywords" content="3 year LL.B admission 2026, law college Pune admissions, Jadhavar law college fees, LL.B scholarships, law admission process" />
        <link rel="canonical" href="https://www.jadhavar-law.edu.in/admissions" />
      </Helmet>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={showEnquiryModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEnquiry}
        type={modalType}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Bar Council of India Approved</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              3-Year <span className="text-yellow-300">LL.B Admissions 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Start Your Legal Career at Jadhavar Law College, Pune
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
              <button 
                onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                  <button 
                    onClick={card.onClick}
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('admissionProcess')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Admission Process</h3>
                </div>
                {openSections.admissionProcess ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.admissionProcess && (
                <div className="px-6 pb-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-blue-800">Graduation Requirement</h5>
                          <p className="text-blue-700 mt-1">
                            Bachelor's degree from any recognized university with minimum 45% marks (40% for SC/ST categories). Students appearing for final year graduation exams are also eligible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Application Submission",
                        description: "Fill online application form available on college website or collect form from admission office"
                      },
                      {
                        step: "2",
                        title: "Document Submission",
                        description: "Submit required documents for verification at admission office within specified timeline"
                      },
                      {
                        step: "3",
                        title: "Merit List Publication",
                        description: "College publishes merit list based on graduation marks and reservation criteria"
                      },
                      {
                        step: "4",
                        title: "Fee Payment",
                        description: "Selected candidates need to pay admission fees to confirm their seat"
                      },
                      {
                        step: "5",
                        title: "Admission Confirmation",
                        description: "Collect admission letter and complete enrollment formalities"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('documentsRequired')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Documents Required</h3>
                </div>
                {openSections.documentsRequired ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.documentsRequired && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Academic Documents</h4>
                      <div className="space-y-3">
                        {[
                          "SSC/HSC Mark sheets & Passing Certificates",
                          "Graduation Mark sheets (All years/semesters)",
                          "Graduation Degree Certificate/Provisional Certificate",
                          "Transfer Certificate/Leaving Certificate",
                          "Migration Certificate (if applicable)",
                          "Equivalence Certificate (for foreign degrees)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Personal Documents</h4>
                      <div className="space-y-3">
                        {[
                          "Aadhaar Card (Self & Parents)",
                          "Domicile Certificate (for Maharashtra students)",
                          "Caste Certificate (for reserved category)",
                          "Caste Validity Certificate (for reserved category)",
                          "Non-Creamy Layer Certificate (if applicable)",
                          "Income Certificate (for EWS category)",
                          "Passport size photographs (8 copies)",
                          "Gap Certificate (if applicable)"
                        ].map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-yellow-800 text-center">
                      <strong>Important:</strong> All documents must be submitted in original for verification along with two attested photocopies. Self-attested copies will not be accepted.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('feeStructure')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Fee Structure (FRA Approved)</h3>
                </div>
                {openSections.feeStructure ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.feeStructure && (
                <div className="px-6 pb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <p className="text-green-800 text-center">
                      <strong>FRA Approved:</strong> All fees are regulated by the Fees Regulating Authority, Government of Maharashtra. Fees are subject to revision as per FRA guidelines.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <th className="px-6 py-4 text-left font-semibold">Student Category</th>
                          <th className="px-6 py-4 text-left font-semibold">Tuition Fee</th>
                          <th className="px-6 py-4 text-left font-semibold">Development Fee</th>
                          <th className="px-6 py-4 text-left font-semibold">Total Annual Fee</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {feeStructure.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium">{fee.category}</td>
                            <td className="px-6 py-4">{fee.tuition}</td>
                            <td className="px-6 py-4">{fee.development}</td>
                            <td className="px-6 py-4 font-bold text-blue-700">{fee.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Additional Charges (One Time)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <ul className="space-y-2 text-blue-700">
                          <li>Admission Processing Fee: ₹500</li>
                          <li>Library Deposit (Refundable): ₹2,000</li>
                          <li>Laboratory Charges: ₹1,000</li>
                          <li>Identity Card: ₹200</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <ul className="space-y-2 text-green-700">
                          <li>University Enrollment Fee: ₹500</li>
                          <li>Medical Examination: ₹300</li>
                          <li>Student Welfare Fund: ₹500</li>
                          <li>Alumni Association: ₹300</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships & Freeships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('scholarships')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Percent className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Scholarships & Freeships</h3>
                </div>
                {openSections.scholarships ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.scholarships && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {scholarshipCategories.map((scholarship, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{scholarship.name}</h4>
                        </div>
                        <ul className="space-y-2">
                          {scholarship.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">Important Information</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>Scholarship applications must be submitted within 30 days of admission</li>
                      <li>All scholarships are subject to annual renewal based on academic performance</li>
                      <li>Students must maintain minimum 75% attendance to continue scholarships</li>
                      <li>Multiple scholarship benefits cannot be combined</li>
                      <li>Scholarship disbursement is done directly to student's bank account</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('rules')}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Rules & Regulations</h3>
                </div>
                {openSections.rules ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.rules && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {rulesRegulations.map((rule, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Bookmark className="h-5 w-5 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{rule.title}</h4>
                        </div>
                        <ul className="space-y-3">
                          {rule.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-800 mb-3">Important Regulations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Academic Integrity</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Plagiarism in assignments leads to suspension</li>
                          <li>• Use of unfair means in exams results in cancellation</li>
                          <li>• Fabrication of documents leads to rustication</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Code of Conduct</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Smoking and alcohol strictly prohibited</li>
                          <li>• Mobile phones prohibited in examination halls</li>
                          <li>• Damage to college property must be compensated</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Legal Journey with Us
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Jadhavar Law College's 3-Year LL.B Program and build a strong foundation for your legal career. 
            Limited seats available for 2026 batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleApplyNowClick}
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Apply for Admission
            </button>
            <button 
              onClick={() => window.open('/assets/prospectus.pdf', '_blank')}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              Download Complete Prospectus
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Admission Helpline</h4>
                <p className="text-blue-100">+91 9284246664 / +91 20 25467890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Email Assistance</h4>
                <p className="text-blue-100">admissions@jadhavar-law.edu.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Visit Admission Office</h4>
                <p className="text-blue-100">Mon-Sat: 9:30 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}