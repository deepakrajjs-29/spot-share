export interface FeeTier {
  id: string;
  category: string;
  nationalFee: string;
  nationalGst: string;
  internationalFee: string;
  description: string;
  isPopular?: boolean;
}

export const REGISTRATION_FEES: FeeTier[] = [
  {
    id: "ug-student",
    category: "UG Student",
    nationalFee: "₹7,000",
    nationalGst: "+ 18% GST",
    internationalFee: "$100",
    description: "Undergraduate engineering and science students with valid student ID proof."
  },
  {
    id: "pg-student",
    category: "PG Student",
    nationalFee: "₹7,500",
    nationalGst: "+ 18% GST",
    internationalFee: "$125",
    description: "Postgraduate master's students (M.E. / M.Tech / M.S. / M.Sc.) with valid student ID."
  },
  {
    id: "academician-scholar",
    category: "Academician / Research Scholar",
    nationalFee: "₹8,500",
    nationalGst: "+ 18% GST",
    internationalFee: "$200",
    description: "Faculty members, professors, doctoral Ph.D. scholars, and academic researchers.",
    isPopular: true
  },
  {
    id: "industry-expert",
    category: "Industry Expert",
    nationalFee: "₹10,000",
    nationalGst: "+ 18% GST",
    internationalFee: "$225",
    description: "Professionals, corporate executives, scientists, and R&D engineers from industry."
  },
  {
    id: "listener",
    category: "Listener",
    nationalFee: "₹3,000",
    nationalGst: "+ 18% GST",
    internationalFee: "$50",
    description: "Delegates attending keynote lectures, technical sessions, and conference proceedings without paper presentation."
  },
  {
    id: "co-author",
    category: "Co-author Registration",
    nationalFee: "₹3,500",
    nationalGst: "+ 18% GST",
    internationalFee: "$60",
    description: "Secondary author attending the conference sessions and receiving certificate of presentation."
  }
];

export const EXTRA_PAGE_CHARGES = {
  national: "₹50 per extra page",
  international: "$5 per extra page",
  threshold: "Beyond 10 pages"
};

export const REGISTRATION_POLICIES = [
  {
    title: "Mandatory Author Registration",
    content: "Each accepted research paper must be registered by at least one author at the applicable category rate to ensure inclusion in the conference technical programme and proceeding volume."
  },
  {
    title: "Registration Categories & Pricing",
    content: "Registration fees vary according to the author/delegate category (UG Student, PG Student, Academician/Research Scholar, Industry Expert, Listener, Co-author). All national registrations attract 18% GST."
  },
  {
    title: "Secured Payment Through Gateway",
    content: "All payments must be completed solely through the official secured online payment gateway link supplied in the formal acceptance email. Authors must never transmit credit/debit card numbers, CVVs, or OTPs over email."
  },
  {
    title: "Co-Author Registration",
    content: "Co-authors wishing to attend the conference sessions, present alongside the primary author, and receive an individual presentation certificate must register under the Co-author category (₹3,500 + 18% GST for national authors / $60 for international authors)."
  },
  {
    title: "Extra Page Policy",
    content: "Manuscripts exceeding the standard 10-page layout in the Springer format will incur extra page charges of ₹50 per additional page (for National authors) or $5 per additional page (for International authors)."
  },
  {
    title: "Dual Presentation Modes (Physical / Online)",
    content: "Accepted authors may elect to deliver their presentation physically on the SNSCT campus or virtually through the interactive online presentation platform, subject to the chosen registration track."
  },
  {
    title: "Refunds & Error Payments",
    content: "Refunds for accidental duplicate or erroneous payments will be verified through the banking audit and processed in not less than ten (10) working days. A clear screenshot and transaction ID of the payment confirmation must be preserved."
  },
  {
    title: "Cancellation Policy",
    content: "Cancellation of registration without an authorized and verifiable academic reason is strictly not permissible once the paper has been entered into the publication pipeline."
  },
  {
    title: "Registration Timelines & Norms",
    content: "All author registrations must be completed and confirmed strictly before the designated deadline (20 January 2027). Terms and conditions are governed by relevant governmental and institutional norms and may be subject to revision."
  },
  {
    title: "Grievances & Payment Inquiries",
    content: "Any registration grievances, payment receipt issues, or billing queries should be routed directly to the Organizing Secretary via email: os.snsect@gmail.com."
  }
];

export const PRESENTATION_MODES = {
  physical: {
    title: "Physical Mode",
    badge: "In-Person Attendance",
    features: [
      "Inaugural Session",
      "Keynotes / Invited Lectures",
      "Oral Paper Presentation Sessions",
      "Conference Lunch",
      "Networking Dinner",
      "Refreshment",
      "Participation / Presentation Certificate"
    ],
    note: "The conference is non-residential and delegates must make their own accommodation arrangements in Coimbatore."
  },
  online: {
    title: "Online Mode",
    badge: "Virtual Attendance",
    features: [
      "Inaugural Session",
      "Keynotes / Invited Lectures",
      "Online Oral Paper Presentation Sessions",
      "Participation / Presentation Certificate through email after completion"
    ],
    note: "Online oral presentation sessions will be conducted via interactive video conferencing platforms."
  }
};
