/**
 * Centralized Configuration for External Links & Contact Points.
 * In accordance with conference requirements, no fake URLs are invented.
 * Live URLs will be activated in production as provided by the organizers.
 */

export const CONFIG = {
  // Submission portal (e.g. Microsoft CMT)
  SUBMISSION_URL: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F", // Microsoft CMT Portal URL
  
  // Registration and Payment Portals
  REGISTRATION_URL: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F", // Registration Form / Portal URL
  PAYMENT_URL: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F", // Payment Gateway / Portal URL
  
  // Springer Conference Templates
  WORD_TEMPLATE_URL: "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines", // Springer Proceedings Word Template Guidelines
  LATEX_TEMPLATE_URL: "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines", // Springer Proceedings LaTeX Template Guidelines
  SPRINGER_LNEE_URL: "https://www.springer.com/series/7818", // Springer Lecture Notes in Electrical Engineering
  
  // Campus & Map Directions
  MAP_URL: "https://maps.google.com/?q=SNS+College+of+Technology+Coimbatore",
  GOOGLE_MAP_EMBED_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.228514936495!2d76.9942735748098!3d11.096309989072972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f789d701f253%3A0xc3d5e2e88a0328b9!2sSNS%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  // Official Contact Emails
  CONTACT_EMAIL: "snsect27@snsct.org",
  GRIEVANCE_EMAIL: "os.snsect@gmail.com",
  
  // Institution Web Portal
  INSTITUTION_URL: "https://snsct.org",
  DEPARTMENT_URL: "https://snsct.org/department-of-electronics-and-communication-engineering/",

  // Dynamic Deadline Timestamps (IST)
  SUBMISSION_DEADLINE_ISO: "2026-11-30T23:59:59+05:30",
  CONFERENCE_START_ISO: "2027-03-11T09:00:00+05:30",
  CONFERENCE_END_ISO: "2027-03-12T18:00:00+05:30",
};
