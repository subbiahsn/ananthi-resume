import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
} from "lucide-react";

// Resume data in JSON format
const resumeData = {
  personalInfo: {
    name: "Ananthi S",
    email: "ananthis47@gmail.com",
    phone: "8438 XXX XXX",
    location: "Chennai",
    linkedin: "linkedin.com/in/ananthis",
    github: "github.com/ananthis",
  },
  summary:
    "A Seasoned Professional with a blend of Tech and HR Expertise, starting as an IT developer and transitioning into Strategic HR roles post-MBA. Proven success in internal staffing, Business Associate hiring, and resource management as an RMG Business Partner. Currently driving senior leadership assessment and mobility (LeaD), with a focus on streamlining end-to-end talent operations.",
  experienceSummary:
    "A total of 9 years of experience with TCS (Tata Consultancy Services) and around 5 years of experience in HR roles. Multiple Location Exposure in TCS: Chennai",
  workExperience: [
    {
      title: "HR Specialist, Leadership Assessments",
      company: "Leadership & Diversity (LeaD), TCS",
      period: "Apr 2023 - Present",
      responsibilities: [
        "Responsible for Leadership Assessments Centre for enablement and acceleration of senior leadership mobility and advancements",
        "Led end-to-end operations and provided in-depth reporting and analytics, driving data-driven decisions",
        "Published timely dashboards and reports, achieving 100% SLA compliance with 80% improvement in turnaround time",
        "Proactive profiling of feeder pool for leadership opportunities across various career streams",
      ],
    },
    {
      title: "RMG Business Partner",
      company: "CBG, TCS",
      period: "Jul 2020 - Sep 2022",
      responsibilities: [
        "Managed workforce of 2000+ across multiple clients (TTH EU&UK, TTH ANZ), achieving 100% adherence to staffing SLAs",
        "Collaborated with Business and Delivery heads in workforce planning, contributing to business growth and revenue generation",
        "Handled end-to-end recruitment and lifecycle management of contract employees, negotiating with vendors to reduce costs",
        "Partnered with HRBPs for resignation reversal and Talent Development team for cross-skilling initiatives",
      ],
    },
    {
      title: "Developer",
      company: "BFSI, TCS",
      period: "Jul 2016 - Jun 2018",
      responsibilities: [
        "Supported code deployment, testing processes and demo video creation",
        "Participated in Big room planning with the client and served as Proxy Scrum Master for offshore team",
      ],
    },
  ],
  education: [
    {
      degree: "PGDM",
      institution: "Thiagarajar School of Management",
      specialization: "Dual Specialization in HR and Marketing",
    },
    {
      degree: "BE - Computer Science",
      institution: "National Engineering College",
    },
  ],
  certifications: [
    {
      name: "Managerial Fundamentals: Foundation Program (Previously ASCENT)",
      date: "Sep 2024",
      description:
        "First-Time Leader Program covering Project management principles, empathy, EI",
    },
    {
      name: "AI Transformation Program for HR",
      date: "Jun 2024",
      description:
        "AI in HR landscape—talent acquisition, employee engagement, workforce analytics",
    },
  ],
  awards: [
    "Awards for Excellence, tcsAI Spark (Aug 2024)",
    "Beyond Performance Awards, Xcelerate Warrior Certificate (Jun 2024)",
    "On the Spot Award (Jul 2021)",
  ],
};

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-6 print:py-4">
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

        {/* Footer note for print */}
        <div className="hidden print:block text-center text-xs text-gray-500 pb-2">
          Use Ctrl+P (Windows) or Cmd+P (Mac) to save as PDF
        </div>
      </div>
    </div>
  );
};

export default Resume;
