export interface KeynoteSpeaker {
  id: string;
  name: string;
  salutation: string;
  role: string;
  field: string;
  institution: string;
  location: string;
  country: string;
  bio: string;
  expertise: string[];
}

export const DISTINGUISHED_SPEAKER: KeynoteSpeaker = {
  id: "dr-manimuthu-arulmozhi",
  name: "Dr. Manimuthu Arulmozhi",
  salutation: "Distinguished Speaker",
  role: "Faculty Researcher & Academician",
  field: "Cybersecurity and Business Analytics",
  institution: "Aston University",
  location: "Birmingham",
  country: "United Kingdom",
  bio: "Dr. Manimuthu Arulmozhi is an internationally recognized academic and researcher in the Department of Cybersecurity and Business Analytics at Aston University, United Kingdom. Dr. Arulmozhi specializes in resilient digital architectures, cybersecurity frameworks, and data analytics for secure digital systems.",
  expertise: [
    "Cybersecurity and Data Privacy",
    "Business Analytics & Intelligence",
    "Secure Digital Architectures",
    "Sustainable Information Systems",
    "AI-Driven Analytics"
  ]
};
