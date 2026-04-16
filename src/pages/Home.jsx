import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import Facilities from "../components/Facilities";
 import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import GlimpseLawCollege from "../components/GlimpseLawCollege";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  // YouTube details for Jadhavar Law College
  const youtubeUrl = "https://www.youtube.com/watch?v=PaDE1ETKP8A";
  const videoId = "PaDE1ETKP8A";

  // Thumbnail from public folder
  const thumbnailSrc = "/assets/images/vedio-2.png";

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
    

<section
  className="w-full py-14 px-8"
  style={{
    background: "linear-gradient(90deg, #4a36e0 0%, #9f1bbf 100%)",
    color: "#fff",
  }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* ================= LEFT CONTENT ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 space-y-5"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
        NAAC A+ Accredited • Bar Council of India Approved
      </p>

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Shape Your <span className="text-yellow-300">Future in Law</span>
      </h1>

      <p className="text-lg text-gray-100 leading-relaxed">
        Jadhavar College of Law, Pune offers a <strong>3-Year LL.B Professional Program </strong>
        designed to prepare students for <strong>advocacy, judiciary, corporate law,</strong>
        and public service through academic excellence and practical legal training.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Link to="/contact">
  <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition shadow-md">
    Apply for LL.B 2026
  </button>
</Link>

       <a
  href="/assets/prospectus.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-md">
    Download Prospectus
  </button>
</a>

      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/20">
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">2024</p>
                  <p className="text-xs text-gray-300">Established</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">1000+</p>
                  <p className="text-xs text-gray-300">Association With Lawyers</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">50+</p>
                  <p className="text-xs text-gray-300">MOU</p>
                </div>
                <div>
                  <p className="text-yellow-400 text-xl sm:text-2xl font-bold">95%</p>
                  <p className="text-xs text-gray-300">Placement Support</p>
                </div>
              </div>
    </motion.div>

    {/* ================= RIGHT VIDEO SECTION ================= */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="md:w-1/2"
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
        {!showVideo ? (
          <div
            className="w-full h-full bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${thumbnailSrc})` }}
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-purple-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
              Campus Overview
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black"
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Jadhavar College of Law Pune"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        )}
      </div>

      <p className="mt-4 text-right text-sm text-gray-200">
        <strong>Dr. Sapna Sukrut Dev</strong><br />
        Principal, Jadhavar College of Law
      </p>
    </motion.div>
  </div>
</section>




      {/* ================= WELCOME MESSAGE ================= */}
<section className="w-full bg-white py-16">
  
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
      <img
        src="/assets/images/law-campus.png"
        alt="Jadhavar Law College Campus"
        className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />
    </div>

    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Welcome to Jadhavar College of Law, Pune
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Jadhavar College of Law is a premier institution committed to academic
        excellence, ethical legal education, and professional development.
        Our 3 Years LL.B program prepares students for advocacy, judiciary,
        corporate law, and public service.
      </p>
      <p className="text-gray-600">
        With experienced faculty, modern infrastructure, and a student-centric
        approach, we nurture future legal professionals with integrity and competence.
      </p>
    </div>

    {/* <div className="relative">
      <img
        src="/assets/images/law-campus.png"
        alt="Jadhavar Law College Campus"
        className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />
    </div> */}

  </div>
</section>


      {/* ==================== LL.B PROMO SECTION ==================== */}
       {/* PLACEMENTS SECTION */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Placements
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto mb-16">
            At Jadhavar College of Law (3 Years LL.B.), we are committed to shaping
            confident legal professionals. Our dedicated Training & Placement Cell
            bridges the gap between legal education and professional practice,
            ensuring students are courtroom-ready, corporate-ready, and
            competitive-exam-ready.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* ITEM 1 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement1.png"
                  alt="Placement Assistance at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                100% Placement Assistance
              </h4>
              <p className="text-gray-600 text-sm">
                Support with internships, law firms, chambers, and corporate legal
                departments.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement2.png"
                  alt="Industry Connect at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Strong Legal Industry Connect
              </h4>
              <p className="text-gray-600 text-sm">
                Guest lectures by senior advocates, judges, legal advisors, and
                corporate lawyers.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement3.png"
                  alt="Pre-Placement Training at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Pre-Placement Training
              </h4>
              <p className="text-gray-600 text-sm">
                Courtroom etiquette, drafting skills, communication, moot courts,
                and interview preparation.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement4.png"
                  alt="Diverse Legal Sectors at Jadhavar Law College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Diverse Legal Sectors
              </h4>
              <p className="text-gray-600 text-sm">
                Litigation, Corporate Law, Judiciary, Legal Process Outsourcing,
                NGOs, and Public Services.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* vision mission */}


      {/* ================= VISION & MISSION ================= */}
    <h2 className="mt-10 text-3xl md:text-4xl font-bold mb-4 text-center">
  Vision & Mission
</h2>


<section className="w-full bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
    🎯 Vision
  </h3>

  <p className="text-gray-600 leading-relaxed text-sm">
    Jadhavar College Of Law works towards the growth, development and formation
    of such a generation of students who possess the intellectual genius, moral
    consciousness and social responsibility to ensure the Rule of Law, not just
    locally but also propagating the same globally. Since we lead the way in
    legal professional education, the onus is on us to show the way in
    integrating the rule of law within the society and remove any discrimination
    with respect to person, property or community in the society.
  </p>

  <p className="text-gray-600 leading-relaxed text-sm mt-4">
    The College is ground for Judges, Legislators and Public Servants in the
    making which would form part of the governing system in the future. We
    endeavour to make them best in whatever constructive they do and polish
    them into professionals who would make a mark in the legal area.
  </p>
</div>


    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
    🚀 Mission
  </h3>

  <p className="text-gray-600 leading-relaxed text-sm mb-4">
    Jadhavar College Of Law believes in disseminating legal knowledge in a
    resourceful way with a view to help in the nation’s development. To achieve
    this objective the College identifies the following steps:
  </p>

  <p className="text-gray-600 leading-relaxed text-sm mb-2">
    To evolve and impart comprehensive legal education and to achieve excellence.
    To promote advanced studies and research in all branches of law. To sensitize
    the students of law regarding the various socio-legal issues of the country.
  </p>

  <p className="text-gray-600 leading-relaxed text-sm mb-2">
    To inculcate cultural, legal and ethical values with a view to foster the Rule
    of Law and the objectives enshrined in the Constitution of India. To raise
    legal awareness in the community for a greater social and economic justice.
  </p>

  <p className="text-gray-600 leading-relaxed text-sm">
    To combine quality education with necessary input of practical training and
    to prepare students for a variety of legal and law related career.
  </p>
</div>


  </div>
</section>

      {/* ==================== CAREER ENHANCEMENT CERTIFICATIONS ==================== */}
      <section
        className="w-full bg-[#2f2f2f] py-16 md:py-20"
        aria-labelledby="career-certifications"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* HEADER */}
          <header className="mb-10 text-center">
            <h2
              id="career-certifications"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Career Enhancement Certifications
            </h2>

            <p className="text-gray-300 text-base max-w-3xl mx-auto">
              Professionally designed certification programs at
              <strong className="text-yellow-300"> Jadhavar College of Law </strong>
              that strengthen litigation skills, corporate readiness,
              and judicial exam preparation.
            </p>
          </header>

          {/* SLIDER */}
          <div className="px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="pb-8"
            >
              {/* CARD DATA */}
              {[
                {
                  icon: "/assets/icons/criminal-law.png",
                  title: "Criminal Law Practice",
                  desc: "Practical courtroom training in criminal litigation",
                  points: [
                    "Criminal Drafting & Pleadings",
                    "Trial Court Procedures",
                    "Evidence Law Practice",
                  ],
                  cert: "Criminal Drafting & Moot Court Training",
                },
                {
                  icon: "/assets/icons/corporate-law.png",
                  title: "Corporate & Business Law",
                  desc: "Corporate compliance and commercial law exposure",
                  points: [
                    "Company Law & Compliance",
                    "Contract Drafting",
                    "Mergers & Acquisitions",
                  ],
                  cert: "Corporate Compliance Certification",
                },
                {
                  icon: "/assets/icons/judicial-law.png",
                  title: "Judicial Exams Preparation",
                  desc: "Focused preparation for judiciary & competitive exams",
                  points: [
                    "Bare Act Mastery",
                    "Answer Writing Practice",
                    "Legal Reasoning Skills",
                  ],
                  cert: "Judiciary Coaching Program",
                },
                {
                  icon: "/assets/icons/meditation.png",
                  title: "ADR & Mediation",
                  desc: "Alternative dispute resolution and negotiation skills",
                  points: [
                    "Mediation Techniques",
                    "Arbitration Procedures",
                    "Negotiation Skills",
                  ],
                  cert: "ADR & Mediation Certification",
                },
                {
                  icon: "/assets/icons/ip-law.png",
                  title: "Intellectual Property Law",
                  desc: "Specialized training in IP & cyber laws",
                  points: [
                    "Patent & Trademark Law",
                    "Copyright Protection",
                    "Cyber Law Essentials",
                  ],
                  cert: "IP Law Specialist Certification",
                },
                {
                  icon: "/assets/icons/legal-research.png",
                  title: "Legal Research & Writing",
                  desc: "Advanced drafting and legal research methodology",
                  points: [
                    "Legal Research Techniques",
                    "Opinion & Judgment Drafting",
                    "Citation & Referencing",
                  ],
                  cert: "Advanced Legal Drafting Certification",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <article className="bg-white rounded-xl overflow-hidden h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 min-h-[320px] flex flex-col">
                    {/* CARD BODY */}
                    <div className="p-5 text-center flex-1">
                      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                                ⚖️
                              </div>
                            `;
                          }}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4">
                        {item.desc}
                      </p>

                      <ul className="text-sm text-left space-y-2 text-[#b36a2e]">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CARD FOOTER */}
                    <footer className="bg-gray-50 px-5 py-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-800">
                        Certification Included
                      </p>
                      <p className="text-xs text-gray-600">
                        {item.cert}
                      </p>
                    </footer>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
<section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Why Choose Adv. Shardulrao Sudhakarrao
      <br /> Jadhavar College of Law?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        ["⚖️", "BCI Approved & University Affiliated", "Recognized by Bar Council of India and affiliated to reputed university"],
        ["🏛️", "Strong Legal Legacy & Visionary Leadership", "Guided by experienced legal professionals with a strong educational vision"],
        ["📚", "Practice-Oriented Legal Education", "Hands-on learning through moot courts, internships, and real-world legal exposure"],
        ["🌍", "National & International Exposure", "Opportunities for seminars, workshops, and global academic interactions"]
      ].map((item, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">{item[0]}</div>
          <h4 className="font-bold mb-2">{item[1]}</h4>
          <p className="text-sm text-gray-600">{item[2]}</p>
        </div>
      ))}

    </div>
  </div>
</section>



      {/* Other Sections */}
      <GlimpseLawCollege />
      {/* ================= FACILITIES ================= */}
<Facilities />



      
    

      {/* ================= AWARDS & ACHIEVEMENTS ================= */}
      <section className="w-full bg-white py-10 md:py-15">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
  <div className="flex">
  <img
    src="/assets/images/logo/logo1.png"
    alt="Jadhavar Group of Institutes Logo"
    className="w-48 md:w-56 object-contain ml-20 lg:ml-32"
    loading="lazy"
  />
</div>







            {/* RIGHT CONTENT */}
            <div>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                Jadhavar Group of Institutes
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Awards & Achievements
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Jadhavar College of Law has been consistently recognized for excellence
                in legal education. Our commitment to quality teaching, infrastructure,
                and student outcomes has earned us numerous accolades and certifications.
              </p>
            </div>
          </div>

          {/* CERTIFICATE SLIDER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {[
              "/assets/images/certificate1.png",
              "/assets/images/certificate2.png",
              "/assets/images/certificate3.png",
              "/assets/images/certificate4.png",
            ].map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={cert}
                    alt={`Jadhavar College of Law Certificate ${index + 1}`}
                    className="w-full max-w-xs h-56 object-contain border border-gray-200 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ================= STUDENT TESTIMONIALS ================= */}
<section className="w-full bg-gray-50 py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Student Testimonials
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600 italic">
          “The faculty and moot court training helped me gain confidence
          for courtroom practice.”
        </p>
        <p className="mt-3 font-semibold">— LL.B Student</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600 italic">
          “Internship guidance and legal exposure at Jadhavar College of Law
          shaped my legal career.”
        </p>
        <p className="mt-3 font-semibold">— Alumni</p>
      </div>
    </div>

  </div>
</section>

      
      




     



  {/* FAQ Section */}
      <FAQSection />



    </>
  );
}