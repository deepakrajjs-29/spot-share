import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutConference } from './components/sections/AboutConference';
import { AboutInstitution } from './components/sections/AboutInstitution';
import { AboutDepartment } from './components/sections/AboutDepartment';
import { VenueSection } from './components/sections/VenueSection';
import { ImportantDates } from './components/sections/ImportantDates';
import { TracksSection } from './components/sections/TracksSection';
import { SpeakerSection } from './components/sections/SpeakerSection';
import { AuthorInfo } from './components/sections/AuthorInfo';
import { EthicalGuidelines } from './components/sections/EthicalGuidelines';
import { SubmissionSection } from './components/sections/SubmissionSection';
import { RegistrationSection } from './components/sections/RegistrationSection';
import { RegistrationPolicy } from './components/sections/RegistrationPolicy';
import { ModeComparison } from './components/sections/ModeComparison';
import { PublicationOpportunities } from './components/sections/PublicationOpportunities';
import { CommitteeSection } from './components/sections/CommitteeSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-teal-600 selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections in Exact Required Order */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 4. About Conference */}
        <AboutConference />

        {/* 5. About SNS College of Technology */}
        <AboutInstitution />

        {/* 6. About ECE Department */}
        <AboutDepartment />

        {/* 7. Venue Section */}
        <VenueSection />

        {/* 8. Important Dates */}
        <ImportantDates />

        {/* 9. Conference Tracks */}
        <TracksSection />

        {/* 10. Distinguished Speaker */}
        <SpeakerSection />

        {/* 11. Author Information & Guidelines */}
        <AuthorInfo />

        {/* 12. Ethical Guidelines */}
        <EthicalGuidelines />

        {/* 13. Paper Submission Section */}
        <SubmissionSection />

        {/* 14. Registration Fees */}
        <RegistrationSection />

        {/* 15. Registration Policy */}
        <RegistrationPolicy />

        {/* 16. Physical / Online Mode Comparison */}
        <ModeComparison />

        {/* 17. Publication Opportunities */}
        <PublicationOpportunities />

        {/* 18. Committee Directory */}
        <CommitteeSection />

        {/* 19. Contact Section */}
        <ContactSection />
      </main>

      {/* 20. Academic Footer */}
      <Footer />
    </div>
  );
};

export default App;
