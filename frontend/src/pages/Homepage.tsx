import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {
  const stats = [
    { value: '85%', label: 'Faster Detection', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { value: '60%', label: 'Better Resource Allocation', icon: '📊', color: 'from-blue-400 to-purple-500' },
    { value: '2M+', label: 'Lives Impacted', icon: '❤️', color: 'from-pink-400 to-red-500' },
    { value: '150+', label: 'Communities Served', icon: '🏘️', color: 'from-green-400 to-teal-500' }
  ];

  const solutions = [
    {
      icon: '🌪️',
      title: 'Natural Disasters',
      description: 'Predict, prepare, and respond to earthquakes, floods, hurricanes, and wildfires'
    },
    {
      icon: '⚡',
      title: 'Infrastructure Outages',
      description: 'Monitor and manage power, water, and communication system disruptions'
    },
    {
      icon: '🚛',
      title: 'Supply Chain Disruptions',
      description: 'Maintain critical supply flows during emergencies and crisis situations'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Detect',
      description: 'AI monitors multiple data sources to identify emerging threats and risks',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Coordinate',
      description: 'Automatically match resources with needs and coordinate response teams',
      icon: '🤝'
    },
    {
      step: '03',
      title: 'Recover',
      description: 'Track progress, optimize recovery efforts, and build long-term resilience',
      icon: '🔄'
    }
  ];

  const testimonials = [
    {
      quote: "ResilienceAI helped us reduce emergency response time by 40% during the recent flooding.",
      author: "Sarah Chen",
      role: "Emergency Management Director",
      organization: "Metro City Council"
    },
    {
      quote: "The AI-powered predictions gave us crucial hours to prepare our community.",
      author: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      organization: "Regional Hospital Network"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      {/* Enhanced Hero Section with 3D Effects */}
      <section className="relative py-32 px-6 text-center overflow-hidden mt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl floating-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl floating-slow"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* 3D Floating Shield Icon */}
          <div className="floating-animation mb-12 tilt-3d">
            <div className="relative inline-block">
              <Shield className="h-24 w-24 text-blue-600 mx-auto mb-6 drop-shadow-2xl" />
              <div className="absolute inset-0 h-24 w-24 mx-auto bg-blue-600/20 rounded-full blur-xl pulse-glow"></div>
            </div>
          </div>
          
          {/* Enhanced Title with Holographic Effect */}
          <h1 className="text-7xl font-black mb-8 slide-in-up">
            <span className="holographic">AI-Powered Crisis Response</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              for Stronger Communities
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed slide-in-up" style={{animationDelay: '0.2s'}}>
            Detect, respond, and recover faster with <span className="font-bold text-blue-600">ResilienceAI</span>. 
            Our intelligent platform helps communities prepare for, respond to, and recover from emergencies 
            with <span className="neon-glow text-purple-600">unprecedented speed</span> and coordination.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/demo" className="btn-3d-primary text-xl px-12 py-5 shimmer">
              🚀 Request a Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link to="/register" className="btn-3d glass-effect text-blue-600 border-2 border-blue-600/30 hover:bg-blue-50/50 text-xl px-12 py-5">
              ✨ Get Started Free
            </Link>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 text-6xl floating-animation opacity-20">🛡️</div>
          <div className="absolute top-20 right-20 text-5xl floating-delayed opacity-20">⚡</div>
          <div className="absolute bottom-10 left-20 text-4xl floating-slow opacity-20">🌍</div>
          <div className="absolute bottom-20 right-10 text-5xl floating-animation opacity-20">🤝</div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
            Crisis Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card-3d p-8 text-center hover:scale-105 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-12">
            How ResilienceAI Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="card-3d p-8 text-center hover:scale-105 group relative">
                <div className="text-sm font-bold text-blue-600 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Stats with 3D Effects */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl floating-delayed"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-5xl font-black text-center mb-16 slide-in-up">
            <span className="holographic">Real Impact,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="card-3d p-8 text-center tilt-3d group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Floating Icon */}
                <div className="text-6xl mb-6 floating-animation group-hover:scale-125 transition-transform duration-500 relative z-10">
                  {stat.icon}
                </div>
                
                {/* Animated Value */}
                <div className={`text-4xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-700 font-semibold text-lg relative z-10">{stat.label}</div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                {/* Shimmer Effect */}
                <div className="shimmer absolute inset-0"></div>
              </div>
            ))}
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute -top-10 -left-10 text-8xl opacity-10 floating-slow">📊</div>
          <div className="absolute -bottom-10 -right-10 text-8xl opacity-10 floating-animation">🎯</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Trusted by Crisis Response Leaders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-3d p-8 hover:scale-105">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Crisis Response?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of communities already using ResilienceAI to save lives and protect resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-3d bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Book a Demo
            </Link>
            <Link to="/solutions" className="btn-3d bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Homepage;