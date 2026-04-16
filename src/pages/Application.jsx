import React, { useState } from 'react';
import { admissionAPI } from '../api';
import './Application.css';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Course Details
    academicYear: { from: '', to: '' },
    courseApplied: '',
    medium: 'English',

    // Personal Details
    surname: '',
    firstName: '',
    middleName: '', // Added middle name
    lastName: '', // Added last name
    fathersName: '',
    nameInDevnagari: '',
    mothersName: '',
    sex: '',
    nameChange: '',
    dateOfBirth: '',
    maritalStatus: 'Unmarried',
    bloodGroup: '',
    motherTongue: '',
    nationality: 'INDIAN',
    religion: '',
    maharashtrian: 'Maharashtrian',
    aadharCardNo: '',
    cast: '',
    category: '',
    subCategory: '', // Added sub-category
    belongsToCreamyLayer: 'No',
    otherLanguages: '',

    // Address
    presentAddress: '',
    presentPincode: '',
    permanentAddress: '',
    permanentPincode: '',

    // Contact
    studentContact: '',
    phone1: '',
    phone2: '',
    email: '',

    // Academic
    subjectsOffered: '',
    lastCollegeName: '',
    lastCollegeAddress: '',
    academicRecords: [
      { srNo: 1, examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { srNo: 2, examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { srNo: 3, examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { srNo: 4, examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' },
      { srNo: 5, examination: '', boardUniversity: '', yearOfPassing: '', percentage: '' }
    ],

    // Undertaking - Fees
    feesUndertaking: {
      parentGuardianName: '',
      studentName: '',
      studentFatherName: '',
      admissionCourse: '',
      agreeFees: false
    },

    // Undertaking - Attendance
    attendanceUndertaking: {
      studentName: '',
      fathersName: '',
      studyingClass: '',
      branch: '',
      rollNo: '',
      agreeAttendance: false
    },

    // Documents
    documentsSubmitted: {
      gradCertificate: false,
      tenthMarklist: false,
      twelfthMarklist: false,
      leavingCertificate: false,
      migrationCertificate: false,
      gapAffidavit: false,
      passportPhotos: false,
      casteCertificate: false,
      marriageCertificate: false,
      aadharCard: false
    },

    // Fees Payment
    feesPayment: {
      totalFees: '',
      registrationFees: '',
      installments: [
        { amount: '', dueDate: '' },
        { amount: '', dueDate: '' },
        { amount: '', dueDate: '' },
        { amount: '', dueDate: '' },
        { amount: '', dueDate: '' }
      ]
    },

    // Signatures
    studentSignature: '',
    parentSignature: '',
    applicationDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Steps configuration
  const steps = [
    { number: 1, name: 'Personal', icon: '👤' },
    { number: 2, name: 'Address', icon: '📍' },
    { number: 3, name: 'Education', icon: '📚' },
    { number: 4, name: 'Documents', icon: '📄' },
    { number: 5, name: 'Declaration', icon: '✍️' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle nested objects
    if (name.includes('.')) {
      const [parent, child, grandChild] = name.split('.');
      if (grandChild) {
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: {
              ...prev[parent]?.[child],
              [grandChild]: type === 'checkbox' ? checked : value
            }
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: type === 'checkbox' ? checked : value
          }
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleAcademicRecordChange = (index, field, value) => {
    const updatedRecords = [...formData.academicRecords];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setFormData(prev => ({ ...prev, academicRecords: updatedRecords }));
  };

  const handleInstallmentChange = (index, field, value) => {
    const updatedInstallments = [...formData.feesPayment.installments];
    updatedInstallments[index] = { ...updatedInstallments[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      feesPayment: { ...prev.feesPayment, installments: updatedInstallments }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.studentContact) {
        throw new Error('Please fill in all required fields');
      }

      // Submit to API
      const response = await admissionAPI.submit(formData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully!'
      });

      // Reset form after successful submission
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.error || error.message || 'Failed to submit application'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className="step-header">
        <h2>Admission Application Form</h2>
        <p className="instruction-text">* Please fill in CAPITAL LETTERS only * Write name as per 12th Mark Sheet</p>
      </div>
      <div className="steps-container">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`step-item ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
            onClick={() => setCurrentStep(step.number)}
          >
            <div className="step-icon">
              {currentStep > step.number ? '✓' : step.icon}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonalStep = () => (
    <div className="step-content">
      <h3>Personal Details</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="FIRST NAME"
            className="capital-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="MIDDLE NAME"
            className="capital-input"
          />
        </div>

        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="LAST NAME"
            className="capital-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address <span className="required">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number <span className="required">*</span></label>
          <input
            type="tel"
            name="studentContact"
            value={formData.studentContact}
            onChange={handleChange}
            placeholder="+91 9876543210"
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label>Alternate Phone</label>
          <input
            type="tel"
            name="phone1"
            value={formData.phone1}
            onChange={handleChange}
            placeholder="+91 9876543210"
            pattern="[0-9]{10}"
          />
        </div>

        <div className="form-group">
          <label>Date of Birth <span className="required">*</span></label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender <span className="required">*</span></label>
          <select name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Blood Group</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            placeholder="INDIAN"
            className="capital-input"
          />
        </div>

        <div className="form-group">
          <label>Religion</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            placeholder="RELIGION"
            className="capital-input"
          />
        </div>

        <div className="form-group">
          <label>Category <span className="required">*</span></label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="NT">NT</option>
            <option value="SBC">SBC</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sub-Category</label>
          <input
            type="text"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            placeholder="SUB-CATEGORY"
            className="capital-input"
          />
        </div>
      </div>
    </div>
  );

  const renderAddressStep = () => (
    <div className="step-content">
      <h3>Address Details</h3>
      
      <div className="form-grid">
        <div className="form-group full-width">
          <label>Present Address</label>
          <textarea
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            rows="3"
            placeholder="Enter your present address"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="presentPincode"
            value={formData.presentPincode}
            onChange={handleChange}
            pattern="[0-9]{6}"
            placeholder="6 digit pincode"
          />
        </div>

        <div className="form-group full-width">
          <label>Permanent Address</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            rows="3"
            placeholder="Enter your permanent address"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="permanentPincode"
            value={formData.permanentPincode}
            onChange={handleChange}
            pattern="[0-9]{6}"
            placeholder="6 digit pincode"
          />
        </div>
      </div>
    </div>
  );

  const renderEducationStep = () => (
    <div className="step-content">
      <h3>Educational Details</h3>
      
      <div className="form-grid">
        <div className="form-group full-width">
          <label>Course Applied For</label>
          <input
            type="text"
            name="courseApplied"
            value={formData.courseApplied}
            onChange={handleChange}
            placeholder="COURSE NAME"
            className="capital-input"
          />
        </div>

        <div className="form-group">
          <label>Medium</label>
          <select name="medium" value={formData.medium} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Marathi">Marathi</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Subjects Offered</label>
          <input
            type="text"
            name="subjectsOffered"
            value={formData.subjectsOffered}
            onChange={handleChange}
            placeholder="Enter subjects"
          />
        </div>

        <div className="form-group full-width">
          <label>Last College Name</label>
          <input
            type="text"
            name="lastCollegeName"
            value={formData.lastCollegeName}
            onChange={handleChange}
            placeholder="College Name"
          />
        </div>
      </div>

      <h4>Academic Records</h4>
      <div className="academic-records">
        <table className="academic-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Examination</th>
              <th>Board/University</th>
              <th>Year</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num, index) => (
              <tr key={num}>
                <td>{num}</td>
                <td>
                  <input
                    type="text"
                    value={formData.academicRecords[index]?.examination || ''}
                    onChange={(e) => handleAcademicRecordChange(index, 'examination', e.target.value)}
                    placeholder="e.g., SSC, HSC"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={formData.academicRecords[index]?.boardUniversity || ''}
                    onChange={(e) => handleAcademicRecordChange(index, 'boardUniversity', e.target.value)}
                    placeholder="Board/University"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={formData.academicRecords[index]?.yearOfPassing || ''}
                    onChange={(e) => handleAcademicRecordChange(index, 'yearOfPassing', e.target.value)}
                    placeholder="YYYY"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={formData.academicRecords[index]?.percentage || ''}
                    onChange={(e) => handleAcademicRecordChange(index, 'percentage', e.target.value)}
                    placeholder="%"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDocumentsStep = () => (
    <div className="step-content">
      <h3>Documents Required</h3>
      <p className="document-note">Please check all documents you are submitting</p>
      
      <div className="checkbox-grid">
        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.gradCertificate"
            checked={formData.documentsSubmitted.gradCertificate}
            onChange={handleChange}
          />
          <span>Graduation Certificate</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.tenthMarklist"
            checked={formData.documentsSubmitted.tenthMarklist}
            onChange={handleChange}
          />
          <span>10th Mark Sheet</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.twelfthMarklist"
            checked={formData.documentsSubmitted.twelfthMarklist}
            onChange={handleChange}
          />
          <span>12th Mark Sheet</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.leavingCertificate"
            checked={formData.documentsSubmitted.leavingCertificate}
            onChange={handleChange}
          />
          <span>Leaving Certificate</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.migrationCertificate"
            checked={formData.documentsSubmitted.migrationCertificate}
            onChange={handleChange}
          />
          <span>Migration Certificate</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.gapAffidavit"
            checked={formData.documentsSubmitted.gapAffidavit}
            onChange={handleChange}
          />
          <span>Gap Affidavit (if applicable)</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.passportPhotos"
            checked={formData.documentsSubmitted.passportPhotos}
            onChange={handleChange}
          />
          <span>Passport Size Photos</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.casteCertificate"
            checked={formData.documentsSubmitted.casteCertificate}
            onChange={handleChange}
          />
          <span>Caste Certificate</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.marriageCertificate"
            checked={formData.documentsSubmitted.marriageCertificate}
            onChange={handleChange}
          />
          <span>Marriage Certificate (if applicable)</span>
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            name="documentsSubmitted.aadharCard"
            checked={formData.documentsSubmitted.aadharCard}
            onChange={handleChange}
          />
          <span>Aadhar Card</span>
        </label>
      </div>
    </div>
  );

  const renderDeclarationStep = () => (
    <div className="step-content">
      <h3>Declaration</h3>
      
      <div className="declaration-text">
        <p>• I declare that the information provided in this form is true and complete to the best of my knowledge and belief.</p>
        <p>• I understand that the college reserves the right to verify the information provided and to cancel admission if found incorrect.</p>
        <p>• I acknowledge that the college reserves the right at any stage to cancel admission if any information given by me is found incorrect.</p>
        <p>• I understand that my application will only be assessed when it is complete in every detail and includes all supporting documentation.</p>
        <p>• I am aware of the condition relating to my application and admission. And agree to pay all fees for which I am liable.</p>
        <p>• I have understood & accept the rules and regulations of the college standards and instructions issued from time to time by the management and the Principal of the college.</p>
        <p>• I shall abide by the rules laid by the Principal/Director of the college/institute and shall observe and follow the rules and regulations and discipline.</p>
        <p>• I have read and understood the discipline and code of conduct of the college.</p>
        <p>• I am aware that fees once paid will not be refunded.</p>
      </div>

      <div className="signature-section">
        <div className="form-group">
          <label>Signature of Applicant</label>
          <input
            type="text"
            name="studentSignature"
            value={formData.studentSignature}
            onChange={handleChange}
            placeholder="Type your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Signature of Parent/Guardian</label>
          <input
            type="text"
            name="parentSignature"
            value={formData.parentSignature}
            onChange={handleChange}
            placeholder="Type parent's full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="applicationDate"
            value={formData.applicationDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="application-container">
      <div className="application-wrapper">
        {renderStepIndicator()}

        {submitStatus.message && (
          <div className={`alert alert-${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="application-form">
          {currentStep === 1 && renderPersonalStep()}
          {currentStep === 2 && renderAddressStep()}
          {currentStep === 3 && renderEducationStep()}
          {currentStep === 4 && renderDocumentsStep()}
          {currentStep === 5 && renderDeclarationStep()}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="nav-btn prev-btn">
                ← Previous
              </button>
            )}
            
            {currentStep < steps.length ? (
              <button type="button" onClick={nextStep} className="nav-btn next-btn">
                Next →
              </button>
            ) : (
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;