export interface AuthorGuidelineItem {
  id: string;
  category: string;
  title: string;
  items: string[];
}

export const AUTHOR_GUIDELINES = {
  generalRules: [
    "Manuscripts must represent original, unpublished research that is not currently under review with any other journal or conference.",
    "All submissions must strictly adhere to the official Springer Conference Proceedings single-column format (Lecture Notes in Electrical Engineering - LNEE).",
    "Do NOT use the IEEE double-column format. Papers submitted in non-Springer templates will not be reviewed.",
    "The manuscript must clearly specify all author names, complete institutional affiliations, official email addresses, and country.",
    "The corresponding author must be clearly designated with an asterisk (*) along with their primary contact email.",
    "Do NOT include author biographies, profiles, or photographs at the end of the manuscript.",
    "Ensure that no hidden text, non-standard embedded macros, or unwanted special Unicode characters exist in the source files.",
    "The metadata in the final PDF, Word (.docx) or LaTeX (.tex) source files must be 100% consistent across all submission portals.",
    "LaTeX submissions must include a clean .ZIP archive containing all .tex source files, figures, style files (.cls/.sty), and BibTeX (.bib) files."
  ],
  pageLimitsNotice: {
    officialRequirement: "As per official Springer proceedings guidelines, papers should be at least 10 pages in the standard Springer single-column template. Papers less than 10 pages will not be considered for publication. Articles extending beyond 12 pages may attract applicable extra page charges (₹50/page for national authors; $5/page for international authors).",
    submissionNote: "Submission Portal Statement: Papers must not exceed 10 pages.",
    authorClarification: "Author clarification: The supplied conference specification contains differing page-limit statements. Authors should verify the applicable requirement with the organizing committee before submission."
  },
  crcRules: [
    "Final Camera-Ready Copy (CRC) must incorporate all peer-review feedback, corrections, and reviewer suggestions.",
    "The camera-ready version is strictly used for compiling the official conference schedule, certificates, souvenir, and proceedings preparation.",
    "All author details and affiliations in the final CRC will be printed exactly as submitted; no post-acceptance author additions or alterations are permitted.",
    "A signed Springer Consent-to-Publish (Copyright Transfer) form will be required from the corresponding author upon acceptance."
  ]
};

export const ETHICAL_GUIDELINES = {
  heading: "Ethical Issues: Similarity and Machine Generated Content",
  subheading: "Academic Integrity, Originality, and Publication Ethics",
  similarityLimits: {
    overallLimit: "20%",
    singleSourceLimit: "4%",
    statementOverall: "Content similarity must be within 20%.",
    statementSingleSource: "Single-source matching must not exceed 4%."
  },
  rules: [
    {
      title: "Originality & Plagiarism",
      description: "Submitted manuscripts must contain original research, experimental findings, algorithms, and analyses. Content similarity must be within 20% and single-source matching must not exceed 4% using Turnitin / iThenticate plagiarism screening."
    },
    {
      title: "Third-Party Permissions & Copyright",
      description: "All text, figures, diagrams, and tables must either belong directly to the authors or possess verified written copyright reprint permission. Non-benchmark datasets, clinical imagery, or proprietary schematics must cite explicit permission and source."
    },
    {
      title: "Machine-Generated Content & Readability",
      description: "Manuscripts must be written in proficient English with meticulous grammar, spelling, and scientific coherence. Unedited AI-generated text exhibiting poor conceptual readability, synthetic phrasing, or factual hallucinations will result in immediate rejection."
    },
    {
      title: "Title, Abstract & Keywords Integrity",
      description: "The manuscript title and abstract must be unique and checked against prior literature. Abstracts must strictly summarize the core methodology and findings without extraneous filler text. Exactly 3 to 5 relevant technical keywords must follow the abstract."
    }
  ]
};

export const FORMATTING_SPECS = [
  {
    id: "figures",
    title: "Figures & Illustrations",
    icon: "Image",
    requirements: [
      "Minimum resolution of 800 DPI for line art and high-contrast schematics (300 DPI for photographs).",
      "All embedded text, axis labels, legends, and numbers inside figures must be crisp, legible, and consistent in font size.",
      "Figures must be numbered sequentially (e.g., Fig. 1, Fig. 2) and explicitly cited within the body text.",
      "Figure captions must be descriptive, self-explanatory, and placed directly below each figure."
    ]
  },
  {
    id: "tables",
    title: "Tables & Tabular Data",
    icon: "Table",
    requirements: [
      "Tables must be created using editable text cells in Word or LaTeX tabular environments.",
      "Do NOT insert tables as raster pictures, screenshots, or uneditable graphic objects.",
      "All tables must have clean header rows, be numbered sequentially (e.g., Table 1), and be referenced in the text.",
      "Table captions must appear directly above the table."
    ]
  },
  {
    id: "equations",
    title: "Mathematical Equations",
    icon: "FunctionSquare",
    requirements: [
      "Equations must be created using MathType or LaTeX equation editors.",
      "Do NOT submit mathematical expressions or symbols as embedded image snapshots or table objects.",
      "All primary equations must be centered, numbered sequentially with parentheses on the right margin (e.g., (1), (2)), and defined in text."
    ]
  },
  {
    id: "references",
    title: "References & Citations",
    icon: "BookmarkCheck",
    requirements: [
      "Provide complete publication details (author names, paper title, journal/conference name, volume, issue, page range, year, and DOI).",
      "All cited references must be genuine, verifiable, peer-reviewed literature available in indexed repositories.",
      "Fabricated, unverified, or non-existent AI-hallucinated references are strictly forbidden and will disqualify the paper.",
      "Avoid excessive or non-contextual self-citations. Citations must be placed directly adjacent to relevant claims."
    ]
  }
];
