export const cvData = {
  personal: {
    name: "GÜRKAN INDIBAY",
    title: "SOFTWARE ENGINEERING MANAGER & TEAM LEADER",
    location: "Istanbul, Turkey",
    phone: "+905314751010",
    email: "gurkanindibay@gmail.com",
    birthYear: "1983",
    nationality: "Turkish",
    links: {
      github: "https://github.com/gurkanindibay",
      linkedin: "https://www.linkedin.com/in/g%C3%BCrkan-indibay/"
    }
  },
  
  summary: "Results-driven Software Engineering Manager with 20+ years of experience leading high-performing teams and transforming legacy infrastructure at large corporations. Proven track record of delivering critical projects under pressure, including rebuilding regulatory-compliant systems in 30 days and modernizing stalled 4-year projects into production-ready platforms. Expert in scaling teams, implementing DevOps practices, and architecting cloud-native solutions across finance, telecommunications, and enterprise software domains. Skilled in integrating AI tools like GitHub Copilot into SDLC processes to enhance productivity, code quality, and accelerate development cycles.",
  
  achievements: [
    {
      title: "Infrastructure Transformation",
      description: "Successfully modernized legacy systems at Microsoft, creating solutions still used by core teams"
    },
    {
      title: "Crisis Management",
      description: "Rebuilt Papara's regulatory infrastructure in 30 days while maintaining team stability"
    },
    {
      title: "Project Recovery",
      description: "Transformed 4-year stalled project at Doruk into company-wide infrastructure foundation"
    },
    {
      title: "Team Building",
      description: "Consistently built and led high-performing teams (7-20 members) across multiple organizations"
    },
    {
      title: "Product Development",
      description: "Delivered Service Virtualization product from ideation to customer validation with limited resources"
    },
    {
      title: "ProManage Cloud Transformation",
      description: "Led the end-to-end transformation of ProManage into a cloud-native, Kubernetes-deployable platform with PWA/offline capabilities; built the cloud team and established a reusable, multi-cloud infrastructure that reduced deployment time and enabled SaaS delivery to SMEs."
    },
    {
      title: "AYDES (AFAD) Delivery",
      description: "Led analysis and architecture for the AFAD Disaster Management & Decision Support System (AYDES); promoted to manage a cross-site team, released two production versions deployed across AFAD units with a highly available, scalable infrastructure."
    }
  ],

  skills: [
    { name: "C#", level: 100 },
    { name: ".NET Framework", level: 100 },
    { name: "Java", level: 100 },
    { name: "SQL", level: 100 },
    { name: "Spring Framework", level: 100 },
    { name: "Python", level: 80 },
    { name: "Angular", level: 80 },
    { name: "React", level: 60 },
    { name: "TypeScript", level: 75 },
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 75 },
    { name: "Microservices", level: 95 },
    { name: "Software Architecture", level: 95 },
    { name: "Project Management", level: 95 },
    { name: "Agile Methodologies", level: 95 },
    { name: "Team Leadership", level: 95 },
    { name: "Product Management", level: 80 },
    { name: "GitHub Copilot", level: 90 }
  ],
  
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Professional (TOEFL: 90/120)" }
  ],
  
  experience: [
    {
      title: "Software Engineering Manager",
      company: "EPAM Systems",
      period: "Sep 2025 – Present",
      responsibilities: [
        "Managing consultancy projects as Resource Manager, overseeing client delivery and team allocation"
      ]
    },
    {
      title: "Software Engineering Manager",
      company: "Papara",
      period: "Mar 2025 – Jul 2025",
      responsibilities: [
        "Led team of 8 developers through critical infrastructure transformation post-trustee assignment",
  "Implemented regulatory and security enhancements to Papara's core banking interfaces, enabling secure service exposure and reducing fraud risk while maintaining team motivation",
        "Architected money transfer systems handling all internal/external transfers using modular monolith approach in .NET",
        "Delivered international transfer capabilities enabling seamless transactions from 100+ countries",
        "Maintained high team morale during organizational restructuring while ensuring zero downtime"
      ]
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      period: "Dec 2020 – Mar 2025",
      responsibilities: [
        "Modernized entire packaging infrastructure from legacy Perl/Travis to Python/GitHub Actions in 12 months",
        "Enhanced system reliability by implementing comprehensive unit testing within CI/CD pipelines",
        "Developed PostgreSQL extensions for Azure Database using C and Rust, contributing to Citus, a PostgreSQL extension for distributed databases",
        "Developed mechanisms for distributing DDL statements across databases within Citus extension",
        "Infrastructure still actively used by Citus project team, demonstrating long-term impact and sustainability"
      ]
    },
    {
      title: "Web & Cloud Projects Lead",
      company: "Doruk Automation",
      period: "Feb 2019 – Dec 2020",
      responsibilities: [
        "Led the cloud transformation of ProManage (flagship MES) from desktop to a cloud-native, Kubernetes-ready platform, enabling SaaS delivery to SMEs and on-premise operation for factories",
        "Designed and delivered Progressive Web App (PWA) capabilities and offline-first SPA screens so factory operations continue uninterrupted during intermittent connectivity",
        "Established and grew the cloud development organization from ground-up (hired and mentored 4 developers, 1 business analyst, and 1 UX designer), improving delivery throughput and product quality",
        "Defined target architecture and technology stack (Angular PWA front-end, ASP.NET Core back-end, Docker/Kubernetes orchestration, Jenkins CI, IdentityServer4 + JWT) and led its implementation across the product",
        "Enabled multi-cloud portability by containerizing services and standardizing Kubernetes deployments, reducing time-to-deploy across environments by an estimated 40%",
        "Delivered production-ready platform used company-wide, providing a reusable infrastructure foundation for subsequent product lines"
      ]
    },
    {
      title: "Software Development Manager",
      company: "Netaş",
      period: "May 2017 – Feb 2019",
      responsibilities: [
        "Led team of 7 developers delivering Service Virtualization Product from concept to customer POC",
        "Managed complete product lifecycle including ideation, government incentive acquisition, and customer validation",
        "Achieved 85% project completion success rate using CMMI and Scrum methodologies",
        "Reduced bug rates to <8% by implementing BDD with Serenity, Cucumber, and Jenkins automation",
        "Launched DevOps initiative achieving full build-to-deployment automation",
        "Secured TEYDEB R&D funding and led project from application through completion"
        ,"Delivered successful proof-of-concept (PoC) implementations for Turkish Airlines and the Interbank Card Center (BKM), validating solution viability and securing stakeholder endorsement for pilot deployment"
      ]
    },
    {
      title: "Analysis and Architecture Manager",
      company: "Netaş",
      period: "Oct 2014 – May 2017",
      responsibilities: [
        "Promoted from Lead Architect to Analysis and Architecture Manager; hired and built a cross-functional analysis and architecture team (4 architects, 5 business analysts) to support nationwide projects",
        "Initiated and led the analysis and architecture process for the AFAD 'Disaster Management and Decision Support System' (AYDES), acting as lead architect and technical project manager throughout design and delivery",
        "Managed end-to-end technical delivery for the $2M+ AYDES program, releasing two production versions deployed across AFAD units with a highly available, horizontally scalable infrastructure",
        "Facilitated stakeholder workshops and client-facing sessions to translate operational requirements into detailed technical specifications and prioritized backlogs",
        "Prepared detailed project estimations, risk assessments, and technical proposals for large-scale bids, improving bid accuracy and exec-level decision making",
        "Drove adoption of CMMI practices across the organization and contributed to achieving CMMI Level 3 process maturity",
        "Led analysis efforts for the NEOS meter reading project and managed the TEYDEB funding application process for a Service Virtualization initiative, securing approval and successful project launch"
      ]
    },
    {
      title: "Software Architect",
      company: "Netaş",
      period: "Jun 2013 – Oct 2014",
      responsibilities: [
        "Architected Loupe service quality monitoring tool for telecommunications infrastructure",
        "Contributed to $2M+ AFAD AYDES project proposal development and technical specifications"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Turkcell Technology R&D",
      period: "Sep 2007 – Jun 2013",
      responsibilities: [
        "Developed Mobile Number Portability (MNP) Blacklist System for national telecommunications infrastructure",
        "Led Corporate Collection Tracking project second phase implementation",
        "Built Mobile Payment System infrastructure supporting millions of transactions"
      ]
    },
    {
      title: "Software Specialist",
      company: "7Gen Bilgi ve İletişim",
      period: "Sep 2005 – Sep 2007",
      responsibilities: [
        "Developed enterprise applications for IETT (Istanbul public transportation) using PowerBuilder",
        "Created inventory management systems for high-profile government facilities"
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Business Administration",
      institution: "Gebze Technical University",
      period: "2020-2022"
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Istanbul Technical University",
      period: "2000-2005"
    }
  ],
  
  certifications: [
    {
      name: "Project Management Professional (PMP®)",
      organization: "PMI",
      period: "2017-2027"
    },
    {
      name: "TOGAF Architecture Framework",
      organization: "The Open Group",
      period: "2012-Present"
    },
    {
      name: "TOEFL",
      organization: "Score: 90/120",
      period: "2025"
    }
  ],
  
  
  
  technicalSkills: {
    "Programming Languages": [
      { name: "Java", level: "Expert (20+ years)" },
      { name: "C#", level: "Expert (15+ years)" },
      { name: "SQL", level: "Expert (20+ years)" },
      { name: "Python", level: "Advanced (5+ years)" },
      { name: "C", level: "Intermediate (2+ years)" },
      { name: "TypeScript", level: "Advanced (4+ years)" },
      { name: "Rust", level: "Intermediate (2+ years)" }
    ],
    "Frameworks & Technologies": [
      { name: ".NET Framework", level: "Expert (15+ years)" },
      { name: "Spring Framework", level: "Expert (12+ years)" },
      { name: "Angular", level: "Advanced (6+ years)" },
      { name: "Docker", level: "Advanced (5+ years)" },
      { name: "PostgreSQL", level: "Advanced (8+ years)" },
      { name: "React", level: "Intermediate (2+ years)" },
      { name: "Kubernetes", level: "Advanced (3+ years)" }
    ],
    "Architecture & DevOps": [
      { name: "Microservices Architecture", level: "Expert (8+ years)" },
      { name: "CI/CD Pipelines", level: "Expert (10+ years)" },
      { name: "System Integration", level: "Expert (15+ years)" },
      { name: "Infrastructure Modernization", level: "Expert (10+ years)" },
      { name: "Cloud Architecture", level: "Advanced (6+ years)" },
      { name: "GitHub Actions", level: "Advanced (3+ years)" }
    ],
    "Leadership & Methodologies": [
      { name: "Team Leadership", level: "Expert (15+ years)" },
      { name: "Project Management", level: "Expert (PMP Certified)" },
      { name: "Crisis Management", level: "Expert" },
      { name: "Agile/Scrum", level: "Expert (15+ years)" },
      { name: "DevOps Practices", level: "Expert (8+ years)" },
      { name: "Product Management", level: "Advanced (8+ years)" },
      { name: "TOGAF", level: "Advanced (Certified)" }
    ]
  }
};
