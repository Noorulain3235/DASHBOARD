import React from "react";
import { motion } from "framer-motion";
import Graph from "../graphs"


const Dashboard = () => {
  const stats = [
    {
      title: "Total Donors",
      value: "274",
      meta: "+12 from last month",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-people w-8 h-8 text-gray-500" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg>
      ),
    },
    {
      title: "Donations This Month",
      value: "38",
      meta: "+5 compared to last month",
      icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar-plus w-8 h-8 text-gray-500" viewBox="0 0 16 16">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
      ),
    },
    {
      title: "Eligible Donors",
      value: "183",
      meta: "Ready for donation",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-activity w-8 h-8 text-gray-500" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
</svg>
      ),
    },
    {
      title: "Frequent Donors",
      value: "42",
      meta: "5+ donations",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-star w-8 h-8 text-gray-500" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
      ),
    },
  ];

  // 🔄 New donor-based table
  const donorData = [
    {
      donor: "John Smith",
      type: "A+",
      contact: "john.smith@email.com",
      lastDonation: "2023-04-15",
      status: "Active",
      statusColor: "bg-green-500",
      totalDonations: 5,
      nextEligible: "2023-07-15",
    },
    {
      donor: "Michael Brown",
      type: "B+",
      contact: "michael.brown@email.com",
      lastDonation: "2023-03-20",
      status: "Inactive",
      statusColor: "bg-red-500",
      totalDonations: 3,
      nextEligible: "2023-06-20",
    },
    {
      donor: "Sarah Davis",
      type: "AB+",
      contact: "sarah.davis@email.com",
      lastDonation: "2023-04-10",
      status: "Active",
      statusColor: "bg-green-500",
      totalDonations: 7,
      nextEligible: "2023-07-10",
    },
    {
      donor: "Robert Wilson",
      type: "A-",
      contact: "robert.wilson@email.com",
      lastDonation: "2023-02-05",
      status: "Inactive",
      statusColor: "bg-gray-400",
      totalDonations: 2,
      nextEligible: "2023-05-05",
    },
    {
      donor: "Jennifer Taylor",
      type: "O+",
      contact: "jennifer.taylor@email.com",
      lastDonation: "2023-04-01",
      status: "Active",
      statusColor: "bg-green-500",
      totalDonations: 9,
      nextEligible: "2023-07-01",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold">Blood Donors</h1>
      <p className="mt-3 mb-6">
      Manage and track blood donors in your blood bank
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-4 rounded-xl shadow border flex flex-col"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-2xl">{item.title}</h2>
              <span className="text-xl">{item.icon}</span>
            </div>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
            <p className="text-sm mt-2">{item.meta}</p>
          </motion.div>
        ))}
      </div>
      
       <Graph/>
      {/* Donor Table */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-500">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-500 ">
            <tr>
              <th className="p-3">Donor</th>
              <th className="p-3">Blood Type</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Last Donation</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total Donations</th>
              <th className="p-3">Next Eligible</th>
            </tr>
          </thead>
          <tbody>
            {donorData.map((row, i) => (
              <tr key={i} className="border-b border-gray-500">
                <td className="p-3 font-medium">{row.donor}</td>
                <td className="p-3">{row.type}</td>
                <td className="p-3">{row.contact}</td>
                <td className="p-3">{row.lastDonation}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-3">{row.totalDonations}</td>
                <td className="p-3">{row.nextEligible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default Dashboard;
