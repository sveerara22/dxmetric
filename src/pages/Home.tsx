import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Code, Users, Timer, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Elevate Your Developer Experience
        </h1>
        <p className="text-xl text-violet-200 max-w-3xl mx-auto">
          Unlock the full potential of your development team with enhanced productivity,
          streamlined workflows, and superior software quality.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Zap className="h-12 w-12 text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Enhanced Efficiency</h3>
          <p className="text-violet-200">
            Optimize workflows and eliminate bottlenecks to maximize developer productivity.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Users className="h-12 w-12 text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Team Engagement</h3>
          <p className="text-violet-200">
            Foster a culture of collaboration and continuous improvement.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Code className="h-12 w-12 text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Software Quality</h3>
          <p className="text-violet-200">
            Maintain high standards with better testing and code review processes.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Rocket className="h-12 w-12 text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Speed of Delivery</h3>
          <p className="text-violet-200">
            Accelerate development cycles and reduce time-to-market with streamlined processes.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Sparkles className="h-12 w-12 text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Ease of Delivery</h3>
          <p className="text-violet-200">
            Simplify deployment workflows and automate repetitive tasks for smoother releases.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/radar"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 transition-colors duration-300"
        >
          <Timer className="h-5 w-5 mr-2" />
          Measure Your DX
        </Link>
      </div>

      <div className="mt-24">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          className="rounded-xl w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default Home;