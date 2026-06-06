import { motion } from 'motion/react';
import { programs } from '../data';
import * as Icons from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      <div className="bg-orange-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Our Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            A holistic approach to rescuing and empowering street children.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {programs.map((program, index) => {
            // @ts-ignore
            const Icon = Icons[program.icon] || Icons.HelpCircle;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-stretch`}
              >
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl min-h-[300px] relative">
                  <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{program.description}</p>
                  
                  <div className="mt-auto">
                    <a href="/donate" className="text-orange-500 font-semibold flex items-center hover:text-orange-600 group">
                      Support this program
                      <Icons.ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
