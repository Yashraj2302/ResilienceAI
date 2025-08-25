import { useState } from 'react';
import { Play, Pause, RotateCcw, AlertTriangle, Users, MapPin, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    useCase: '',
    phone: ''
  });

  const demoSteps = [
    {
      title: 'Crisis Detection',
      description: 'AI detects unusual seismic activity patterns indicating potential earthquake',
      time: '00:00',
      status: 'detecting',
      data: {
        riskLevel: 'High',
        confidence: '94%',
        affectedArea: '15 km radius',
        estimatedImpact: '50,000 people'
      }
    },
    {
      title: 'Automated Response',
      description: 'System automatically activates emergency protocols and notifies response teams',
      time: '00:30',
      status: 'responding',
      data: {
        teamsNotified: 12,
        volunteersAlerted: 150,
        resourcesDeployed: 8,
        evacuationRoutes: 'Activated'
      }
    },
    {
      title: 'Coordination Hub',
      description: 'Real-time coordination of all response efforts through centralized dashboard',
      time: '02:15',
      status: 'coordinating',
      data: {
        activeResponders: 89,
        safeZonesOpen: 6,
        evacuated: '12,500 people',
        medicalUnits: 15
      }
    },
    {
      title: 'Recovery Planning',
      description: 'AI analyzes response effectiveness and generates recovery recommendations',
      time: '24:00',
      status: 'recovering',
      data: {
        responseTime: '18 minutes',
        efficiency: '87%',
        lessonsLearned: 23,
        improvementAreas: 5
      }
    }
  ];

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentStep < demoSteps.length - 1) {
      const timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    // Handle demo request submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            See ResilienceAI in Action
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Experience a simulated earthquake response scenario and see how our AI-powered platform 
            coordinates crisis response in real-time.
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="card-3d p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Live Crisis Simulation</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlay}
                  className="btn-3d-primary flex items-center"
                >
                  {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isPlaying ? 'Pause' : 'Start Demo'}
                </button>
                <button
                  onClick={handleReset}
                  className="btn-3d bg-gray-500 text-white hover:bg-gray-600 flex items-center"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Reset
                </button>
              </div>
            </div>

            {/* Demo Timeline */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="text-xs text-gray-600 text-center max-w-20">
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Step Display */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-800">{demoSteps[currentStep].title}</h3>
                  <span className="ml-auto text-sm text-gray-500">{demoSteps[currentStep].time}</span>
                </div>
                <p className="text-gray-600 mb-6">{demoSteps[currentStep].description}</p>
                
                <div className="space-y-3">
                  {Object.entries(demoSteps[currentStep].data).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-semibold text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Dashboard Preview */}
              <div className="card-3d p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Live Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                    <div className="text-2xl font-bold text-red-600">
                      {currentStep === 0 ? '1' : currentStep === 1 ? '1' : '0'}
                    </div>
                    <div className="text-sm text-red-800">Active Alerts</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Users className="h-8 w-8 text-blue-500 mb-2" />
                    <div className="text-2xl font-bold text-blue-600">
                      {currentStep === 0 ? '0' : currentStep === 1 ? '150' : currentStep === 2 ? '89' : '45'}
                    </div>
                    <div className="text-sm text-blue-800">Active Responders</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <MapPin className="h-8 w-8 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-green-600">
                      {currentStep <= 1 ? '0' : currentStep === 2 ? '6' : '8'}
                    </div>
                    <div className="text-sm text-green-800">Safe Zones</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Activity className="h-8 w-8 text-purple-500 mb-2" />
                    <div className="text-2xl font-bold text-purple-600">
                      {currentStep === 0 ? '94%' : currentStep === 1 ? '78%' : currentStep === 2 ? '87%' : '92%'}
                    </div>
                    <div className="text-sm text-purple-800">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Request a Personalized Demo
            </h2>
            <p className="text-xl text-gray-600">
              See how ResilienceAI can be customized for your specific use case and requirements.
            </p>
          </div>

          <div className="card-3d p-8">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input-3d w-full"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  className="input-3d w-full"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-3d w-full"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@organization.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="input-3d w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Use Case / Requirements
                </label>
                <textarea
                  name="useCase"
                  rows={4}
                  className="input-3d w-full resize-none"
                  value={formData.useCase}
                  onChange={handleChange}
                  placeholder="Tell us about your specific crisis response needs and challenges..."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="btn-3d-primary w-full text-lg py-4"
                >
                  Schedule My Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            What You'll See in Your Demo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-3d p-6 text-center hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customized Scenarios</h3>
              <p className="text-gray-600">Demo tailored to your specific crisis types and organizational needs</p>
            </div>
            <div className="card-3d p-6 text-center hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Real Data Integration</h3>
              <p className="text-gray-600">See how your existing systems and data sources integrate seamlessly</p>
            </div>
            <div className="card-3d p-6 text-center hover:scale-105">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Implementation Roadmap</h3>
              <p className="text-gray-600">Get a clear path from demo to full deployment in your organization</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Demo;