import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy chart data
  const chartData = [
    { name: 'Jan', total: 400, patients: 100 },
    { name: 'Feb', total: 600, patients: 150 },
    { name: 'Mar', total: 800, patients: 200 },
    { name: 'Apr', total: 1000, patients: 250 },
    { name: 'May', total: 1500, patients: 350 },
    { name: 'Jun', total: 900, patients: 220 },
    { name: 'Jul', total: 700, patients: 180 },
    { name: 'Aug', total: 500, patients: 120 },
    { name: 'Sep', total: 1100, patients: 280 },
    { name: 'Oct', total: 800, patients: 200 },
    { name: 'Nov', total: 600, patients: 150 },
    { name: 'Dec', total: 1200, patients: 300 },
  ];

  const recentAppointments = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      type: 'Check-up',
      time: 'Today 10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      name: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      type: 'Consultation',
      time: 'Today 11:30 AM',
      status: 'In Progress',
    },
    {
      id: 3,
      name: 'Robert Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      type: 'Follow-up',
      time: 'Today 09:15 AM',
      status: 'Completed',
    },
  ];

  // Appointment card component
  const AppointmentCard = ({ appointment }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'Confirmed':
          return 'bg-blue-600';
        case 'In Progress':
          return 'bg-yellow-600';
        case 'Completed':
          return 'bg-green-600';
        default:
          return 'bg-gray-500';
      }
    };

    return (
      <div className=" p-4  flex items-center space-x-4">
        <img
          src={appointment.avatar}
          alt={appointment.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-medium">{appointment.name}</h3>
          <p className="text-sm text-gray-400">{appointment.type}</p>
          <p className="text-xs text-gray-500">{appointment.time}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
              appointment.status
            )}`}
          >
            {appointment.status}
          </span>
          <button className="text-gray-400  hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4zm0-6a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  // Bar chart component
  const BarChart = ({ data }) => {
    const maxTotal = Math.max(...data.map(d => d.total));
    const chartHeight = 200;

    return (
      <svg
        className="w-full h-[300px]"
        viewBox={`0 0 ${data.length * 60} ${250}`}
        preserveAspectRatio="none"
      >
        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={d.name}
            x={i * 60 + 20}
            y={chartHeight + 20}
            textAnchor="middle"
            className="text-xs fill-gray-400"
          >
            {d.name}
          </text>
        ))}

        {/* Bars */}
        {data.map((d, i) => {
          const totalHeight = (d.total / maxTotal) * chartHeight * 0.9;
          const patientsHeight = (d.patients / maxTotal) * chartHeight * 0.9;
          const xOffset = i * 60;

          return (
            <g key={d.name} transform={`translate(${xOffset}, 0)`}>
              <rect
                x={0}
                y={chartHeight - totalHeight}
                width={20}
                height={totalHeight}
                fill="#3B82F6"
                rx="3"
              />
              <rect
                x={24}
                y={chartHeight - patientsHeight}
                width={20}
                height={patientsHeight}
                fill="#10B981"
                rx="3"
              />
            </g>
          );
        })}
      </svg>
    );
  };



  // Main content rendering
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl text-gray-500 font-bold mb-2">Overview</h2>
              <p className="text-gray-400 mb-6">
                Patient visits and revenue for the current period.
              </p>
              <div className="bg-gray-700 p-4">
                <BarChart data={chartData} />
                <div className="flex justify-center space-x-4 mt-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>total</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>patients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div >
              <h2 className="text-2xl text-gray-500 font-bold mb-2">Recent Appointments</h2>
              <p className="text-gray-400 mb-6">You have 12 appointments today.</p>
              <div className="space-y-4 text-gray-500">
                {recentAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            </div>
          </div>



        );
      default:
        return <p>Content coming soon...</p>;
    }
  };
  // 1st content
  return (
    <div className="min-h-screen  text-gray-100 p-8">
      {/* Top Navigation */}
      <nav className="flex space-x-0 mb-8">
        {['overview', 'analytics', 'reports', 'notifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2  capitalize font-medium
              ${activeTab === tab ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
            `}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className=" p-6 "
        >
          {renderContent()}
        </motion.div>


      </AnimatePresence>
    </div>
  );
};

export default App;
