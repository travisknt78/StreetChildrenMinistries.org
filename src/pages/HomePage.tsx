import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stats } from '../data';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Bringing Hope to <br /> Vulnerable Children
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            We provide education, shelter, food, healthcare, and emotional support to orphaned and vulnerable street children.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/donate" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
            <Link 
              to="/about" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every child deserves a chance to shine.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Street Children Ministries is dedicated to breaking the cycle of poverty and homelessness. For over a decade, we have been a beacon of hope for children who have nowhere else to turn.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through comprehensive programs focusing on education, nutrition, and emotional well-being, we empower these young minds to build a brighter future for themselves and their communities.
              </p>
              <Link to="/programs" className="text-orange-500 font-semibold flex items-center hover:text-orange-600 group text-lg">
                Explore our programs
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
                alt="Children smiling" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-xl text-gray-600">Together, we are making a difference every single day.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center border border-orange-100"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Changing Lives</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Your support, whether through donations or volunteering, can transform the life of a vulnerable child. Be part of their success story.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/donate" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
            Make a Donation
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
            Become a Volunteer
          </Link>
        </div>
      </section>
    </div>
  );
}
