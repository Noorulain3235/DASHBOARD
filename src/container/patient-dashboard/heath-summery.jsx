import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Custom SVG icons
const HeartIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21s-6-4.35-9-8.5S3.5 3 7.5 3c2.1 0 3.57 1.68 4.5 2.9C13.93 4.68 15.4 3 17.5 3 21.5 3 24 8.5 21 12.5S12 21 12 21z" />
  </motion.svg>
);

const ActivityIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </motion.svg>
);

const DropletIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
  </motion.svg>
);

const UserIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z" />
  </motion.svg>
);

const ClockIcon = () => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </motion.svg>
);

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { id: "Overview", label: "Overview" },
    { id: "Appointments", label: "Appointments" },
    { id: "Medications", label: "Medications" },
    { id: "Records", label: "Records" },
    { id: "Vitals", label: "Vitals" },
  ];

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.2 } },
  };

  const MetricCard = ({ icon: Icon, title, value, range, percentage }) => (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <div className="p-2">
          <Icon />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-base">{value}</div>
        <div className="w-full h-2 rounded-full overflow-hidden mt-2 bg-gray-600">
          <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full rounded-full bg-white border border-gray-600" />
        </div>
        <p className="text-sm">{range}</p>
      </div>
    </motion.div>
  );

  const AppointmentCard = ({ doctor, specialty, date, time, type, timeLabel, avatar }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="items-center justify-between p-4 border rounded-xl mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: avatar }}>
          <UserIcon />
        </div>
        <div>
          <h3 className="font-semibold">{doctor}</h3>
          <p className="text-sm">{specialty}</p>
          <p className="font-medium mt-1">{date}</p>
          <p className="font-medium mt-1">{time}</p>
          <p className="text-sm">{type}</p>
        </div>
      </div>
      <div className="md:ml-10 mt-3">
        <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: timeLabel === "Tomorrow" ? "#dbeafe" : "#f3e8ff", color: timeLabel === "Tomorrow" ? "#1d4ed8" : "#7c3aed" }}>
          {timeLabel}
        </span>
      </div>
    </motion.div>
  );

  // ----------------- CONTENT -----------------
  const OverviewContent = () => (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="rounded-2xl p-6 border lg:col-span-2">
        <h2 className="text-2xl font-bold mb-2">Health Summary</h2>
        <p className="mb-6">Your recent health metrics and goals</p>
        <MetricCard icon={HeartIcon} title="Heart Rate" value="72 BPM" range="Normal: 60-100 BPM" percentage={72} />
        <MetricCard icon={ActivityIcon} title="Blood Pressure" value="118/78 mmHg" range="Normal: Below 120/80" percentage={85} />
        <MetricCard icon={DropletIcon} title="Glucose Level" value="98 mg/dL" range="Normal: 70-140" percentage={65} />
      </div>
      <div className="rounded-2xl p-6 border">
        <h2 className="text-2xl font-bold mb-2">Upcoming Appointments</h2>
        <p className="mb-6">Your scheduled visits</p>
        <AppointmentCard doctor="Dr. Johnson" specialty="Cardiology" date="May 15, 2023" time="10:30 AM" type="Annual checkup" timeLabel="Tomorrow" avatar="#6366f1" />
        <AppointmentCard doctor="Dr. Martinez" specialty="Dermatology" date="May 22, 2023" time="2:15 PM" type="Skin examination" timeLabel="Next Week" avatar="#10b981" />
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full p-3 border rounded-xl font-medium hover:shadow-md transition-shadow mt-4">
          View All Appointments
        </motion.button>
      </div>
    </motion.div>
  );

  const AppointmentsContent = () => (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="p-6 border rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Appointments</h2>
      <p className="mb-4">Here are your upcoming and past appointments.</p>
      <AppointmentCard doctor="Dr. Smith" specialty="Neurology" date="June 1, 2023" time="11:00 AM" type="Consultation" timeLabel="Upcoming" avatar="#f59e0b" />
    </motion.div>
  );

  const MedicationsContent = () => (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="p-6 border rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Medications</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Aspirin 75mg – Once daily</li>
        <li>Metformin 500mg – Twice daily</li>
      </ul>
    </motion.div>
  );

  const RecordsContent = () => (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="p-6 border rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Medical Records</h2>
      <p className="mb-4">Your past records and reports are available here.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Blood Test – March 2023</li>
        <li>X-ray – February 2023</li>
      </ul>
    </motion.div>
  );

  const VitalsContent = () => (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="p-6 border rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Vitals</h2>
      <p>Latest vitals data:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Heart Rate: 72 BPM</li>
        <li>Blood Pressure: 118/78 mmHg</li>
        <li>Glucose: 98 mg/dL</li>
      </ul>
    </motion.div>
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} className="flex  md:w-[650px] flex-wrap mb-8 rounded-xl overflow-hidden">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              variants={tabVariants}
              animate={activeTab === tab.id ? "active" : "inactive"}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[120px] px-4 py-2 font-medium transition-all duration-200 relative 
                ${activeTab === tab.id ? "bg-gray-600" : "bg-gray-400 hover:bg-gray-500"}
                ${index === 0 ? "rounded-l-lg" : ""} 
                ${index === tabs.length - 1 ? "rounded-r-lg" : ""}`}
            >
              {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 border-2 rounded-lg" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}>
            {activeTab === "Overview" && <OverviewContent />}
            {activeTab === "Appointments" && <AppointmentsContent />}
            {activeTab === "Medications" && <MedicationsContent />}
            {activeTab === "Records" && <RecordsContent />}
            {activeTab === "Vitals" && <VitalsContent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PatientDashboard;
