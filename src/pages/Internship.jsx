import React, { useState } from "react";

const sections = [
    {
        id: "about",
        title: "About the Cell",
        subsections: [
            {
                label: "Overview",
                points: [
                    "The Internship & Placement Cell of Jadhavar College of Law, Pune serves as a bridge between legal education and professional opportunities.",
                    "Committed to enhancing the employability, practical skills, and career prospects of students by facilitating internships, placements, training programs, and interactions with legal professionals.",
                ],
            },
            {
                label: "Practical Exposure",
                points: [
                    "Provides students with opportunities to gain practical exposure through internships with advocates, law firms, corporate legal departments, courts, NGOs, government organizations, and legal aid institutions.",
                    "Assists students in securing suitable employment opportunities upon completion of their academic programs.",
                ],
            },
        ],
    },
    {
        id: "vision-mission",
        title: "Vision & Mission",
        subsections: [
            {
                label: "Vision",
                points: [
                    "To create competent, ethical, and professionally skilled legal professionals capable of contributing effectively to the legal system and society.",
                ],
            },
            {
                label: "Mission",
                points: [
                    "To facilitate meaningful internship opportunities for students.",
                    "To provide career guidance and placement assistance.",
                    "To develop professional and employability skills among students.",
                    "To promote experiential learning and industry-academia interaction.",
                ],
            },
        ],
    },
    {
        id: "objectives",
        title: "Objectives",
        subsections: [
            {
                label: "Core Objectives",
                points: [
                    "To provide internship opportunities to all eligible students.",
                    "To assist students in obtaining placements in legal and allied sectors.",
                    "To organize career guidance programs, workshops, and training sessions.",
                    "To develop advocacy, drafting, research, and communication skills.",
                    "To maintain collaboration with law firms, courts, companies, and government agencies.",
                    "To prepare students for professional challenges through practical exposure.",
                ],
            },
        ],
    },
    {
        id: "composition",
        title: "Cell Composition",
        subsections: [
            {
                label: "Patron",
                points: [
                    "Prin. Dr. Sudhakarrao Jadhavar — Chairman, Jadhavar Group of Institutes.",
                ],
            },
            {
                label: "President",
                points: [
                    "Adv. Shardulrao Sudhakarrao Jadhavar — President, Jadhavar Group of Institutes.",
                ],
            },
            {
                label: "Chairperson",
                points: ["Dr. Sapna Sukrut Deo — Principal, Jadhavar College of Law, Pune."],
            },
            {
                label: "Coordinator",
                points: ["Ms. Sifa Inamdar — Assistant Professor, Jadhavar College of Law."],
            },
            {
                label: "Faculty Members",
                points: ["Ms. Namrata Pandey", "Ms. Pooja Kadam", "Mr. Ravi Kadam"],
            },
            {
                label: "Student Representatives",
                points: ["To be nominated from LL.B. and B.A. LLB Programmes."],
            },
        ],
    },
    {
        id: "roles",
        title: "Roles & Responsibilities",
        subsections: [
            {
                label: "Chairperson",
                points: [
                    "Provide overall guidance and leadership to the Cell.",
                    "Approve internship and placement policies.",
                    "Facilitate institutional collaborations and partnerships.",
                    "Review Cell activities and outcomes.",
                ],
            },
            {
                label: "Coordinator",
                points: [
                    "Plan and coordinate all Cell activities.",
                    "Establish contact with law firms, advocates, courts, corporate organizations, and recruiters.",
                    "Maintain internship and placement records.",
                    "Organize placement drives, career guidance programmes, and training sessions.",
                    "Monitor student participation and performance.",
                ],
            },
            {
                label: "Faculty Members",
                points: [
                    "Mentor students regarding internships and career opportunities.",
                    "Assist in organizing workshops, seminars, and placement activities.",
                    "Guide students in resume preparation and interview skills.",
                    "Support industry and institutional outreach initiatives.",
                ],
            },
            {
                label: "Student Representatives",
                points: [
                    "Act as a liaison between students and the Cell.",
                    "Disseminate information regarding internships and placements.",
                    "Assist in organizing Cell activities and events.",
                    "Encourage student participation in career development programmes.",
                ],
            },
        ],
    },
    {
        id: "functions",
        title: "Functions of the Cell",
        subsections: [
            {
                label: " Internship & Placement Assistance",
                points: [
                    "Facilitate internships for students with legal and allied organizations.",
                    "Maintain a database of employers and internship providers.",
                    "Conduct placement drives and recruitment activities.",
                    "Organize career counselling and professional development programmes.",
                    "Develop industry-academia linkages.",
                    "Encourage students to participate in skill enhancement programmes.",
                    "Maintain records of internships, placements, and career progression.",
                    "Promote professional ethics and workplace readiness.",
                ],
            },
            {
                label: " Career Counselling and Guidance",
                points: [
                    "Weekly counselling sessions providing insights into career opportunities, higher education options, industry expectations, and skill development.",
                    "Monthly activities with active student participation: career talks, workshops, mock interviews, group discussions, aptitude training, resume-building exercises, and interactions with industry professionals.",
                ],
            },
            {
                label: " Training and Group Activities",
                points: [
                    "Aptitude training, soft skills development, and communication workshops.",
                    "Resume building, group discussions, mock interviews, and industry-oriented sessions to prepare students for successful careers.",
                ],
            },
            {
                label: " Resume Writing",
                points: [
                    "Workshops to help students prepare professional and impactful resumes that effectively highlight their skills, achievements, and career aspirations.",
                ],
            },
            {
                label: " Interview Skills",
                points: [
                    "Training provided before placement drives and on request to help students build confidence, improve communication, and prepare for personal and technical interviews.",
                ],
            },
            {
                label: " Professional Communication",
                points: [
                    "Training sessions to help students develop effective verbal, written, and interpersonal communication skills required in the workplace.",
                ],
            },
        ],
    },
    {
        id: "internship-opportunities",
        title: "Internship & Placement Opportunities",
        subsections: [
            {
                label: "Objectives of Internship",
                points: [
                    "To provide practical exposure to legal practice and professional environments.",
                    "To develop legal research, drafting, and analytical skills.",
                    "To understand the functioning of courts, law firms, corporate legal departments, NGOs, and government agencies.",
                    "To bridge the gap between theoretical knowledge and practical application.",
                    "To enhance professional competence and employability.",
                ],
            },
            {
                label: "Approved Internship Organizations",
                points: [
                    "Advocates and Senior Advocates",
                    "Law Firms",
                    "District Courts and High Courts",
                    "Corporate Legal Departments",
                    "Public Prosecutor Offices",
                    "Government Departments",
                    "NGOs and Legal Aid Organizations",
                    "Arbitration and Mediation Centres",
                    "Human Rights Commissions",
                    "Consumer Forums and Tribunals",
                    "Regulatory Authorities and Commissions",
                    "Research Institutions and Think Tanks",
                ],
            },
            {
                label: "Outcomes at End of Internship",
                points: [
                    "Understand the practical functioning of legal institutions.",
                    "Apply legal principles in real-life situations.",
                    "Develop legal drafting and research skills.",
                    "Improve communication and professional etiquette.",
                    "Gain exposure to diverse career opportunities in law.",
                    "Enhance professional confidence and workplace readiness.",
                ],
            },
            {
                label: "Placement Opportunities — Goals",
                points: [
                    "To provide placement opportunities to eligible students.",
                    "To connect students with law firms, advocates, corporate organizations, and government agencies.",
                    "To prepare students for professional recruitment processes.",
                    "To promote career development and employability skills.",
                    "To facilitate industry-academia collaboration.",
                ],
            },
        ],
    },
    {
        id: "collaborations",
        title: "Industry / Law Firm / Advocate Collaborations",
        subsections: [
            {
                label: "Collaborating Organizations",
                points: [
                    "Law Firms",
                    "Chambers of Advocates",
                    "Corporate Legal Departments",
                    "Public Prosecutor Offices",
                    "Legal Aid Authorities",
                    "Arbitration and Mediation Centres",
                    "NGOs and Social Organizations",
                    "Government Departments",
                    "Research Institutions",
                    "Professional Bodies and Associations",
                ],
            },
            {
                label: "Purpose",
                points: [
                    "Facilitates internships, placements, training programmes, and experiential learning opportunities for students.",
                ],
            },
        ],
    },
    {
        id: "student-registration",
        title: "Student Registration & Employer Registration Forms",
        subsections: [
            {
                label: "Student Registration Procedure",
                points: [
                    "Students shall thoroughly read and understand the Placement Policy and Student Placement Procedure available on the website.",
                    "Compliance with the guidelines and procedures is mandatory for participation in placement activities.",
                    "The form shall be available in PHYSICAL format with the Placement Cell — students are advised to visit during office hours.",
                ],
            },
            {
                label: "Student Responsibilities",
                points: [
                    "Maintain professional conduct at all times.",
                    "Provide accurate information in resumes and applications.",
                    "Attend interviews and selection processes punctually.",
                    "Inform the Cell regarding acceptance of offers.",
                    "Respect the recruitment policies of employers.",
                ],
            },
            {
                label: "Employer / Recruiter Registration Form",
                points: [
                    "Recruiters are requested to fill the form and submit a copy via email: Placmentjadhavar@gmail.com",

                ],
            },
        ],
    },
    {
        id: "internship-policy",
        title: "Internship Policy & Guidelines",
        subsections: [
            {
                label: " Internship Policy",
                points: [
                    "Students shall obtain prior approval from the Internship & Placement Cell before commencing the internship.",
                    "Students must maintain discipline, punctuality, and professional conduct throughout the internship period.",
                    "Students shall comply with the rules and regulations of the host organization.",
                    "Confidential information obtained during the internship shall not be disclosed.",
                    "Students must actively participate in assigned tasks and learning activities.",
                    "Attendance and performance during the internship shall be monitored.",
                    "Any misconduct may result in cancellation of internship recognition by the College.",
                    "Students shall submit the Internship Report at the beginning of the academic session or at the end of the internship period via the placement cell.",
                ],
            },
        ],
    },
    {
        id: "placement-policy",
        title: "Placement Policy & Guidelines",
        subsections: [
            {
                label: "A. Placement Policy",
                points: [
                    "Committed to facilitating career opportunities through a transparent, fair, and merit-based placement process.",
                    "Acts as a facilitator between prospective employers and students, creating opportunities in litigation, corporate law, legal consultancy, compliance, legal research, public service, and allied sectors.",
                ],
            },
            {
                label: "Eligibility for Placement",
                points: [
                    "Must be enrolled in the final year of LL.B. (3-Year) or B.A. LL.B. (5-Year) Programme.",
                    "Have completed the prescribed academic requirements.",
                    "Maintain satisfactory attendance and discipline.",
                    "Register with the Internship & Placement Cell.",
                    "Submit updated resume and supporting documents.",
                    "Has completed Student Registration Procedure.",
                ],
            },
            {
                label: "B. Recruitment Process",
                points: [
                    "Stage 1 — Vacancy Notification: Cell receives and circulates placement opportunities from law firms, corporates, legal consultancies, public sector organizations, NGOs, government departments, and chambers of advocates.",
                    "Stage 2 — Application Screening: Recruiters review and shortlist applications based on records with the placement cell; students must keep resumes updated.",
                    "Stage 3 — Assessment Process: May include Resume Screening, Written Test, Legal Aptitude Test, Drafting Assessment, Group Discussion, Personal Interview, and Technical/Subject Interview.",
                    "Stage 4 — Final Selection: Recruiter communicates the final selected candidates list within 30 days of the final interview.",
                    "Stage 5 — Placement Record: Cell maintains records of successful candidates and assists with joining formalities.",
                ],
            },
            {
                label: "C. Student Placement Procedure",
                points: [
                    "Step 1 — Registration: Submit Placement Registration Form, updated Resume/CV, Academic Records, Internship Details, and Skill Development Certificates (if any).",
                    "Step 2 — Verification: The Cell verifies submitted documents and keeps records.",
                    "Step 3 — Database Inclusion: Eligible students are included in the Placement Database.",
                    "Step 4 — Application for Opportunities: Students may apply for available internship and placement opportunities communicated by the Cell.",
                ],
            },
        ],
    },
    {
        id: "activities",
        title: "Activities",
        subsections: [
            {
                label: "Overview",
                points: [
                    "Dedicated to supporting students in achieving professional aspirations through guidance, opportunities, and continuous career development support.",
                    "Provides guidance regarding careers in litigation, judiciary, corporate law, public prosecution, legal research, compliance management, alternative dispute resolution, academia, and civil services.",
                ],
            },
            {
                label: "Internship Opportunities",
                points: [
                    "Advocates and Senior Counsels",
                    "Law Firms",
                    "District and High Courts",
                    "Corporate Legal Departments",
                    "Public Prosecutor Offices",
                    "NGOs and Social Organizations",
                    "Government Departments",
                    "Legal Aid Authorities",
                    "Arbitration and Mediation Centres",
                ],
            },
            {
                label: "Placement Support — Career Areas",
                points: [
                    "Litigation Practice",
                    "Corporate Law",
                    "Legal Process Outsourcing (LPO)",
                    "Banking and Financial Institutions",
                    "Compliance and Regulatory Affairs",
                    "Human Resource and Labour Law Departments",
                    "Legal Research Organizations",
                    "NGOs and Public Interest Litigation",
                    "Judiciary and Public Prosecution Services",
                ],
            },
            {
                label: "Career Guidance Activities",
                points: [
                    "Career Counselling Sessions",
                    "Legal Profession Orientation Programmes",
                    "Judicial Services Examination Guidance",
                    "Public Prosecutor Examination Guidance",
                    "Corporate Career Awareness Sessions",
                    "Higher Education and Research Guidance",
                    "Civil Services Career Guidance",
                    "Alumni Interaction Programmes",
                    "Professional Networking Sessions",
                    "Skill Development Workshops",
                ],
            },
            {
                label: "Skill Development Programmes",
                points: [
                    "Legal Research and Writing",
                    "Legal Drafting and Documentation",
                    "Advocacy and Moot Court Skills",
                    "Client Counselling and Negotiation",
                    "Mediation and Arbitration",
                    "Resume Building and Interview Preparation",
                    "Communication and Professional Etiquette",
                    "Leadership and Teamwork",
                    "Time Management and Professional Ethics",
                ],
            },
            {
                label: "Industry & Professional Collaborations",
                points: [
                    "Law Firms, Chambers of Advocates, Corporate Legal Departments, Public Prosecutor Offices.",
                    "Legal Aid Authorities, Arbitration and Mediation Centres, NGOs, Government Departments.",
                    "Research Institutions, Professional Bodies and Associations.",
                ],
            },
            {
                label: "Guest Lectures & Expert Sessions — Key Areas",
                points: [
                    "Emerging Areas of Law",
                    "Career Opportunities in the Legal Profession",
                    "Corporate Legal Practice",
                    "Intellectual Property Rights",
                    "Cyber Law",
                    "Alternative Dispute Resolution",
                    "Professional Ethics and Responsibility",
                    "Entrepreneurship in Legal Services",
                ],
            },
            {
                label: "Expected Outcomes",
                points: [
                    "Develop professional competence and confidence among students.",
                    "Enhance legal knowledge and practical skills.",
                    "Improve employability and career readiness.",
                    "Build professional networks and industry connections.",
                    "Provide exposure to contemporary legal and professional developments.",
                ],
            },
        ],
    },
    {
        id: "reports",
        title: "Reports",
        subsections: [
            {
                label: "Internship Programme Overview",
                points: [
                    "Provides practical exposure to the legal profession, supplementing classroom learning with real-world experience.",
                    "Students gain insight into legal procedures, professional ethics, client interaction, drafting, research methodologies, and institutional functioning.",
                    "Internships undertaken during semester breaks as per regulatory and College requirements.",
                ],
            },
            {
                label: "Required Documents",
                points: [
                    "Complete Internship Report",
                    "Internship Completion Certificate",
                    "Attendance Certificate (if applicable)",
                    "Daily Work Diary / Log Book",
                    "Supervisor Evaluation Form (if applicable)",
                ],
            },
            {
                label: "Format of Internship Report",
                points: [
                    "Cover Page",
                    "Certificate of Internship with duration",
                    "Acknowledgement",
                    "Introduction of the Organization",
                    "Objectives of Internship",
                    "Nature of Work Assigned",
                    "Learning Outcomes",
                    "Practical Exposure Gained",
                    "Observations and Reflections",
                    "Conclusion",
                    "Annexures (if any)",
                ],
            },
        ],
    },
    {
        id: "notices",
        title: "Notices, Announcements & Photo Gallery",
        subsections: [
            {
                label: "Regular Updates Cover",
                points: [
                    "Internship Opportunities",
                    "Placement Opportunities",
                    "Training Programmes",
                    "Workshops and Seminars",
                    "Guest Lectures",
                    "Career Guidance Sessions",
                    "Registration Deadlines",
                    "Recruitment Drives",
                    "Professional Development Activities",
                ],
            },
            {
                label: "Photo Gallery",
                points: [
                    "Snapshots from career guidance sessions, workshops, guest lectures, and placement drives.",
                ],
            },
        ],
    },
    {
        id: "contact",
        title: "Contact Details & Cell Coordinator",
        subsections: [
            {
                label: "Coordinator",
                points: ["Ms. Sifa Inamdar, Assistant Professor, Jadhavar College of Law."],
            },
            {
                label: "Email",
                points: ["Placmentjadhavar@gmail.com (for recruiter registration and queries)."],
            },
        ],
    },
];

export default function Internship() {
    const [active, setActive] = useState(sections[0].id);
    const activeSection = sections.find((s) => s.id === active);
    const activeIndex = sections.findIndex((s) => s.id === active);

    return (
        <div className="min-h-screen bg-blue-50 text-slate-800 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-blue-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold">
                        Jadhavar College of Law, Pune
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                        Internship &amp; Placement Cell
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Bridging legal education and professional opportunity
                    </p>
                </div>
            </header>

            <div className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-6 flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <aside className="md:w-72 flex-shrink-0">
                    <div className="bg-white rounded-xl border border-blue-100 shadow-sm sticky top-6 overflow-hidden">
                        <div className="bg-blue-500 px-4 py-3">
                            <h2 className="text-white font-semibold text-sm uppercase tracking-wide">
                                Index
                            </h2>
                        </div>
                        <nav className="max-h-[70vh] overflow-y-auto">
                            <ul className="divide-y divide-blue-50">
                                {sections.map((s, i) => (
                                    <li key={s.id}>
                                        <button
                                            onClick={() => setActive(s.id)}
                                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-start gap-2 ${active === s.id
                                                ? "bg-blue-100 text-blue-800 font-semibold border-l-4 border-blue-500"
                                                : "text-slate-600 hover:bg-blue-50 border-l-4 border-transparent"
                                                }`}
                                        >
                                            <span className="text-blue-400 font-mono text-xs mt-0.5">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span>{s.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1">
                    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500 text-white font-bold text-sm">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                                {activeSection.title}
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {activeSection.subsections.map((sub, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="border border-blue-100 rounded-lg p-4 md:p-5 bg-blue-50/40"
                                >
                                    <h3 className="text-sm md:text-base font-semibold text-blue-800 mb-3">
                                        {sub.label}
                                    </h3>
                                    <ul className="space-y-2">
                                        {sub.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                                            >
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* <footer className="bg-white border-t border-blue-100 text-center text-xs text-slate-400 py-4">
                © Jadhavar College of Law, Pune — Internship &amp; Placement Cell
            </footer> */}
        </div>
    );
}