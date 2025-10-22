import { motion } from "framer-motion";

const reports = [
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>),
    title: "Appointments Reports",
    describe:"Track appointment metrics, trends, and patient attendance",
    stats: [
      { label: "Total Appointments", value: "1,248" },
      { label: "Completion Rate", value: "70.2%" },
      { label: "No-Show Rate", value: "6.8%" },
    ],
    button: "View Report",
  },
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
</svg>),
    title: "Financial Reports",
    describe:"Track revenue, expenses, and financial performance",
    stats: [
      { label: "Total Revenue", value: "$128,450" },
      { label: "Net Profit", value: "$41,125" },
      { label: "Growth", value: "+12.8%" },
    ],
    button: "View Report",
  },
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg>),
    title: "Patient Visit Reports",
    describe:"Analyze patient visits, demographics, and health trends",
    stats: [
      { label: "Total Visits", value: "3,842" },
      { label: "New Patients", value: "428" },
      { label: "Avg. Duration", value: "32 min" },
    ],
    button: "View Report",
  },
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>),
    title: "Inventory Reports",
    describe:"Track inventory levels, usage, and supply chain metrics",
    stats: [
      { label: "Total Items", value: "1,245" },
      { label: "Low Stock", value: "32" },
      { label: "Inventory Value", value: "$248,320" },
    ],
    button: "View Report",
  },
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>),
    title: "Staff Performance",
    describe:"Evaluate staff productivity, attendance, and performance",
    stats: [
      { label: "Staff Count", value: "48" },
      { label: "Avg. Attendance", value: "92.5%" },
      { label: "Productivity", value: "87.3%" },
    ],
    button: "Coming Soon",
  },
  {
    icon:(<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
</svg>),
    title: "Custom Reports",
    describe:"Create customized reports with specific metrics and filters",
    stats: [
      { label: "Saved Reports", value: "5" },
      { label: "Templates", value: "12" },
      { label: "Export Options", value: "PDF, CSV, Excel" },
    ],
    button: "Coming Soon",
  },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-sm mt-1">
          Access and generate detailed reports for your clinic
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-5 border rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div>
            <div className="flex">
                  <span className="w-7 h-7 mr-3 mt-1">{report.icon}</span>
                  <h2 className="font-bold text-2xl mb-4">{report.title}</h2>
            </div>
            <p>{report.describe}</p>
              <ul className="space-y-2 text-sm mt-3">
                {report.stats.map((stat, j) => (
                  <li key={j} className="flex justify-between">
                    <span>{stat.label}</span>
                    <span className="font-medium">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 px-4 py-2  rounded-lg border text-sm font-medium">
              {report.button}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
