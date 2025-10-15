import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { ProjectGrid } from './components/ProjectGrid.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <Navbar />
      <main className="pb-32">
        <Hero />
        <About />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
