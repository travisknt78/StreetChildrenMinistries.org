import { motion } from 'motion/react';
import { successStories } from '../data';
import { Quote } from 'lucide-react';

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      <div className="bg-orange-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Real lives transformed through compassion and support.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {successStories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative min-h-[300px] md:min-h-[400px]">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative">
                <Quote className="absolute top-8 right-8 h-16 w-16 text-orange-100 right-8 top-8 opacity-50" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-orange-500 font-medium mb-8">Age {story.age}</p>
                <div className="text-lg text-gray-600 leading-relaxed italic relative z-10">
                  "{story.story}"
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
