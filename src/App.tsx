import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Code2, Github } from 'lucide-react';
import { languages } from './data/languages';
import LanguageCard from './components/LanguageCard';
import ProjectCard from './components/ProjectCard';
import Background3D from './components/Background3D';

function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <Background3D />
      
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <h1 className="text-2xl font-bold text-white">CodeProject Explorer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <AuthButton to="/login" variant="secondary">Sign In</AuthButton>
              <AuthButton to="/signup">Sign Up</AuthButton>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="hero-title bg-gradient-to-r from-white via-gray-100 to-indigo-200 text-transparent bg-clip-text">
            Hello Explorer
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing projects and start building your next masterpiece
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Language Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Choose a Programming Language</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language) => (
              <LanguageCard
                key={language.name}
                language={language}
                isSelected={selectedLanguage.name === language.name}
                onClick={() => setSelectedLanguage(language)}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Projects for {selectedLanguage.name}
            </h2>
            <span className="text-sm text-gray-400">
              {selectedLanguage.projects.length} projects available
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedLanguage.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-gray-800 mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            Built with ❤️ for developers. Find your next project and start building!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}