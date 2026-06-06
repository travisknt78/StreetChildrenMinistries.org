import { motion } from 'motion/react';
import { Heart, CreditCard, Building, Wallet, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [10, 25, 50, 100, 250];

  return (
    <div className="bg-gray-50">
      <div className="bg-orange-500 py-24 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full backdrop-blur-sm mb-6"
          >
            <Heart className="h-10 w-10 text-white fill-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Make a Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Your generous donation helps us provide essential care, education, and shelter to children who need it most.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Donation Amount</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
                {amounts.map((value) => (
                  <button
                    key={value}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      amount === value 
                        ? 'bg-orange-500 text-white border-2 border-orange-500 shadow-md' 
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold">$</span>
                </div>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(null);
                  }}
                  className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-0 outline-none transition-colors text-lg"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>
                
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg flex justify-center items-center">
                  Continue to Payment
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Give</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Building className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Bank Transfer</h4>
                    <p className="text-sm text-gray-600 mt-1">SCM Global Bank<br/>Acct: 1234567890<br/>Routing: 123456789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Wallet className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Cryptocurrency</h4>
                    <p className="text-sm text-gray-600 mt-1">We accept Bitcoin and Ethereum donations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle2 className="text-orange-500 mr-2" />
                Secure & Transparent
              </h3>
              <p className="text-gray-600 mb-4">
                Your donation is securely processed and 100% of public donations go directly towards our programs for the children.
              </p>
              <div className="flex items-center text-gray-500 text-sm font-medium">
                <CreditCard className="h-5 w-5 mr-2" />
                Using 256-bit SSL encryption
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
