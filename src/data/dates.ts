export interface TimelineEvent {
  id: string;
  title: string;
  dateStr: string;
  isoDate: string;
  description: string;
  status: "completed" | "active" | "upcoming" | "highlight";
  badgeText?: string;
  isImportant?: boolean;
}

export const IMPORTANT_DATES: TimelineEvent[] = [
  {
    id: "submission-open",
    title: "Paper Submission Opens",
    dateStr: "25 August 2026",
    isoDate: "2026-08-25T00:00:00+05:30",
    description: "Portal opens for full-length original research paper submissions via Microsoft CMT.",
    status: "upcoming",
    badgeText: "Phase 1"
  },
  {
    id: "submission-deadline",
    title: "Paper Submission Deadline",
    dateStr: "30 November 2026",
    isoDate: "2026-11-30T23:59:59+05:30",
    description: "Strict deadline for submitting full research manuscripts for double-blind peer review.",
    status: "active",
    badgeText: "Critical Deadline",
    isImportant: true
  },
  {
    id: "acceptance-notification",
    title: "Acceptance Notification",
    dateStr: "15 December 2026",
    isoDate: "2026-12-15T23:59:59+05:30",
    description: "Notification of review outcomes and acceptance letters dispatched via email.",
    status: "upcoming",
    badgeText: "Review Outcome"
  },
  {
    id: "early-bird-reg",
    title: "Early Bird Registration",
    dateStr: "31 December 2026",
    isoDate: "2026-12-31T23:59:59+05:30",
    description: "Early bird discounted registration window for accepted authors and delegates.",
    status: "upcoming",
    badgeText: "Early Bird"
  },
  {
    id: "registration-deadline",
    title: "Registration Deadline",
    dateStr: "20 January 2027",
    isoDate: "2027-01-20T23:59:59+05:30",
    description: "Final date for author conference registration and payment confirmation.",
    status: "upcoming",
    badgeText: "Final Registration",
    isImportant: true
  },
  {
    id: "crc-submission",
    title: "Camera Ready Copy Submission",
    dateStr: "25 January 2027",
    isoDate: "2027-01-25T23:59:59+05:30",
    description: "Submission of final, Springer-formatted camera-ready manuscripts with consent forms.",
    status: "upcoming",
    badgeText: "Final CRC"
  },
  {
    id: "conference-dates",
    title: "Conference Dates — SNSECT'27",
    dateStr: "11–12 March 2027",
    isoDate: "2027-03-11T09:00:00+05:30",
    description: "Inauguration, Keynote addresses, Oral paper presentation sessions (Physical & Online modes), and Valedictory Ceremony.",
    status: "highlight",
    badgeText: "Conference Event",
    isImportant: true
  }
];

