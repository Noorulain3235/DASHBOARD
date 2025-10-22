import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Circle from "./circle";

export default function Dashboard() {
    const [faqOpen, setFaqOpen] = useState(null);

    const stats = [
        {
            id: 1, title: "Total Patients", value: "2,853", subtitle: "12.5% from last week", icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people w-7 h-7" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>

            )
        },
        {
            id: 2, title: "New Appointments", value: "148", subtitle: "4.2% from yesterday", icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar w-7 h-7" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>)
        },
        {
            id: 3, title: "Revenue", value: "$24,563", subtitle: "↑ from last week", icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-currency-dollar w-7 h-7" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
            </svg>)
        },
        {
            id: 4, title: "Active Doctors", value: "32", subtitle: "4.2% from last month", icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person w-7 h-7" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>)
        },
    ];

    const statsColors = {
        1: "bg-gradient-to-r from-blue-200 to-blue-400 text-blue-800",
        2: "bg-gradient-to-r from-green-200 to-green-400 text-green-800",
        4: "bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-800",
        3: "bg-gradient-to-r from-purple-200 to-purple-400 text-purple-800",
    };

    const faqs = [
        { q: "What insurance plans do you accept?", a: "We accept a wide range of insurance providers." },
        { q: "How do I schedule an appointment?", a: "Appointments can be scheduled via the portal or by phone." },
        { q: "What should I bring to my first appointment?", a: "Bring your ID, insurance card, and any medical records." },
        { q: "How do I access my medical records?", a: "Medical records are accessible in the Patient Portal." },
        { q: "What are your hours of operation?", a: "We are open Monday to Friday, 8 AM - 6 PM." },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-10">
            {/* Header */}
            <header>
                <h1 className="text-3xl font-bold">Widgets</h1>
                <p className="mt-2">
                    A collection of UI components and widgets for building dashboards and interfaces.
                </p>
            </header>

            {/* Stats */}
            <h1 className="text-2xl font-bold">Statistics Cards</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* className={`p-6 rounded-xl shadow-md ${statsColors[stats.id]}`} */}

                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`border rounded-xl p-4 shadow-sm  ${statsColors[s.id]}`}
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-medium">{s.title}</h2>
                            <span>{s.icon}</span>
                        </div>
                        <p className="text-2xl mt-4 font-bold">{s.value}</p>
                        <p className=" text-sm mt-2">{s.subtitle}</p>
                    </motion.div>
                ))}
            </section>

            {/* Progress Indicators */}
            <h1 className="text-2xl font-bold">Progress Indicators</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border rounded-xl p-4">
                    <h2 className="font-semibold text-2xl mb-3">Department Capacity</h2>
                    <p className="mt-2 mb-3">Current patient load by department</p>
                    {["Cardiology", "Neurology", "Pediatrics", "Orthopedics"].map((d, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between text-sm">

                                <span>{d}</span> <span>{[78, 62, 82, 45][i]}%</span>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${[78, 62, 82, 45][i]}%` }}
                                transition={{ duration: 1 }}
                                className="h-2 bg-green-400 mt-2 rounded"
                            />
                        </div>
                    ))}
                </div>

                <div className="border rounded-xl p-4">
                    <h2 className="font-semibold  text-2xl mb-3">Treatment Progress</h2>
                    <p>Patient recovery tracking</p>
                    <div className="flex md:flex-row flex-col py-10 justify-around ">
                        {["Physical", "Mental", "Overall"].map((t, i) => {
                            const values = [80, 50, 70]; // percentages
                            const colors = ["border-blue-500 ", "border-green-500", "border-purple-500"]; // different colors
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex flex-col items-center  mt-3 md:mt-0"
                                >
                                    <div
                                        className={`w-20 h-20 ${colors[i]} border-4 rounded-full flex
                                         items-center justify-center font-semibold `}
                                    >
                                        {values[i]}%
                                    </div>
                                    <p className="text-sm mt-2">{t}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Charts */}
            <h1 className="text-2xl font-semibold">Charts</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="border rounded-xl p-4">
                    <h2 className="font-semibold text-2xl mb-1">Patient Admissions</h2>
                    <p className="mb-4 mt-2 text-sm">Monthly trend for the current year</p>

                    <div className="flex items-end space-x-2 h-72 sm:h-80 md:h-96">
                        {(() => {
                            const values = [50, 80, 120, 160, 200, 240, 280, 300];
                            const maxValue = Math.max(...values); // 300
                            const chartHeight = 300; // normalize relative to max

                            return values.map((val, i) => {
                                const scaledHeight = (val / maxValue) * chartHeight;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: scaledHeight }}
                                        transition={{ delay: i * 0.1 }}
                                        className="w-4 sm:w-6 md:w-8 bg-indigo-300 rounded"
                                    />
                                );
                            });
                        })()}
                    </div>

                </div>


                {/* Pie Chart */}
                <div className="border rounded-xl p-4">
                    <Circle />
                </div>
            </section>

            {/* Reviews */}
            <h1 className="text-2xl font-semibold">Reviews & Ratings</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border rounded-xl p-4">
                    <h2 className="font-semibold mb-3">Recent Patient Reviews</h2>
                    <p>⭐ John Peterson - "Very professional and helpful."</p>
                    <p>⭐ Sarah Rodriguez - "Excellent care from the entire team."</p>
                </div>
                <div className="border rounded-xl p-4">
                    <h2 className="font-semibold mb-3">Rating Summary</h2>
                    <p>94% Positive, 6% Critical</p>
                    <div className="h-2 w-full rounded bg-gray-500 mt-2">
                        <div className="h-2 w-[92%] rounded bg-green-300" />
                    </div>

                </div>
            </section>

            {/* Timeline */}
            <h1 className="text-2xl font-semibold">Timeline</h1>
            <section className="border rounded-xl p-4">
                <h2 className="font-semibold text-2xl ">Patient Treatment Timeline</h2>
                <p className="py-3">Recent treatment history</p>
                <ul className="space-y-2 text-sm">
                    <li>✔ Initial Consultation</li>
                    <li>✔ MRI Scan</li>
                    <li>✔ Diagnosis</li>
                    <li>✔ Medication Prescribed</li>
                </ul>
            </section>

            {/* Team Cards */}
            <h1 className="text-2xl font-semibold">Team Cards</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Dr. Jennifer Wilson", "Dr. Michael Chen", "Dr. Sarah Johnson"].map((doc, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="border rounded-xl p-4 text-center"
                    >
                        <div className="w-16 h-16 rounded-full border mx-auto mb-2 overflow-hidden">
                            <img
                                src={`https://i.pravatar.cc/100?img=${i + 1}`}
                                alt={doc}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-2">{doc}</h3>
                        <p className="text-sm mt-3">Specialist</p>
                        <button className="mt-3 px-10 py-2 rounded border  hover:border-gray-400 transition">
                            View Profile
                        </button>
                    </motion.div>
                ))}
            </section>


            {/* Comments */}
            <h1 className="text-2xl font-semibold">Comments</h1>
            <section className="border rounded-xl p-4">
                <h2 className="font-semibold text-xl mb-3">Discussion Thread</h2>
                <p className="text-sm">Dr. Wilson: Patient shows signs of mild valve regurgitation...</p>
                <input className="w-full border rounded p-2 mt-3 text-sm" placeholder="Add your comment..." />
            </section>

            {/* /* FAQ */}
            <h1 className="text-2xl font-semibold">FAQ</h1>
            <section className="border rounded-xl p-4">
                <h2 className="font-semibold mb-3">Frequently Asked Questions</h2>
                {faqs.map((faq, i) => (
                    <div key={i} className="border-t first:border-0">
                        <button
                            onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                            className="flex justify-between w-full py-3 text-left"
                        >
                            {faq.q}
                            <motion.span
                                animate={{ rotate: faqOpen === i ? 180 : 0 }}
                                className="ml-2"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    className="inline-block"
                                >
                                    <path
                                        d="M6 8l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {faqOpen === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="pb-3 text-sm text-gray-500"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </section>

            {/* Alerts */}
            <h1 className="text-2xl font-semibold">Alert Cards</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Appointment Confirmed", "Prescription Expiring", "Payment Failed", "System Maintenance"].map(
                    (a, i) => {
                        const colors = ["bg-gradient-to-r from-green-200 to-green-400 text-green-800",
                            "bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-800",
                            "bg-gradient-to-r from-red-200 to-red-400 text-red-800",
                            "bg-gradient-to-r from-blue-200 to-blue-400 text-blue-800"];
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className={`border rounded-xl p-4 ${colors[i]}`}
                            >
                                <h3 className="font-semibold text-xl">{a}</h3>
                                <p className="text-sm mt-2">Alert details...</p>
                            </motion.div>
                        );
                    }
                )}
            </section>


            {/* Calendar */}
            <h1 className="text-2xl font-semibold">Calendar Widget</h1>
            <section className="border rounded-xl p-4">
                <h2 className="font-semibold mb-3">June 2024</h2>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {Array.from({ length: 30 }, (_, i) => (
                        <div key={i} className=" hover:border hover:bg-gray-500 rounded-full p-2 cursor-pointer">
                            {i + 1}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
