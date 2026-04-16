import React from "react";
import {
  MapPin,
  Building2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  School,
  Scale,
} from "lucide-react";

export default function GlimpseLawCollege() {
  return (
    <section className="w-full py-10 px-6 bg-[#1f3c88] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Glimpse @ Jadhavar Law College
        </h2>

        <p className="text-center max-w-4xl mx-auto text-xs text-white/90 mb-8">
          Jadhavar College of Law, Pune, under the Jadhavar Group of Institutes,
          offers a 3 Years LL.B. program focused on legal knowledge, ethics, and
          professional excellence.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <InfoCard
            icon={<MapPin />}
            title="Location"
            desc="Located in Pune – India’s education & judicial hub"
          />

          <InfoCard
            icon={<Building2 />}
            title="Court Exposure"
            desc="Court visits, internships & legal training"
          />

          <InfoCard
            icon={<BookOpen />}
            title="Beyond Academics"
            desc="Moot courts, debates & seminars"
          />

          <InfoCard
            icon={<GraduationCap />}
            title="Programs Offered"
            desc="BCI-approved 3 Years LL.B."
          />

          <InfoCard
            icon={<Briefcase />}
            title="Legal Connect"
            desc="Interaction with judges & advocates"
          />

          <InfoCard
            icon={<Users />}
            title="Faculty"
            desc="Experienced academicians & professionals"
          />

          <InfoCard
            icon={<Award />}
            title="Legacy"
            desc="Trusted name in legal education"
          />

          <InfoCard
            icon={<School />}
            title="Facilities"
            desc="Library, digital resources & classrooms"
          />

          <InfoCard
            icon={<Scale />}
            title="Values"
            desc="Justice, ethics & leadership"
          />
        </div>

        {/* Footer Line */}
        <p className="text-center mt-8 text-xs text-white/90">
          Jadhavar Law College builds ethical, skilled, and future-ready legal professionals.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SMALL CARD COMPONENT ---------------- */

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-white text-gray-800 rounded-md p-3 shadow-sm hover:shadow-md transition">
      <div className="mb-2 text-[#1f3c88]">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-[11px] text-gray-600 leading-snug">{desc}</p>
    </div>
  );
}
