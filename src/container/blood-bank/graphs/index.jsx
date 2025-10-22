import React from 'react';
import { motion } from 'framer-motion';

const BloodDonorCharts = () => {
  const bloodTypeData = [
    { type: 'O+', percentage: 38, color: '#ef4444' },
    { type: 'A+', percentage: 18, color: '#3b82f6' },
    { type: 'B+', percentage: 12, color: '#10b981' },
    { type: 'AB+', percentage: 6, color: '#a855f7' },
    { type: 'O-', percentage: 9, color: '#dc2626' },
    { type: 'A-', percentage: 7, color: '#2563eb' },
    { type: 'B-', percentage: 6, color: '#059669' },
    { type: 'AB-', percentage: 4, color: '#9333ea' }
  ];

  const donationFrequencyData = [
    { label: 'First Time', count: 98, height: 85 },
    { label: '2-4 Times', count: 107, height: 100 },
    { label: '5-9 Times', count: 24, height: 60 },
    { label: '10-24 Times', count: 12, height: 40 },
    { label: '25+ Times', count: 6, height: 30 }
  ];

  return (
    <div className="min-h-screen md:p-8 py-8" >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blood Type Distribution Chart */}
          <motion.div 
            className="p-8 rounded-xl shadow-sm border border-gray-200"
           
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">Donors by Blood Type</h2>
            <p className=" mb-8">Distribution of registered donors by blood type</p>
            
            {/* Percentage Labels */}
            <div className="flex justify-between items-center mb-4 px-2">
              {bloodTypeData.map((item) => (
                <div key={item.type} className="text-center">
                  <div className="text-sm font-medium mb-1">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bar Chart */}
            <div className="flex items-end justify-between gap-2 mb-6" style={{ height: '200px' }}>
              {bloodTypeData.map((item, index) => (
                <div key={item.type} className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-full rounded-t-sm"
                    style={{ 
                      backgroundColor: item.color,
                      maxWidth: '60px'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.percentage / 38) * 180}px` }}
                    transition={{ 
                      delay: 0.3 + index * 0.1, 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                  <div className="text-sm font-semibold mt-3">
                    {item.type}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Donation Frequency Chart */}
          <motion.div 
            className="p-8 rounded-xl shadow-sm border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold  mb-2">Donation Frequency</h2>
            <p className=" mb-8">Number of donors by donation frequency</p>
            
            {/* Count Labels */}
            <div className="flex justify-between items-center mb-4 px-4">
              {donationFrequencyData.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-sm font-medium mb-1">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bar Chart */}
            <div className="flex items-end justify-between gap-3 mb-6" style={{ height: '200px' }}>
              {donationFrequencyData.map((item, index) => (
                <div key={item.label} className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-full rounded-t-sm"
                    style={{ 
                      backgroundColor: '#64748b',
                      maxWidth: '70px'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.height}px` }}
                    transition={{ 
                      delay: 0.8 + index * 0.1, 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Category Labels */}
            <div className="flex justify-between gap-3 px-2">
              {donationFrequencyData.map((item) => (
                <div key={item.label} className="text-center flex-1">
                  <div className="text-xs leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorCharts;
