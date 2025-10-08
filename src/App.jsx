import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { resumeData } from "./data";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
        {/* Header */}
        {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-6 print:py-4">
          <h1 className="text-3xl font-bold mb-2 print:text-2xl">
            {resumeData.personalInfo.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm print:text-xs">
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{resumeData.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{resumeData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{resumeData.personalInfo.location}</span>
            </div>
          </div>
        </div> */}

        {/* Header */}
        {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-6 print:py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-1 print:text-2xl">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-lg text-blue-100 print:text-base">
                {resumeData.personalInfo.title}
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm print:text-xs text-right">
              <div className="flex items-center justify-end gap-2">
                <span>{resumeData.personalInfo.email}</span>
                <Mail size={14} />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>{resumeData.personalInfo.phone}</span>
                <Phone size={14} />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>{resumeData.personalInfo.location}</span>
                <MapPin size={14} />
              </div>
            </div>
          </div>
        </div> */}

        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-200 via-white to-blue-200 px-8 py-8 print:py-6 overflow-hidden">
          {/* Decorative overlay pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-900/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-900/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex justify-between items-start">
            <div className="flex items-center gap-6">
              {/* <img
                src="/ananthi-resume/public/profile.jpeg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-900 shadow-md print:w-20 print:h-20"
              /> */}
              <div>
                <h1 className="text-6xl font-bold text-gray-900 mb-2 print:text-3xl">
                  {resumeData.personalInfo.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-blue-900"></div>
                  <p className="text-2xl text-blue-900 font-medium print:text-lg">
                    {resumeData.personalInfo.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm print:text-xs bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={14} className="text-blue-900" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={14} className="text-blue-900" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={14} className="text-blue-900" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Linkedin size={14} className="text-blue-900" />
                <span>{resumeData.personalInfo.linkedin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-6 print:py-4">
          {/* Professional Summary */}
          <section className="mb-6 print:mb-4">
            <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3 print:text-lg print:mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed print:text-xs">
              {resumeData.summary}
            </p>
            <p className="text-gray-600 text-sm mt-2 italic print:text-xs print:mt-1">
              {resumeData.experienceSummary}
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6 print:mb-4">
            <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3 print:text-lg print:mb-2">
              Work Experience
            </h2>
            {resumeData.workExperience.map((job, index) => (
              <div key={index} className="mb-4 print:mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-800 print:text-sm">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-600 print:text-xs">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-blue-800 mb-2 print:text-xs print:mb-1">
                  {job.company}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 print:text-xs print:space-y-0">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 print:grid-cols-2 print:gap-4 print:mb-4">
            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3 print:text-lg print:mb-2">
                Education
              </h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-3 print:mb-2">
                  <h3 className="font-bold text-gray-800 text-sm print:text-xs">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-600 print:text-xs">
                    {edu.institution}
                  </p>
                  {edu.specialization && (
                    <p className="text-xs text-gray-500 italic print:text-xs">
                      {edu.specialization}
                    </p>
                  )}
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3 print:text-lg print:mb-2">
                Certifications
              </h2>
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="mb-3 print:mb-2">
                  <h3 className="font-bold text-gray-800 text-sm print:text-xs">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-500 print:text-xs">
                    {cert.date}
                  </p>
                  <p className="text-xs text-gray-600 print:text-xs">
                    {cert.description}
                  </p>
                </div>
              ))}
            </section>
          </div>

          {/* Awards */}
          <section>
            <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3 print:text-lg print:mb-2">
              Awards & Recognition
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 print:text-xs print:space-y-0">
              {resumeData.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
