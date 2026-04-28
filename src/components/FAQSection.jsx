import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      section: "Admission Department",
      questions: [
        {
          q: "How can I take admission to the 3-Year LL.B. course?",
          a: "Admission is done through the Maharashtra CET Cell process. Students should register online and follow CAP guidelines. For full details, refer to the official CET Cell website."
        },
        {
          q: "Is MH-CET Law compulsory for admission?",
          a: "Yes, admission is based on MH-CET Law as per Government rules. For complete procedure, students should visit the CET Cell website."
        },
        {
          q: "What facilities are available for LL.B. students?",
          a: "Jadhavar College of Law, Pune provides facilities such as a library, moot court hall, ICT-enabled classrooms, legal aid activities, and practical training support."
        },
        {
          q: "Does the college help after CET allotment?",
          a: "Yes, the college provides full guidance and support for admission confirmation, document verification, and student orientation after seat allotment."
        },
        {
          q: "Where can I get complete admission information?",
          a: "For detailed admission procedure, students should refer to the official CET Cell website. The college also provides support and guidance to admitted students."
        }
      ]
    },
    {
      section: "Academics Department",
      questions: [
        {
          q: "What is the passing criteria in LL.B.?",
          a: "Minimum 40 marks out of 100, with at least 12 in internal and 28 in external."
        },
        {
          q: "How much attendance is required?",
          a: "Minimum 75% attendance is compulsory to appear for exams."
        },
        {
          q: "How are marks divided in each subject?",
          a: "70 marks (University exam) + 30 marks (Internal assessment)."
        },
        {
          q: "How many credits are required for LL.B.?",
          a: "Total 132 credits are required to complete the degree."
        },
        {
          q: "Can a student study another degree along with LL.B.?",
          a: "No, dual degree is not allowed as per rules."
        }
      ]
    },
    {
      section: "Legal Aid Centre",
      questions: [
        {
          q: "What is the role of the Legal Aid Centre?",
          a: "It provides free legal awareness and assistance to society while offering practical exposure to students."
        },
        {
          q: "Do students participate actively?",
          a: "Yes, students actively participate in legal aid camps, awareness drives, and social outreach programs."
        },
        {
          q: "Are awareness camps conducted?",
          a: "Yes, regular legal awareness camps are conducted in communities."
        },
        {
          q: "How does it help learning?",
          a: "It helps students understand real-life legal issues and develop social responsibility."
        },
        {
          q: "Can students work on real cases?",
          a: "Students may assist in understanding real legal matters under faculty guidance."
        }
      ]
    },
    {
      section: "Internship Facility",
      questions: [
        {
          q: "Are internships compulsory?",
          a: "Yes, internships are mandatory as per Bar Council of India rules."
        },
        {
          q: "Does the college assist in internships?",
          a: "Yes, the college guides students in securing internships with advocates, law firms, courts, and legal organizations."
        },
        {
          q: "What types of internships are available?",
          a: "Internships include court practice, law firms, NGOs, corporate legal departments, and legal aid work."
        },
        {
          q: "When can students start internships?",
          a: "Students are encouraged to begin internships from early semesters."
        },
        {
          q: "How do internships help?",
          a: "Internships provide practical exposure, professional experience, and help build a strong legal career foundation."
        }
      ]
    },
    {
      section: "Moot Court Department",
      questions: [
        {
          q: "What is a moot court and how does it help law students?",
          a: "A moot court is a simulated court proceeding where students practice legal arguments, drafting, and advocacy skills. It helps in developing confidence, legal reasoning, and courtroom presentation abilities."
        },
        {
          q: "Does Jadhavar College of Law, Pune conduct regular moot court sessions?",
          a: "Yes, Jadhavar College of Law, Pune regularly conducts moot court sessions as part of its practical legal training to ensure students gain real courtroom exposure."
        },
        {
          q: "What opportunities are provided to students for participation in moot court competitions?",
          a: "Students are encouraged and guided to participate in inter-collegiate and national moot court competitions. Jadhavar College of Law, Pune actively sends and supports students to represent the college in external competitions, providing valuable exposure to real competitive environments and strengthening their advocacy and courtroom skills."
        },
        {
          q: "Has the college organized any major moot court competitions at national level?",
          a: "Yes, Jadhavar College of Law, Pune has successfully organized the 1st and 2nd National Moot Court Competitions, with participation of 28 teams, presence of 100+ legal professionals, and 20+ Hon’ble judges and experts as panel members."
        },
        {
          q: "Does the college offer any certificate course in moot court and drafting?",
          a: "Yes, the college conducts a One-Month Certificate Course on Moot Court and Drafting as a continuous skill development programme, focusing on advocacy, legal drafting, and courtroom skills."
        }
      ]
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Common questions about admissions, academics, legal aid, internships, and moot court
            at Jadhavar College of Law.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {section.section}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.questions.map((faq, index) => {
                  const globalIndex = sectionIndex * 5 + index; // Assuming 5 questions per section
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={globalIndex}
                      className="bg-white border border-gray-200 rounded-md"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-semibold text-gray-900 text-sm md:text-base">
                          Q{index + 1}. {faq.q}
                        </span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-blue-700" />
                        ) : (
                          <Plus className="w-5 h-5 text-blue-700" />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-40 px-4 pb-4" : "max-h-0 px-4"
                        }`}
                      >
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
