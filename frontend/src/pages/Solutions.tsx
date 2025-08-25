import { Link } from 'react-router-dom';
import { Building, Heart, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Solutions = () => {
  const solutions = [
    {
      id: 'cities',
      title: 'Cities & Governments',
      icon: <Building className="h-12 w-12" />,
      description: 'Comprehensive disaster management and resource allocation for municipal governments',
      problems: [
        'Delayed emergency response coordination',
        'Inefficient resource allocation during crises',
        'Lack of predictive capabilities for disasters',
        'Poor inter-agency communication'
      ],
      features: [
        'AI-powered disaster simulation and modeling',
        'Real-time resource allocation optimization',
        'Multi-agency coordination dashboard',
        'Predictive risk assessment and early warning',
        'Automated emergency response workflows',
        'Post-disaster recovery planning tools'
      ],
      benefits: [
        '40% faster emergency response times',
        '60% improvement in resource utilization',
        '85% better inter-agency coordination',
        'Reduced disaster impact on communities'
      ],
      cta: 'Schedule Government Demo',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'organizations',
      title: 'Organizations & Enterprises',
      icon: <Heart className="h-12 w-12" />,
      description: 'Business continuity and crisis management for hospitals, utilities, and supply chains',
      problems: [
        'Unexpected service outages and disruptions',
        'Inadequate business continuity planning',
        'Supply chain vulnerabilities',
        'Limited crisis communication capabilities'
      ],
      features: [
        'Infrastructure outage detection and prediction',
        'Business continuity planning automation',
        'Supply chain risk monitoring',
        'Crisis communication platforms',
        'Stakeholder notification systems',
        'Recovery time optimization tools'
      ],
      benefits: [
        '50% reduction in downtime duration',
        '70% faster crisis communication',
        '45% improvement in supply chain resilience',
        'Enhanced stakeholder confidence'
      ],
      cta: 'Book Enterprise Demo',
      gradient: 'from-green-500 to-green-700'
    },
    {
      id: 'communities',
      title: 'Communities & NGOs',
      icon: <Users className="h-12 w-12" />,
      description: 'Volunteer coordination and community resilience building for NGOs and local groups',
      problems: [
        'Difficulty coordinating volunteers during emergencies',
        'Limited community preparedness training',
        'Ineffective emergency communication',
        'Lack of resource visibility and sharing'
      ],
      features: [
        'Volunteer management and matching system',
        'Community alert and notification platform',
        'Emergency preparedness training modules',
        'Resource sharing and coordination tools',
        'Community resilience assessment',
        'Local emergency response planning'
      ],
      benefits: [
        '3x increase in volunteer engagement',
        '80% improvement in community preparedness',
        '90% faster emergency notifications',
        'Stronger community resilience networks'
      ],
      cta: 'Start Community Program',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Tailored Solutions for Every Crisis Response Need
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're managing a city, running an organization, or building community resilience, 
            ResilienceAI adapts to your unique challenges and requirements.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {solutions.map((solution, index) => (
            <div key={solution.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
              {/* Content */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="card-3d p-8 hover:scale-[1.02]">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${solution.gradient} text-white mb-6`}>
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{solution.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Challenges We Address:</h3>
                    <ul className="space-y-2">
                      {solution.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-600">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/demo" 
                    className={`btn-3d bg-gradient-to-r ${solution.gradient} text-white hover:scale-105 inline-flex items-center`}
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Features & Benefits */}
              <div className="lg:w-1/2">
                <div className="grid gap-6">
                  {/* Features */}
                  <div className="card-3d p-6 hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Features</h3>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="card-3d p-6 hover:scale-[1.02] bg-gradient-to-br from-green-50 to-blue-50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            {benefit.split(' ')[0]}
                          </div>
                          <div className="text-sm text-gray-600">
                            {benefit.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Choose Your Solution
          </h2>
          <div className="card-3d overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Cities & Gov</th>
                    <th className="px-6 py-4 text-center">Organizations</th>
                    <th className="px-6 py-4 text-center">Communities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Disaster Prediction</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Resource Allocation</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">Basic</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Volunteer Management</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Business Continuity</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Agency Coordination</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to See ResilienceAI in Action?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a personalized demo tailored to your specific use case and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-3d bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Schedule Demo
            </Link>
            <Link to="/contact" className="btn-3d bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;