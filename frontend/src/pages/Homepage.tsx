import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {
  const stats = [
    { value: '85%', label: 'Faster Detection', icon: '⚡' },
    { value: '60%', label: 'Better Resource Allocation', icon: '📊' },
    { value: '2M+', label: 'Lives Impacted', icon: '❤️' },
    { value: '150+', label: 'Communities Served', icon: '🏘️' }
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
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="floating-animation mb-8">
            <Shield className="h-20 w-20 text-blue-600 mx-auto mb-6" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            AI-Powered Crisis Response for Stronger Communities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Detect, respond, and recover faster with ResilienceAI. Our intelligent platform helps communities 
            prepare for, respond to, and recover from emergencies with unprecedented speed and coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-3d-primary text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/register" className="btn-3d bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Get Started Free
            </Link>
          </div>
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

      {/* Impact Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
            Real Impact, Measurable Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card-3d p-6 text-center hover:scale-105 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
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