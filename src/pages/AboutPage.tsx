import { motion } from 'motion/react';
import { team } from '../data';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-orange-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            We are a movement of hope, dedicated to rescuing, restoring, and empowering street children.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Street Children Ministries began with a simple observation: too many children were sleeping on the sidewalks, searching for food in the margins of society, completely forgotten.
              </p>
              <p>
                What started as a small weekly feeding program initiated by a group of volunteers has now grown into a comprehensive support system encompassing shelter, healthcare, and education.
              </p>
              <p>
                Over the years, we've walked alongside thousands of children, helping them transition from surviving on the streets to thriving in classrooms and eventually building successful lives.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1593113580326-9f798858a74e?auto=format&fit=crop&q=80&w=1000" 
              alt="Volunteers interacting with children" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-500">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To rescue and rehabilitate orphaned and vulnerable street children by providing essential needs—shelter, food, healthcare, and education—fostering their spiritual, emotional, and physical development.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-500">Our Vision</h3>
            <p className="text-lg text-gray-700">
              A world where no child is forced to live on the streets, where every vulnerable youth has a safe home, access to quality education, and the opportunity to reach their full, God-given potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Compassion', desc: 'Acting with deep empathy and love towards every child.' },
              { title: 'Integrity', desc: 'Maintaining transparency and honesty in all our actions.' },
              { title: 'Empowerment', desc: 'Focusing on long-term sustainability and education.' },
              { title: 'Community', desc: 'Building strong support networks and inclusive families.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
