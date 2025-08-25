import { Users, Target, Heart, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former FEMA director with 15+ years in emergency management and AI research.',
      image: '👩‍💼',
      linkedin: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI engineer specializing in predictive modeling and crisis systems.',
      image: '👨‍💻',
      linkedin: '#'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning from MIT, expert in disaster prediction algorithms.',
      image: '👩‍🔬',
      linkedin: '#'
    },
    {
      name: 'James Thompson',
      role: 'Head of Partnerships',
      bio: 'Former UN disaster response coordinator with global NGO network.',
      image: '👨‍🤝‍👨',
      linkedin: '#'
    }
  ];

  const partners = [
    { name: 'United Nations', type: 'Global NGO', logo: '🇺🇳' },
    { name: 'Red Cross', type: 'Humanitarian', logo: '🏥' },
    { name: 'FEMA', type: 'Government', logo: '🏛️' },
    { name: 'Microsoft', type: 'Technology', logo: '💻' },
    { name: 'AWS', type: 'Cloud Infrastructure', logo: '☁️' },
    { name: 'World Bank', type: 'Financial', logo: '🏦' }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'ResilienceAI founded during COVID-19 to address crisis coordination gaps'
    },
    {
      year: '2021',
      title: 'First Deployment',
      description: 'Pilot program launched with 5 cities for wildfire prediction and response'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: '$15M raised to expand AI capabilities and team growth'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Partnerships with UN and deployment across 50+ communities worldwide'
    },
    {
      year: '2024',
      title: 'AI Breakthrough',
      description: 'Launched next-gen predictive models with 85% accuracy improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Building Resilient Communities Through AI
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe that every community deserves the tools and technology to protect its people, 
            respond to crises effectively, and build lasting resilience for the future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-3d p-8 hover:scale-105">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to advanced crisis response technology, empowering communities 
                of all sizes to predict, prepare for, and recover from emergencies with unprecedented 
                speed and coordination.
              </p>
            </div>
            <div className="card-3d p-8 hover:scale-105">
              <Heart className="h-12 w-12 text-purple-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where no community faces a crisis alone, where AI-powered insights and 
                human compassion work together to save lives, protect resources, and build 
                stronger, more resilient societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-3d p-6 text-center hover:scale-105 group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent mb-12">
            Trusted Partners & Collaborators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="card-3d p-6 text-center hover:scale-105 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">{partner.name}</h4>
                <p className="text-gray-500 text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="card-3d p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg min-w-[80px] text-center">
                  {event.year}
                </div>
                <div className="card-3d p-6 flex-1 hover:scale-[1.02]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-3d p-8 text-center hover:scale-105">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make is guided by its impact on the communities we serve.
              </p>
            </div>
            <div className="card-3d p-8 text-center hover:scale-105">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest standards in technology, service, and impact.
              </p>
            </div>
            <div className="card-3d p-8 text-center hover:scale-105">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology with heart - we never forget the human element in crisis response.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;