import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { ResumePreview } from './components/ResumePreview.jsx';
import { About } from './components/About.jsx';
import { Quantum } from './components/Quantum.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <Navbar />
      <main className="pb-32">
        <Hero />
        <ResumePreview />
        <About />
        <Quantum />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
