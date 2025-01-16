import React from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  BookOpen,
  Palette,
  Code2,
  Smartphone,
  Layout,
  Sparkles,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Navigation Bar */}
      <nav className="py-6 bg-[#0A0F1C] sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            V S
          </h1>
          <ul className="flex space-x-6 text-lg font-medium">
            {['Home', 'About', 'Projects', 'Skills', 'Connect'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        {/* GIF Background with low opacity */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/xc.gif"  // Replace this with your GIF URL
            alt="Background GIF"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <header className="container mx-auto px-6 py-24 md:py-40 relative text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="/assets/images/profile.JPG"
              alt="Profile"
              className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-purple-400 shadow-lg"
            />
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              Vaibhav Kumar Singh
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              <span className="text-blue-400">Flutter Developer</span> •
              <span className="text-purple-400"> UI/UX Designer</span> •
              <span className="text-pink-400"> Content Creator</span>
            </p>
          </div>
        </header>
      </div>


      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#111827]">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-all duration-300">
            I’m a passionate Flutter developer and UI/UX designer, focused on building user-friendly applications. I
            also create engaging content on platforms like Instagram and YouTube.
          </p>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#111827]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h2>

          {/* Flutter Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Smartphone className="mr-3 text-blue-400" />
              Flutter Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="mr-3 text-blue-400" size={24} />
                  <h4 className="text-xl font-semibold">Ebook Reader App</h4>
                </div>
                <p className="text-gray-300 mb-4">A sophisticated Flutter-based ebook reader with features like:</p>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Customizable reading experience</li>
                  <li>Offline book storage</li>
                </ul>
                <a
                  href="https://github.com/vaibhav7409/ebook-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-4 inline-block"
                >
                  View on GitHub
                </a>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Layout className="mr-3 text-blue-400" size={24} />
                  <h4 className="text-xl font-semibold">Food Ecommerce App</h4>
                </div>
                <p className="text-gray-300 mb-4">A feature-rich food booking application with:</p>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>Cart management</li>
                  <li>App Wallet</li>
                  <li>Attractive UI</li>
                </ul>
                <a
                  href="https://github.com/vaibhav7409/food-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-4 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Figma Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Palette className="mr-3 text-purple-400" />
              Figma Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">E-commerce UI Kit</h4>
                <p className="text-gray-300 mb-4">Basic UI design for an e-commerce platform.</p>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline"
                >
                  View on Figma
                </a>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">Portfolio Template</h4>
                <p className="text-gray-300 mb-4">A simple portfolio template design.</p>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline"
                >
                  View on Figma
                </a>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">Mobile App UI Kit</h4>
                <p className="text-gray-300 mb-4">Basic mobile app UI design for various screens.</p>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline"
                >
                  View on Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-[#111827] to-[#0A0F1C]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Flutter', icon: <Smartphone className="text-blue-400" /> },
              { name: 'Dart', icon: <Code2 className="text-blue-500" /> },
              { name: 'UI/UX', icon: <Layout className="text-purple-400" /> },
              { name: 'Figma', icon: <Palette className="text-purple-500" /> },
              { name: 'Java', icon: <Code2 className="text-pink-400" /> },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="font-semibold text-lg">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* My Creative Corner Section */}
      <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0A0F1C]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              My Creative Corner
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">Instagram</h3>
              <p className="text-gray-300 text-lg">Check out my creative posts and reels on Instagram:</p>
              <a href="https://www.instagram.com/enigmatic.stranger" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                @enigmatic.stranger
              </a>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">YouTube</h3>
              <p className="text-gray-300 text-lg">Explore my creative videos on YouTube:</p>
              <a href="https://www.youtube.com/@TrieyeSpace" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                TrieyeSpace
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Connect Section */}
      <footer id="connect" className="py-24 bg-[#0A0F1C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Let's Connect
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="www.linkedin.com/in/i-am-vaibhav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white/5 rounded-xl hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-lg border border-white/10 hover:border-blue-500/50"
            >
              <Linkedin className="mr-3" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/i.m.vaibhavv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white/5 rounded-xl hover:bg-pink-500/20 transition-all duration-300 backdrop-blur-lg border border-white/10 hover:border-pink-500/50"
            >
              <Instagram className="mr-3" /> Instagram
            </a>
            <a
              href="https://github.com/vaibhav7409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white/5 rounded-xl hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-lg border border-white/10 hover:border-purple-500/50"
            >
              <Github className="mr-3" /> GitHub
            </a>
            <a
              href="mailto:vaibhavv.kr.singh@gmail.com"
              className="flex items-center px-6 py-3 bg-white/5 rounded-xl hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-lg border border-white/10 hover:border-purple-500/50"
            >
              <Mail className="mr-3" /> Gmail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
