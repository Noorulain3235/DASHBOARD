import React from 'react';
import { motion } from 'framer-motion';
import Graphs from './graphs'

const Dashboard = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.02, y: -5, transition: { duration: 0.2, ease: "easeInOut" } }
    };

    const numberVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { delay: 0.5, type: "spring", stiffness: 300, damping: 20 } }
    };

    const badgeVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.3 } }
    };

    // Simple SVG icons with Framer Motion
    const CalendarIcon = () => (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ rotate: -15 }}
        >
            <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                ry="2"
                strokeWidth="2"
            />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
            <line x1="4" y1="10" x2="20" y2="10" strokeWidth="2" />
        </motion.svg>
    );

    const FileIcon = () => (
        <motion.svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </motion.svg>
    );

    const UsersIcon = () => (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-7 h-7 text-orange-300"
        >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </motion.svg>
    );

    const TasksIcon = () => (
        <motion.svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M9 12h6M9 16h6M9 8h6" />
        </motion.svg>
    );

    const ArrowIcon = () => (
        <motion.svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5-5-5-5" />
        </motion.svg>
    );

    const Card = ({ Icon, title, number, description, buttonText, badges }) => (
        <motion.div variants={cardVariants} whileHover="hover" className="rounded-2xl p-6 relative overflow-hidden cursor-pointer group border">
            <div className="relative z-10">
                <div className="p-3">
                    <Icon />
                </div>
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">

                        <div>
                            <h3 className="font-medium text-lg">{title}</h3>
                        </div>
                    </div>

                    {badges && (
                        <div className="flex flex-col gap-1">
                            {badges.map((badge, index) => (
                                <motion.span
                                    key={index}
                                    variants={badgeVariants}
                                    className="text-xs  font-medium px-2 py-1 "
                                >
                                    {badge.text}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </div>

                <motion.div variants={numberVariants} className="mb-2">
                    <span className="text-5xl font-normal tracking-tight">{number}</span>
                </motion.div>

                <p className="text-sm mb-6  leading-relaxed">{description}</p>

                <motion.button whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}
                 className="text-sm font-medium flex hover:underline items-center gap-1">
                    {buttonText}
                    <ArrowIcon />
                </motion.button>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Welcome back, Dr. Sarah</h1>
                    <p className="text-lg">Here's what's happening with your patients today.</p>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card Icon={CalendarIcon} title="Appointments" number="12" description="Today's consultations" buttonText="View Schedule" badges={[{ text: '3 urgent' }]} />
                    <Card Icon={FileIcon} title="Pending Reports" number="7" description="Lab results awaiting review" buttonText="Review Reports" badges={[{ text: '2 ready' }]} />
                    <Card Icon={UsersIcon} title="Active Patients" number="143" description="Total patient count this week" buttonText="Patient Records" badges={[{ text: '8 new' }]} />
                    <Card Icon={TasksIcon} title="Pending Tasks" number="5" description="Tasks requiring attention" buttonText="View Tasks" badges={[{ text: '2 high priority' }]} />
                </motion.div>
            </div>
            <Graphs/>
        </div>
    );
};

export default Dashboard;
