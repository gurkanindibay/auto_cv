import { Download, Phone, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { cvData } from './data';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div>

      {/* CV Container */}
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-2xl print:shadow-none">
        {/* Full-width Header (spans sidebar + main) */}
        <div className="p-6 text-center print-avoid-break-after">
          <img
            src="/56822a74-88ad-4bb9-a6ce-729ffe31ba32.jpeg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-cv-dark mx-auto mb-2"
          />
          <h1 className="text-[24pt] font-bold text-cv-dark mb-2 tracking-wide">
            {cvData.personal.name}
          </h1>
          <div className="text-[12pt] font-bold text-cv-dark mb-2">
            {cvData.personal.title}
          </div>
          <div className="text-[9pt] text-cv-dark mb-2 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{cvData.personal.location}</span>
            </span>
            <span className="mx-2">●</span>
            <span className="flex items-center gap-1">
              <Phone size={14} />
              <span>{cvData.personal.phone}</span>
            </span>
            <span className="mx-2">●</span>
            <span className="flex items-center gap-1">
              <Mail size={14} />
              <a href={`mailto:${cvData.personal.email}`} className="text-blue-600 hover:underline">{cvData.personal.email}</a>
            </span>
            <span className="mx-2">●</span>
            <span className="flex items-center gap-1">
              <Github size={14} />
              <a href={cvData.personal.links.github} className="text-blue-600 hover:underline">GitHub</a>
            </span>
            <span className="mx-2">●</span>
            <span className="flex items-center gap-1">
              <Linkedin size={14} />
              <a href={cvData.personal.links.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
            </span>
          </div>
        </div>

        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-[190px] bg-white border-r border-gray-300 p-3">
            <div className="space-y-5 text-left">
              {/* Details removed from sidebar to avoid duplication with header contact info */}

              {/* Skills */}
              <div>
                <h3 className="text-[11pt] font-bold text-cv-dark mb-3 uppercase tracking-wide mt-5 pl-0 ml-0">SKILLS</h3>
                {cvData.skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="text-[9pt] font-semibold text-cv-dark mb-1 pl-0">
                      {skill.name}
                    </div>
                    <div className="w-full h-2 bg-cv-light-gray rounded-none">
                      <div
                        className="h-full bg-cv-dark"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="print-avoid-break">
                <h3 className="text-[11pt] font-bold text-cv-dark mb-2 uppercase tracking-wide mt-5 pl-0 ml-0">LANGUAGES</h3>
                {cvData.languages.map((lang, index) => (
                  <div key={index} className="mb-2 text-[9pt]">
                    <span className="font-semibold text-cv-dark">{lang.name}:</span>{' '}
                    <span className="text-cv-dark">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">

            {/* Professional Summary */}
            <div className="mb-3 print-avoid-break-after">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide">
                Professional Summary
              </h2>
              <p className="text-[10pt] leading-relaxed text-justify text-cv-dark">
                {cvData.summary}
              </p>
            </div>

            {/* Key Achievements (moved directly under Professional Summary) */}
            <div className="mb-3 print-avoid-break-after">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide">
                Key Achievements
              </h2>
              {cvData.achievements.map((achievement, index) => (
                <div key={index} className="mb-1 text-[10pt] leading-snug">
                  <strong className="text-cv-dark">{achievement.title}:</strong>{' '}
                  {achievement.description}
                </div>
              ))}
            </div>

            {/* Professional Experience */}
            <div className="mb-3">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide print-avoid-break-after">
                Professional Experience
              </h2>
              {cvData.experience.map((job, index) => (
                <div key={index} className="mb-3 print-avoid-break">
                  <div className="mb-1">
                    <span className="text-[11pt] font-bold text-cv-dark">{job.title}</span>
                    {' at '}
                    <span className="text-[11pt] font-semibold text-cv-dark">{job.company}</span>
                    <span className="float-right text-[9pt] text-cv-gray italic">{job.period}</span>
                  </div>
                  <div className="clear-both"></div>
                  <ul className="list-none mt-1 space-y-1">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-[10pt] leading-snug pl-4 relative">
                        <span className="absolute left-0 text-[7pt]">●</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-3">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide">
                Education
              </h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="mb-2 text-[10pt]">
                  <span className="font-bold text-cv-dark">{edu.degree}</span>
                  {' | '}
                  <span className="italic text-cv-dark">{edu.institution}</span>
                  {' | '}
                  <span className="text-cv-gray text-[9pt]">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mb-3">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide">
                Certifications & Professional Development
              </h2>
              {cvData.certifications.map((cert, index) => (
                <div key={index} className="mb-1 text-[10pt]">
                  <span className="font-bold text-cv-dark">{cert.name}</span>
                  {' | '}
                  <span className="text-cv-dark">{cert.organization}</span>
                  {cert.period && (
                    <>
                      {' | '}
                      <span className="text-cv-gray text-[9pt]">{cert.period}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
            

            {/* Technical Competencies */}
            <div className="mb-3">
              <h2 className="text-[12pt] font-bold text-cv-dark border-b border-cv-dark pb-1 mb-2 uppercase tracking-wide">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(cvData.technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-[11pt] font-bold text-cv-dark mb-2 border-b border-cv-dark pb-1">{category}</h3>
                    {skills.map((skill, index) => (
                      <div key={index} className="text-[9pt] mb-1">
                        <strong className="text-cv-dark">{skill.name}</strong>{' '}
                        <span className="text-cv-gray text-[9pt]">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
