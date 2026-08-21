export interface CommitteeMember {
  name: string;
  roleOrDesignation: string;
  affiliation: string;
  countryOrLocation?: string;
  highlight?: boolean;
}

export interface CommitteeGroup {
  id: string;
  title: string;
  category: "Leadership" | "Advisory" | "Chairs" | "Organizing";
  badgeText: string;
  members: CommitteeMember[];
}

export const COMMITTEE_GROUPS: CommitteeGroup[] = [
  {
    id: "chief-patrons",
    title: "Chief Patrons",
    category: "Leadership",
    badgeText: "Honorary Leadership",
    members: [
      {
        name: "Deiva Thiru Dr. S. N. Subbramanian",
        roleOrDesignation: "Founder Chairman",
        affiliation: "SNS Groups of Institutions",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      },
      {
        name: "Dr. S. Rajalakshmi",
        roleOrDesignation: "Correspondent",
        affiliation: "SNS Groups of Institutions",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      },
      {
        name: "Dr. Nalin SNS",
        roleOrDesignation: "Secretary / Technical Director",
        affiliation: "SNS Groups of Institutions",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      }
    ]
  },
  {
    id: "patrons",
    title: "Patrons",
    category: "Leadership",
    badgeText: "Institutional Leadership",
    members: [
      {
        name: "Dr. V. P. Arunachalam",
        roleOrDesignation: "Director",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. S. Chendur Pandian",
        roleOrDesignation: "Executive Director",
        affiliation: "SNS Technical Campus",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. S. Charles",
        roleOrDesignation: "Principal",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "steering-committee",
    title: "Steering Committee",
    category: "Leadership",
    badgeText: "Executive Governance",
    members: [
      {
        name: "Dr. P. Tamil Selvam",
        roleOrDesignation: "Vice Principal",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. P. Vivekanandan",
        roleOrDesignation: "Vice Principal (Academics)",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. R. Sudhakaran",
        roleOrDesignation: "Vice Principal (AI Campus)",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. L. M. Nithya",
        roleOrDesignation: "Dean & IQAC Coordinator",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. R. Rajasekaran",
        roleOrDesignation: "IQAC Coordinator (AI Campus)",
        affiliation: "SNS College of Technology",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "international-advisory",
    title: "International Advisory Committee",
    category: "Advisory",
    badgeText: "Global Experts",
    members: [
      {
        name: "Dr. Korhan Cengiz",
        roleOrDesignation: "Professor",
        affiliation: "Trakya University",
        countryOrLocation: "Turkey"
      },
      {
        name: "Dr. Isidoros Perikos",
        roleOrDesignation: "Professor",
        affiliation: "University of Patras",
        countryOrLocation: "Greece"
      },
      {
        name: "Dr. Jihong Park",
        roleOrDesignation: "Professor",
        affiliation: "Singapore University of Technology and Design (SUTD)",
        countryOrLocation: "Singapore"
      },
      {
        name: "Dr. Christo Anand",
        roleOrDesignation: "Professor",
        affiliation: "Samarkand State University",
        countryOrLocation: "Uzbekistan"
      },
      {
        name: "Dr. Thomas Samraj Lawrence",
        roleOrDesignation: "Professor",
        affiliation: "Dilla University (DU)",
        countryOrLocation: "Ethiopia"
      },
      {
        name: "Dr. Ravi Samikannu",
        roleOrDesignation: "Professor",
        affiliation: "Botswana International University of Science and Technology (BIUST)",
        countryOrLocation: "Botswana"
      },
      {
        name: "Dr. Samuel Tensingh",
        roleOrDesignation: "Principal Engineer / Researcher",
        affiliation: "Atto Devices",
        countryOrLocation: "Australia"
      },
      {
        name: "Ms. C. Preethy Sudhan",
        roleOrDesignation: "Senior Researcher / Consultant",
        affiliation: "Kardiyan",
        countryOrLocation: "Canada"
      }
    ]
  },
  {
    id: "national-advisory",
    title: "National Advisory Committee",
    category: "Advisory",
    badgeText: "National Academic Council",
    members: [
      {
        name: "Dr. Suresh Sundaram",
        roleOrDesignation: "Professor",
        affiliation: "Indian Institute of Technology (IIT) Guwahati",
        countryOrLocation: "Assam, India"
      },
      {
        name: "Dr. S. Vengadeswaran",
        roleOrDesignation: "Professor",
        affiliation: "Indian Institute of Information Technology (IIIT) Kottayam",
        countryOrLocation: "Kerala, India"
      },
      {
        name: "Dr. B. Chitti Babu",
        roleOrDesignation: "Professor",
        affiliation: "IIITDM Kancheepuram",
        countryOrLocation: "Tamil Nadu, India"
      },
      {
        name: "Dr. S. N. Deepa",
        roleOrDesignation: "Professor",
        affiliation: "National Institute of Technology (NIT) Kozhikode",
        countryOrLocation: "Kerala, India"
      },
      {
        name: "Dr. K. Prabhu",
        roleOrDesignation: "Professor",
        affiliation: "National Institute of Technology (NIT) Warangal",
        countryOrLocation: "Telangana, India"
      },
      {
        name: "Dr. Murali Krishna",
        roleOrDesignation: "Professor",
        affiliation: "National Institute of Technology (NIT) Trichy",
        countryOrLocation: "Tamil Nadu, India"
      },
      {
        name: "Dr. M. Surendar",
        roleOrDesignation: "Professor",
        affiliation: "National Institute of Technology (NIT) Puducherry",
        countryOrLocation: "Puducherry, India"
      },
      {
        name: "Dr. Hitesh Datt Mathur",
        roleOrDesignation: "Professor",
        affiliation: "Birla Institute of Technology and Science (BITS) Pilani",
        countryOrLocation: "Rajasthan, India"
      },
      {
        name: "Dr. C. Christober Asir Rajan",
        roleOrDesignation: "Professor",
        affiliation: "Puducherry Technological University (PTU)",
        countryOrLocation: "Puducherry, India"
      },
      {
        name: "Dr. E. Konguvel",
        roleOrDesignation: "Professor",
        affiliation: "Vellore Institute of Technology (VIT)",
        countryOrLocation: "Vellore, India"
      },
      {
        name: "Dr. Prashant R. Nair",
        roleOrDesignation: "Professor",
        affiliation: "Amrita Vishwa Vidyapeetham (Amrita University)",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. A. Andrew Roobert",
        roleOrDesignation: "Professor",
        affiliation: "SRM Institute of Science and Technology (SRMIST)",
        countryOrLocation: "Chennai, India"
      },
      {
        name: "Dr. K. Prakash",
        roleOrDesignation: "Professor",
        affiliation: "Christ University",
        countryOrLocation: "Bangalore, India"
      },
      {
        name: "Dr. V. Karthikeyan",
        roleOrDesignation: "Professor",
        affiliation: "Mepco Schlenk Engineering College (MEPCO)",
        countryOrLocation: "Sivakasi, India"
      },
      {
        name: "Dr. S. Allwin Devaraj",
        roleOrDesignation: "Professor",
        affiliation: "Francis Xavier Engineering College (FxEC)",
        countryOrLocation: "Thirunelveli, India"
      }
    ]
  },
  {
    id: "conference-chairs",
    title: "Conference Chairs",
    category: "Chairs",
    badgeText: "General Chairs",
    members: [
      {
        name: "Dr. J. Geetha Ramani",
        roleOrDesignation: "Professor & Head",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      },
      {
        name: "Dr. Jebarani Evangeline S",
        roleOrDesignation: "Professor",
        affiliation: "Department of Electrical and Electronics Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      }
    ]
  },
  {
    id: "programme-chairs",
    title: "Programme Chairs",
    category: "Chairs",
    badgeText: "Technical Program",
    members: [
      {
        name: "Dr. B. Sivasankari",
        roleOrDesignation: "Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. G. Arthy",
        roleOrDesignation: "Assistant Professor",
        affiliation: "Department of Electrical and Electronics Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "organizing-secretary",
    title: "Organizing Secretary",
    category: "Chairs",
    badgeText: "Secretariat",
    members: [
      {
        name: "Dr. S. Pradeep",
        roleOrDesignation: "Associate Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      },
      {
        name: "Dr. V. S. Nishok",
        roleOrDesignation: "Associate Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India",
        highlight: true
      }
    ]
  },
  {
    id: "publication-chairs",
    title: "Publication Chairs",
    category: "Chairs",
    badgeText: "Springer Proceedings",
    members: [
      {
        name: "Dr. M. Siva Ramkumar",
        roleOrDesignation: "Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. S. Essakki Rajavel",
        roleOrDesignation: "Associate Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "publicity-chairs",
    title: "Publicity Chairs",
    category: "Chairs",
    badgeText: "Media & Outreach",
    members: [
      {
        name: "Dr. A. Karthikeyan",
        roleOrDesignation: "Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Mr. M. Jagadeesh",
        roleOrDesignation: "Assistant Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "finance-chairs",
    title: "Finance Chairs",
    category: "Chairs",
    badgeText: "Treasury & Accounts",
    members: [
      {
        name: "Dr. A. Vaniprabha",
        roleOrDesignation: "Associate Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      },
      {
        name: "Dr. C. Gokul Prasad",
        roleOrDesignation: "Assistant Professor",
        affiliation: "Department of Electronics and Communication Engineering, SNSCT",
        countryOrLocation: "Coimbatore, India"
      }
    ]
  },
  {
    id: "organizing-committee",
    title: "Organizing Committee",
    category: "Organizing",
    badgeText: "Department Faculty",
    members: [
      { name: "Dr. R. Kanmani", roleOrDesignation: "Professor", affiliation: "Department of ECE, SNSCT" },
      { name: "Dr. K. Manoharan", roleOrDesignation: "Associate Professor (ASP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Dr. R. Prabha", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Dr. T. Tharan Kumar", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Dr. R. Poornima", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Dr. G. Husna Khouser", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. K. Suriya", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. E. Christina Dally", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. K. Sangeetha", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mr. K. K. Rajkumar", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. T. G. Ramabharathi", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. S. V. Lakshmi", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mr. N. Arun Kumar", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. M. Pradeepa", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. M. Bhuvaneswari", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mr. J. Prabhakaran", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. E. Ramya", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. S. Kavipriya", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mr. V. Prabhu", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Ms. R. Gayathri", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. S. Vigneswari", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. A. Poornima", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mr. R. Sathish Kumar", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. V. Manohari", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. V. Pavithra", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" },
      { name: "Mrs. D. Vishnupriya", roleOrDesignation: "Assistant Professor (AP)", affiliation: "Department of ECE, SNSCT" }
    ]
  }
];
