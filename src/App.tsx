import React from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Toaster position="top-center" expand={false} richColors />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Partners />
            <WhyChooseUs />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;