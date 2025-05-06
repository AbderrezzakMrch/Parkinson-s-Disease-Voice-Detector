import React from 'react';
import { Link } from 'react-router-dom';
import oldMan from '../assets/6657010.jpg';
import { FaMicrophone, FaBrain, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  const features = [
    {
      icon: <FaMicrophone className="text-blue-500 text-2xl" />,
      title: "Voice Recording",
      desc: "Simple voice capture using your device's microphone"
    },
    {
      icon: <FaBrain className="text-blue-500 text-2xl" />,
      title: "AI Analysis",
      desc: "Advanced machine learning detects subtle patterns"
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: "Detailed Results",
      desc: "Get clear indicators of potential symptoms"
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: "Privacy Protected",
      desc: "Your data is processed securely and never stored"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden pt-14">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Image at top for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs md:hidden mb-8"
        >
          <img 
            src={oldMan} 
            alt="Parkinson's detection" 
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
        
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Parkinson's Disease <span className="text-blue-600">Voice Detector</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Early detection through voice analysis. Our AI identifies potential Parkinson's markers with clinically validated accuracy.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/record"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
            >
              Start Free Test
            </Link>
          </motion.div>
        </motion.div>

        {/* Image on right for desktop */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:block absolute right-0 top-1/4 w-1/3 max-w-xl"
        >

        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-800 mb-12"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Test Your Voice?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            It only takes 5 seconds and could provide valuable health insights.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/record"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
            >
              Begin Analysis Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;