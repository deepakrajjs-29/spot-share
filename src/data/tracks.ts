export interface ConferenceTrack {
  number: string;
  id: string;
  title: string;
  shortCode: string;
  iconName: string;
  description: string;
  topics: string[];
}

export const CONFERENCE_TRACKS: ConferenceTrack[] = [
  {
    number: "01",
    id: "track-1",
    shortCode: "TRACK 1",
    title: "Sustainable Materials, Emerging Devices, and Quantum Technologies",
    iconName: "Atom",
    description: "Focuses on green materials, 2D structures, biodegradable substrates, quantum computing components, and life-cycle engineered semiconductor devices.",
    topics: [
      "Green and sustainable materials",
      "2D materials",
      "Lead-free perovskites",
      "Biodegradable/recyclable substrates",
      "Energy-efficient emerging devices",
      "Steep-slope devices",
      "Spintronics",
      "Low-power quantum devices",
      "Quantum technologies for sustainable computing and communication",
      "Lifecycle assessment of novel materials and devices",
      "Sustainable device engineering",
      "Eco-friendly fabrication processes"
    ]
  },
  {
    number: "02",
    id: "track-2",
    shortCode: "TRACK 2",
    title: "Energy-Efficient VLSI Circuits, SoC Design, and AI Hardware Acceleration",
    iconName: "Cpu",
    description: "Encompasses ultra-low power mixed-signal/RF circuits, green hardware accelerators, in-memory computing, and neuromorphic edge processors for sustainable AI.",
    topics: [
      "Low-power and energy-efficient digital, analog, mixed-signal, and RF circuits",
      "Sustainable VLSI design methodologies",
      "Green hardware accelerators",
      "AI/ML hardware for edge computing",
      "Neuromorphic computing",
      "In-memory computing",
      "Sustainable AI",
      "Green data centers",
      "Hardware design for sustainable AI"
    ]
  },
  {
    number: "03",
    id: "track-3",
    shortCode: "TRACK 3",
    title: "Power Electronics, Electrical Systems, and Renewable Energy",
    iconName: "Zap",
    description: "Covers wide-bandgap SiC/GaN semiconductors, high-efficiency power converters, smart microgrids, electric vehicle drives, and energy harvesting architectures.",
    topics: [
      "Wide-bandgap semiconductors (SiC, GaN)",
      "High-efficiency power conversion",
      "Renewable energy systems",
      "Smart grids",
      "Electric vehicles",
      "Energy harvesting",
      "Ultra-low power analog circuits",
      "Sustainable high-frequency systems",
      "Power management",
      "Carbon-neutral applications"
    ]
  },
  {
    number: "04",
    id: "track-4",
    shortCode: "TRACK 4",
    title: "Biomedical Engineering, Sensors, and Bioelectronics",
    iconName: "HeartPulse",
    description: "Explores bioelectronic interfaces, wearable and implantable monitoring devices, biodegradable biomedical sensors, and AI-driven diagnostic hardware.",
    topics: [
      "Bioelectronics",
      "Implantable devices",
      "Biodegradable materials",
      "Sustainable healthcare sensors",
      "Biomedical monitoring",
      "Intelligent sensing systems",
      "AI-enabled biomedical devices",
      "Low-power bio-signal processing",
      "Wearable technologies",
      "Eco-friendly medical electronics"
    ]
  },
  {
    number: "05",
    id: "track-5",
    shortCode: "TRACK 5",
    title: "Sustainable Optoelectronics, Photonics, Sensors and MEMS/NEMS",
    iconName: "SunMedium",
    description: "Focuses on high-efficiency photovoltaics, green silicon photonics, micro-electromechanical sensors, and environmental monitoring systems.",
    topics: [
      "High-efficiency photovoltaics & LEDs",
      "Energy-saving optoelectronic devices",
      "Green photonics",
      "Silicon photonics",
      "Low-energy communication",
      "Sustainable sensors",
      "MEMS/NEMS",
      "Environmental monitoring",
      "Climate monitoring",
      "Precision agriculture",
      "Smart cities"
    ]
  },
  {
    number: "06",
    id: "track-6",
    shortCode: "TRACK 6",
    title: "Green Semiconductor Manufacturing, Sustainable Packaging and Reliability",
    iconName: "Layers",
    description: "Addresses circular semiconductor manufacturing, heterogeneous packaging, recyclable substrates, long-lifetime electronics, and e-waste mitigation.",
    topics: [
      "Eco-friendly semiconductor manufacturing",
      "Sustainable supply chains",
      "Advanced packaging",
      "Heterogeneous integration",
      "Recyclable materials",
      "Reliability engineering",
      "Long-lifetime electronics",
      "Repairable electronics",
      "Circular electronics",
      "E-waste reduction",
      "Carbon footprint reduction",
      "Hazardous material reduction",
      "Sustainable testing",
      "Verification & End-of-life management"
    ]
  },
  {
    number: "07",
    id: "track-7",
    shortCode: "TRACK 7",
    title: "Sustainable Embedded Systems, Green Communication Technologies and Emerging Applications",
    iconName: "Radio",
    description: "Examines low-carbon IoT, green 6G cellular architectures, edge intelligence, Industry 5.0 systems, smart mobility, and ethics of sustainable electronics.",
    topics: [
      "Energy-efficient embedded systems",
      "IoT & Edge intelligence",
      "Green 6G & Next-generation communication networks",
      "Low-carbon communication",
      "Industry 5.0 & Human-machine collaboration",
      "Circular economy in tech",
      "Automotive & Smart mobility",
      "Healthcare & Climate resilience",
      "Policy, Ethics & Societal aspects of sustainable electronics and communication technologies"
    ]
  }
];
