export interface ConferenceMetadata {
  title: string;
  shortTitle: string;
  theme: string;
  organizer: string;
  venue: string;
  location: string;
  address: string;
  datesText: string;
  submissionDeadlineText: string;
  publicationBannerText: string;
  publicationDisclaimer: string;
}

export const CONFERENCE_INFO: ConferenceMetadata = {
  title: "International Conference on Sustainable and Novel Solutions in Electronics and Communication Technologies",
  shortTitle: "SNSECT’27",
  theme: "Digital Solutions for Sustainable Electronics and Communication Technologies",
  organizer: "Department of Electronics and Communication Engineering, SNS College of Technology",
  venue: "SNS College of Technology, Coimbatore",
  location: "Coimbatore – 641 035, Tamil Nadu, India",
  address: "SNS Kalvi Nagar, Sathy Main Road (NH-209), Vazhiampalayam, Saravanampatti Post, Coimbatore - 641 035, Tamil Nadu, India",
  datesText: "11 – 12 March 2027",
  submissionDeadlineText: "30 November 2026",
  publicationBannerText: "Springer LNEE · Scopus Indexed · Peer Reviewed · Two Volumes",
  publicationDisclaimer: "Selected high-quality papers are planned for publication in Springer’s Lecture Notes in Electrical Engineering (LNEE), indexed in Scopus, subject to peer review, Springer quality checks and approval.",
};

export const ABOUT_CONFERENCE = {
  sectionLabel: "ABOUT CONFERENCE",
  heading: "Building Sustainable Electronics Through Digital Innovation",
  overview: `The International Conference on Sustainable and Novel Solutions in Electronics and Communication Technologies (SNSECT’27) serves as a premier global platform for academicians, researchers, scientists, engineers, and industry professionals to present, discuss, and deliberate on breakthrough innovations, emerging trends, and sustainable methodologies across electronics, communication engineering, and digital systems.`,
  detailedDescription: `In an era defined by rapid technological acceleration and acute climate challenges, engineering sustainable electronic hardware, green communication infrastructures, and energy-efficient computational architectures is paramount. SNSECT’27 bridges theoretical discovery with practical implementations by fostering cross-disciplinary exchange in sustainable materials, novel quantum devices, energy-efficient VLSI and SoC architectures, neuromorphic and in-memory computing, wide-bandgap power electronics, wearable biomedical sensors, green photonics, circular semiconductor packaging, and next-generation green 6G communication networks.`,
  coreFocusAreas: [
    "Digital Solutions & Intelligent Algorithms",
    "Sustainable Electronics & Low-Power Hardware",
    "Communication Technologies & Green 6G Networks",
    "Advanced Computing Architectures & Edge Intelligence",
    "Data-Driven Intelligence & Sustainable AI",
    "Sustainable Materials & Quantum Devices",
    "Energy-Efficient VLSI, SoC & Hardware Accelerators",
    "Power Electronics & Renewable Energy Systems",
    "Biomedical Devices & Wearable Sensors",
    "Green Optoelectronics, Photonics & MEMS/NEMS",
    "Semiconductor Manufacturing & Circular Packaging",
    "Reliability Engineering & E-Waste Reduction",
    "Embedded Systems & Edge Computing",
    "Industry 5.0, Smart Cities & Climate Resilience"
  ],
  pillars: [
    {
      title: "Sustainable Electronics",
      description: "Low-power VLSI, biodegradable substrates, wide-bandgap semiconductors, and circular device lifecycles."
    },
    {
      title: "Green Communication",
      description: "Energy-efficient 6G protocols, silicon photonics, low-carbon IoT, and ultra-reliable connected systems."
    },
    {
      title: "Edge & AI Hardware",
      description: "Neuromorphic architectures, in-memory computing, and hardware accelerators engineered for sustainable AI."
    },
    {
      title: "Societal & Industrial Impact",
      description: "Industry 5.0 integration, healthcare sensors, smart grid infrastructures, and climate resilience technologies."
    }
  ]
};

export const ABOUT_INSTITUTION = {
  heading: "SNS College of Technology",
  subheading: "An Autonomous Institution | Accredited by NAAC with 'A++' Grade",
  description: `SNS College of Technology (Autonomous), established in 2002 under the visionary leadership of Sri SNS Charitable Trust, stands at the forefront of engineering education, research excellence, and innovation in India. Affiliated with Anna University, Chennai, and approved by the All India Council for Technical Education (AICTE), New Delhi, the institution is celebrated for pioneering India’s first 5-pillar Design Thinking Framework in higher technical education. As an esteemed member of the Global Design Thinking Alliance (GDTA), SNSCT equips students with empathetic problem-solving and inventive entrepreneurial competencies.`,
  highlights: [
    "Established in 2002 with a legacy of over two decades of engineering excellence",
    "Affiliated with Anna University, Chennai and approved by AICTE, New Delhi",
    "India’s first institute to implement a 5-pillar Design Thinking framework in curriculum",
    "Prestigious member of the Global Design Thinking Alliance (GDTA)",
    "Accredited with prestigious NAAC 'A++' Grade",
    "Multiple undergraduate programmes accredited by the National Board of Accreditation (NBA)",
    "17 Undergraduate Engineering & Technology Programmes",
    "5 Anna University-Recognised Research Centres fostering doctoral research",
    "Vibrant placement ecosystem with 1,400+ students placed and 360+ top recruiters",
    "Highest placement package reaching up to 53 LPA"
  ],
  stats: [
    { value: "2002", label: "Year Established", icon: "Calendar" },
    { value: "A++", label: "NAAC Accreditation", icon: "Award" },
    { value: "17", label: "UG Programmes", icon: "BookOpen" },
    { value: "2", label: "PG programmes", icon: "Users" },
    { value: "5", label: "AU Research Centres", icon: "Compass" },
    { value: "1400+", label: "Students Placed", icon: "GraduationCap" },
    { value: "360+", label: "Recruiting Partners", icon: "Building2" },
    { value: "53 LPA", label: "Highest Package", icon: "TrendingUp" },
    { value: "GDTA", label: "Global DT Alliance", icon: "Globe" }
  ]
};

export const ABOUT_DEPARTMENT = {
  heading: "Department of Electronics and Communication Engineering",
  subheading: "NBA-Accredited B.E. ECE Programme | Established 2002",
  description: `Established in 2002, the Department of ECE at SNS College of Technology offers NBA-accredited programmes, integrates Design Thinking into its curriculum, and leads government-funded semiconductor research under the MeitY Chip to Startup (C2S) initiative.`,
  highlights: [
    "Established in 2002 with NBA-accredited B.E. ECE Programme",
    "Annual student intake of 360 students",
    "Awarded prestigious MeitY 'Chip to Startup' (C2S) project funded by the Ministry of Electronics and Information Technology, Govt. of India",
    "Total project funding of Rs. 494 Lakhs for semiconductor and VLSI research",
    "Rs. 8 Lakhs dedicated allocation for FPGA boards, EDA tools, and IC design software",
    "Comprehensive industry links, sponsored research labs, and startup incubators",
    "Design Thinking-driven modern engineering curriculum"
  ],
  laboratories: [
    {
      name: "VLSI Laboratory",
      description: "Equipped with Cadence, Synopsys, Mentor Graphics, and high-performance EDA toolchains for advanced digital/analog IC design."
    },
    {
      name: "Communication Systems Laboratory",
      description: "Advanced testbenches, spectrum analyzers, vector network analyzers, and wireless SDR modules for RF and baseband research."
    },
    {
      name: "Optical and Microwave Laboratory",
      description: "Precision optical fiber benches, microwave testbenches, waveguide components, and photonics characterization setups."
    },
    {
      name: "Embedded Systems Laboratory",
      description: "ARM Cortex, RISC-V development boards, IoT gateway kits, and edge computing platforms for cyber-physical systems."
    },
    {
      name: "SNS-TI Innovation Laboratory",
      description: "Industry-sponsored Texas Instruments innovation lab fostering analog system design, sensor interfacing, and smart embedded solutions."
    }
  ]
};

export const VENUE_DETAILS = {
  name: "SNS College of Technology",
  campus: "SNS Kalvi Nagar",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  pincode: "641 035",
  fullAddress: "SNS Kalvi Nagar, Sathy Main Road (NH-209), Saravanampatti Post, Coimbatore – 641 035, Tamil Nadu, India",
  description: "The campus provides modern conference halls, smart seminar halls, dedicated presentation lounges, and advanced research facilities for academic exchange.",
  accommodationNotice: "The conference is non-residential and delegates must make their own accommodation arrangements in Coimbatore.",
  connectivity: [
    { mode: "Location & Campus", details: "SNS Kalvi Nagar, Sathy Main Road (NH-209), Saravanampatti Post, Coimbatore – 641 035, Tamil Nadu, India." }
  ]
};
