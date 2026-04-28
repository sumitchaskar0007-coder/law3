import React, { useState, useEffect } from 'react';
import { careerAPI } from '../api';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [filters, setFilters] = useState({
    department: 'all',
    location: 'all'
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await careerAPI.getAll();
      console.log('Public careers fetched:', response.data);
      setCareers(response.data.data || []);
    } catch (error) {
      console.error('Error fetching public careers:', error);
      setError('Failed to load careers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Extract unique departments and locations from active careers
  const departments = ['all', ...new Set(
    careers
      .filter(career => career.isActive && new Date(career.applicationDeadline) >= new Date())
      .map(career => career.department)
      .filter(Boolean)
  )];

  const locations = ['all', ...new Set(
    careers
      .filter(career => career.isActive && new Date(career.applicationDeadline) >= new Date())
      .map(career => career.location)
      .filter(Boolean)
  )];

  // Filter careers for public view
  const filteredCareers = careers.filter(career => {
    if (!career.isActive) return false;
    if (new Date(career.applicationDeadline) < new Date()) return false;
    
    const departmentMatch = filters.department === 'all' || career.department === filters.department;
    const locationMatch = filters.location === 'all' || career.location === filters.location;
    
    return departmentMatch && locationMatch;
  });

  const handleApply = (career) => {
    // This would typically open an application form or redirect
    console.log('Apply for:', career.position);
    alert(`Application for ${career.position} would open here.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading careers...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl opacity-90">
            Discover exciting career opportunities and grow with us
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
<<<<<<< HEAD
        {/* Career Opportunities */}
        <section className="mb-12 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities after 3-Year LL.B.</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A 3-Year LL.B. degree opens diverse career pathways across litigation, corporate sectors, judiciary, academia, and public service. Graduates acquire strong analytical, drafting, and advocacy skills, enabling them to pursue the following professional avenues:
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold">1. Advocate (Litigation Practice)</h3>
              <p className="mt-2">
                Graduates may enroll with the respective State Bar Council under the Bar Council of India and practice before courts as independent advocates or under senior counsel. Practice areas include civil, criminal, constitutional, corporate, and family law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2. Judicial Services (Judge/Magistrate)</h3>
              <p className="mt-2">
                Candidates may appear for Judicial Service Examinations conducted by State Public Service Commissions to become:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Civil Judge (Junior Division)</li>
                <li>Judicial Magistrate</li>
              </ul>
              <p className="mt-2">
                This is a prestigious career offering judicial authority and public service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">3. Corporate Legal Advisor</h3>
              <p className="mt-2">
                Law graduates can work with companies as in-house legal counsel, handling:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Contracts and agreements</li>
                <li>Compliance and regulatory matters</li>
                <li>Corporate governance</li>
              </ul>
              <p className="mt-2">
                Opportunities exist in multinational corporations, banks, and startups.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">4. Public Prosecutor / Government Advocate</h3>
              <p className="mt-2">
                After gaining requisite experience, candidates may serve as Public Prosecutors or Government Pleaders, representing the State in legal proceedings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">5. Legal Officer in Government Sector</h3>
              <p className="mt-2">
                Various government bodies, PSUs, and regulatory authorities recruit law graduates for legal positions through competitive examinations and direct recruitment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">6. Higher Education & Academia</h3>
              <p className="mt-2">
                Graduates may pursue:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>LL.M. (Master of Laws)</li>
                <li>UGC-NET / SET</li>
              </ul>
              <p className="mt-2">
                This opens career paths as Assistant Professors, Researchers, and Legal Scholars.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">7. Alternative Dispute Resolution (ADR)</h3>
              <p className="mt-2">
                With additional certification, candidates can work as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Arbitrators</li>
                <li>Mediators</li>
                <li>Conciliators</li>
              </ul>
              <p className="mt-2">
                ADR is a growing field focusing on out-of-court dispute resolution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">8. Legal Process Outsourcing (LPO) & Compliance Roles</h3>
              <p className="mt-2">
                Law graduates can work in LPO firms dealing with:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Legal drafting</li>
                <li>Contract management</li>
                <li>Due diligence</li>
                <li>Compliance and risk management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">9. Non-Governmental Organizations (NGOs)</h3>
              <p className="mt-2">
                Opportunities exist in NGOs working in areas such as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Human rights</li>
                <li>Environmental law</li>
                <li>Women and child rights</li>
                <li>Legal aid and social justice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">10. Competitive Examinations & Public Services</h3>
              <p className="mt-2">
                Law graduates are eligible for various competitive exams such as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>UPSC (Civil Services)</li>
                <li>State Public Service Commissions</li>
                <li>Banking and regulatory bodies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">11. Legal Journalism & Policy Making</h3>
              <p className="mt-2">
                Graduates interested in writing and policy can work in:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Legal journalism</li>
                <li>Policy research organizations</li>
                <li>Think tanks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">12. Company Secretary (CS) / Compliance Professional</h3>
              <p className="mt-2">
                Law graduates can pursue professional qualifications like Company Secretary (CS) and work in corporate compliance and governance roles.
              </p>
            </div>
          </div>
        </section>

=======
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
        {/* Stats */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {filteredCareers.length} Open Positions
          </h2>
          <p className="text-gray-600">
            Find the perfect role for your skills and aspirations
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Department
              </label>
              <select
                value={filters.department}
                onChange={(e) => setFilters({...filters, department: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        {filteredCareers.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500 text-lg mb-4">
              No open positions found matching your criteria.
            </div>
            <p className="text-gray-400">
              Please check back later or try different filters.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredCareers.map((career) => (
              <div key={career._id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {career.position}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {career.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {career.location}
                        </span>
                        {career.experienceRequired && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {career.experienceRequired}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <button
                        onClick={() => handleApply(career)}
                        className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                        Apply by: {new Date(career.applicationDeadline).toLocaleDateString()}
                      </span>
                    </div>
                    {career.salaryRange && (career.salaryRange.min || career.salaryRange.max) && (
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          {career.salaryRange.min && `$${career.salaryRange.min.toLocaleString()}`}
                          {career.salaryRange.min && career.salaryRange.max && ' - '}
                          {career.salaryRange.max && `$${career.salaryRange.max.toLocaleString()}`}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description Preview */}
                  <div className="mb-6">
                    <p className="text-gray-700 line-clamp-3">
                      {career.description}
                    </p>
                  </div>

                  {/* View Details Button */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <button
                      onClick={() => setSelectedCareer(
                        selectedCareer?._id === career._id ? null : career
                      )}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      {selectedCareer?._id === career._id ? (
                        <>
                          <span>Hide Details</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Detailed View */}
                  {selectedCareer?._id === career._id && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="prose max-w-none">
                        {/* Full Description */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Job Description</h3>
                          <div className="text-gray-700 whitespace-pre-line">
                            {career.description}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Responsibilities</h3>
                          <ul className="space-y-2">
                            {career.responsibilities.map((responsibility, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Requirements</h3>
                          <ul className="space-y-2">
                            {career.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Button */}
                        <div className="text-center">
                          <button
                            onClick={() => handleApply(career)}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                          >
                            Apply for this Position
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-lg font-bold text-blue-800 mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-blue-700 mb-4">
            Send us your resume anyway! We're always looking for talented individuals.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit General Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;