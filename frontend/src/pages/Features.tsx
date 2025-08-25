import { Brain, Users, Zap, TrendingUp, Shield, Globe, BarChart3, Bell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'Risk Prediction & Modeling',
      description: 'Advanced AI algorithms analyze weather patterns, infrastructure data, and social indicators to predict potential crises before they occur.',
      capabilities: [
        'Multi-source data integration (weather, seismic, social media)',
        'Machine learning risk assessment models',
        'Predictive analytics with 85% accuracy',
        'Real-time threat monitoring and alerts',
        'Historical pattern analysis and trending'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      demo: '🧠 AI processes 10,000+ data points per second'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Crisis Coordination Hub',
      description: 'Centralized command center that connects all stakeholders, resources, and response teams in real-time during emergencies.',
      capabilities: [
        'Volunteer matching and deployment system',
        'Resource allocation optimization',
        'Multi-agency communication platform',
        'Real-time status dashboards',
        'Automated task assignment and tracking'
      ],
      gradient: 'from-green-500 to-emerald-500',
      demo: '🤝 Coordinates 500+ volunteers in under 10 minutes'
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Automated Response Workflows',
      description: 'Pre-configured response protocols that activate automatically when specific crisis conditions are detected.',
      capabilities: [
        'Trigger-based automated responses',
        'Customizable workflow templates',
        'Multi-channel notification systems',
        'Escalation procedures and protocols',
        'Integration with existing emergency systems'
      ],
      gradient: 'from-orange-500 to-red-500',
      demo: '⚡ Activates response in 30 seconds of detection'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Recovery & Resilience Building',
      description: 'Post-crisis analysis and long-term resilience planning tools to help communities learn and improve from each event.',
      capabilities: [
        'Post-incident analysis and reporting',
        'Community resilience assessments',
        'Training simulation environments',
        'Performance analytics and insights',
        'Continuous improvement recommendations'
      ],
      gradient: 'from-purple-500 to-pink-500',
      demo: '📈 Improves response efficiency by 40% per incident'
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI & Machine Learning',
      specs: [
        'Deep learning neural networks',
        'Natural language processing',
        'Computer vision for satellite imagery',
        'Predictive modeling algorithms',
        'Real-time data processing'
      ]
    },
    {
      category: 'Data Integration',
      specs: [
        'Weather and climate APIs',
        'Social media monitoring',
        'IoT sensor networks',
        'Government databases',
        'Satellite and drone imagery'
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        'End-to-end encryption',
        'GDPR and HIPAA compliance',
        'Multi-factor authentication',
        'Role-based access control',
        'Audit trails and logging'
      ]
    },
    {
      category: 'Scalability',
      specs: [
        'Cloud-native architecture',
        'Auto-scaling infrastructure',
        'Global CDN deployment',
        '99.9% uptime guarantee',
        'Multi-region redundancy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Powerful Features for Complete Crisis Management
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the advanced capabilities that make ResilienceAI the most comprehensive 
            crisis response platform available today.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {features.map((feature, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
                {/* Feature Info */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="card-3d p-8 hover:scale-[1.02]">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                      <div className="text-lg font-semibold text-gray-800 mb-2">Live Demo Stat:</div>
                      <div className="text-blue-600 font-bold">{feature.demo}</div>
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="lg:w-1/2">
                  <div className="card-3d p-8 hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Key Capabilities</h3>
                    <div className="space-y-4">
                      {feature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 mr-4 flex-shrink-0`}></div>
                          <span className="text-gray-600 leading-relaxed">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Advanced Capabilities at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-3d p-6 text-center hover:scale-105 group">
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-800 mb-2">Security First</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security with end-to-end encryption</p>
            </div>
            <div className="card-3d p-6 text-center hover:scale-105 group">
              <Globe className="h-10 w-10 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-800 mb-2">Global Scale</h3>
              <p className="text-gray-600 text-sm">Deployed across 50+ countries and regions</p>
            </div>
            <div className="card-3d p-6 text-center hover:scale-105 group">
              <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-800 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">Live dashboards with actionable insights</p>
            </div>
            <div className="card-3d p-6 text-center hover:scale-105 group">
              <Bell className="h-10 w-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-800 mb-2">Smart Alerts</h3>
              <p className="text-gray-600 text-sm">AI-powered notifications with zero false positives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((category, index) => (
              <div key={index} className="card-3d p-8 hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Slack', icon: '💬' },
              { name: 'Microsoft Teams', icon: '👥' },
              { name: 'Salesforce', icon: '☁️' },
              { name: 'AWS', icon: '🔧' },
              { name: 'Google Cloud', icon: '🌐' },
              { name: 'Twilio', icon: '📱' },
              { name: 'Zoom', icon: '📹' },
              { name: 'ServiceNow', icon: '⚙️' },
              { name: 'Tableau', icon: '📊' },
              { name: 'Power BI', icon: '📈' },
              { name: 'Zapier', icon: '🔗' },
              { name: 'API Access', icon: '🔌' }
            ].map((integration, index) => (
              <div key={index} className="card-3d p-4 hover:scale-105 group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <div className="text-sm font-medium text-gray-700">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience These Features Live
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how ResilienceAI's advanced features work together in a real crisis scenario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="btn-3d bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Interactive Demo
            </a>
            <a href="/contact" className="btn-3d bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Technical Deep Dive
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;