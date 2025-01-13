import React from 'react';
import { ExternalLink, Lightbulb, Target, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          About DX Hub
        </h1>
        <p className="text-xl text-violet-200 max-w-3xl mx-auto">
          Empowering development teams with insights and tools to enhance their developer experience.
          Inspired by the innovative work at{' '}
          <a 
            href="https://www.lunationai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 inline-flex items-center"
          >
            LunationAI <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <Lightbulb className="h-12 w-12 text-violet-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-violet-200 text-lg leading-relaxed">
            We believe that exceptional developer experience is the foundation of great software. 
            By providing teams with the tools to measure and improve their DX, we help create 
            more efficient, engaged, and productive development environments.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <Target className="h-12 w-12 text-violet-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-violet-200 text-lg leading-relaxed">
            To revolutionize how teams approach developer experience by providing 
            data-driven insights and actionable metrics that lead to meaningful improvements 
            in development workflows and team satisfaction.
          </p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why DX Matters</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Zap className="h-8 w-8 text-violet-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Enhanced Productivity</h3>
              <p className="text-violet-200">
                Better developer experience leads to faster development cycles, reduced friction, 
                and more efficient use of development resources.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Users className="h-8 w-8 text-violet-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Satisfaction</h3>
              <p className="text-violet-200">
                When developers have the right tools and processes, they're more engaged, 
                motivated, and likely to produce high-quality work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          className="rounded-xl w-full h-[400px] object-cover mb-8"
        />
        <p className="text-violet-200 text-lg max-w-3xl mx-auto">
          Ready to transform your team's developer experience? Start by measuring your DX metrics 
          and identifying areas for improvement with our DX Radar tool.
        </p>
      </div>
    </div>
  );
}

export default About;