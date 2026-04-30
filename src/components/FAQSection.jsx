import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      section: 'Admission Department',
      questions: [
        {
          q: 'How can I take admission to the 3-Year LL.B. course?',
          a: 'Admission is done through the Maharashtra CET Cell process. Students should register online and follow CAP guidelines.'
        },
        {
          q: 'Is MH-CET Law compulsory for admission?',
          a: 'Yes, admission is based on MH-CET Law as per Government rules.'
        },
        {
          q: 'What facilities are available for LL.B. students?',
          a: 'The college provides a library, moot court hall, ICT-enabled classrooms, legal aid activities, and practical training support.'
        },
        {
          q: 'Does the college help after CET allotment?',
          a: 'Yes, the college provides support for admission confirmation, document verification, and student orientation.'
        }
      ]
    },
    {
      section: 'Academics Department',
      questions: [
        {
          q: 'What is the passing criteria in LL.B.?',
          a: 'Minimum passing criteria follows university and Bar Council of India norms.'
        },
        {
          q: 'How much attendance is required?',
          a: 'Minimum 75% attendance is compulsory to appear for exams.'
        },
        {
          q: 'How are marks divided in each subject?',
          a: 'Subjects generally include university exams and internal assessment as per the applicable syllabus.'
        },
        {
          q: 'Can a student study another degree along with LL.B.?',
          a: 'Dual degree rules depend on the applicable university and regulatory guidelines.'
        }
      ]
    },
    {
      section: 'Practical Training',
      questions: [
        {
          q: 'Are internships compulsory?',
          a: 'Yes, internships are an important part of legal education and practical exposure.'
        },
        {
          q: 'Does the college assist in internships?',
          a: 'Yes, students receive guidance for internships with advocates, courts, firms, NGOs, and legal organizations.'
        },
        {
          q: 'Does the college conduct moot court sessions?',
          a: 'Yes, regular moot court sessions help students build drafting, argument, and courtroom skills.'
        },
        {
          q: 'What career opportunities are available after LL.B?',
          a: 'Graduates can pursue advocacy, corporate law, judiciary, academia, legal consulting, or higher studies.'
        }
      ]
    }
  ]

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-xl text-sm text-gray-600 md:text-base">
            Common questions about admissions, academics, legal aid, internships, and moot court at Jadhavar College of
            Law.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={section.section}>
              <h3 className="mb-4 text-center text-xl font-bold md:text-2xl">{section.section}</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {section.questions.map((faq, index) => {
                  const globalIndex = `${sectionIndex}-${index}`
                  const isOpen = openIndex === globalIndex

                  return (
                    <div key={globalIndex} className="rounded-md border border-gray-200 bg-white">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="text-sm font-semibold text-gray-900 md:text-base">
                          Q{index + 1}. {faq.q}
                        </span>
                        {isOpen ? (
                          <Minus className="h-5 w-5 flex-shrink-0 text-blue-700" />
                        ) : (
                          <Plus className="h-5 w-5 flex-shrink-0 text-blue-700" />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-48 px-4 pb-4' : 'max-h-0 px-4'
                        }`}
                      >
                        <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
