import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFlask, FaChartLine, FaMicrophone, FaShieldAlt, FaClinicMedical, FaQuestionCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-blue-50 to-white pb-14">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Parkinson's Voice Detection</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revolutionizing early detection through advanced voice analysis technology
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-8">
          <div className="p-6 md:p-8 space-y-8">
            {/* Innovation Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaFlask className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Our Innovation</h2>
              </div>
              <p className="text-gray-600 pl-16">
                This cutting-edge application uses voice analysis and machine learning to detect early signs 
                of Parkinson's disease years before physical symptoms appear.
              </p>
            </motion.section>

            {/* Science Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">The Science Behind It</h2>
              </div>
              <p className="text-gray-600 pl-16 mb-3">
                Parkinson's affects speech characteristics including:
              </p>
              <ul className="list-disc pl-20 space-y-2 text-gray-600">
                <li>Reduced vocal loudness and pitch variation</li>
                <li>Increased breathiness or hoarseness</li>
                <li>Slower speech rate</li>
                <li>More variable speech timing</li>
              </ul>
            </motion.section>

            {/* How To Use */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaMicrophone className="text-purple-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">How To Use</h2>
              </div>
              <ol className="list-decimal pl-20 space-y-3 text-gray-600">
                <li>Record yourself speaking (read our standard passage)</li>
                <li>Our system analyzes 132+ vocal features</li>
                <li>Receive a detailed report</li>
              </ol>
            </motion.section>

            {/* Clinical Validation */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaClinicMedical className="text-red-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Clinical Validation</h2>
              </div>
              <p className="text-gray-600 pl-16">
                Developed with leading neurologists, our technology has shown 85-98% accuracy 
                in clinical trials.
              </p>
            </motion.section>

            {/* Disclaimer */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-blue-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Important Disclaimer</h2>
              </div>
              <p className="text-gray-600 pl-16">
                This tool is not a diagnostic device. Always consult a medical professional.
              </p>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <FaQuestionCircle className="text-yellow-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">FAQs</h2>
              </div>
              <div className="space-y-4 pl-16">
                <div>
                  <h3 className="font-medium text-gray-800">Recording length?</h3>
                  <p className="text-gray-600 mt-1">30-60 seconds is optimal.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">What to say?</h3>
                  <p className="text-gray-600 mt-1">Read our passage or describe your day.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Data privacy?</h3>
                  <p className="text-gray-600 mt-1">Recordings are deleted after analysis.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mb-8"
        >
          <Link 
            to="/record" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Start Voice Test
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;