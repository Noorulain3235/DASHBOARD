import React, { useState } from "react";
import { motion } from "framer-motion";

const DoctorSchedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 11)); // Sept 11, 2025
    const [view, setView] = useState("day");

    // Sample data
    const appointments = {
        "2025-09-11": [
            {
                id: 1,
                patient: "Robert Wilson",
                time: "11:00 - 12:00",
                type: "Procedure",
                doctor: "Dr. Lisa Patel",
                status: "Confirmed",
            },
        ],
         "2025-09-12": [
            {
                id: 2,
                patient: "Alex Wilson",
                time: "11:00 - 12:00",
                type: "Procedure",
                doctor: "Dr. Lisa Patel",
                status: "Confirmed",
            },
        ],
        "2025-09-14": [
            {
                id: 3,
                patient: "john Robert ",
                time: "11:00 - 12:00",
                type: "Procedure",
                doctor: "Dr. Lisa Patel",
                status: "Confirmed",
            },
        ],
    };

    const formatDateKey = (date) => {
        return date.toISOString().split("T")[0];
    };

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const renderCalendar = () => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = daysInMonth(year, month);

        const weeks = [];
        let day = 1 - firstDay;

        for (let w = 0; w < 6; w++) {
            const week = [];
            for (let d = 0; d < 7; d++) {
                const currentDate = new Date(year, month, day);
                const isCurrentMonth = day > 0 && day <= totalDays;
                const isSelected =
                    currentDate.toDateString() === selectedDate.toDateString();

                week.push(
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        key={d}
                        onClick={() => isCurrentMonth && setSelectedDate(currentDate)}
                        className={`w-8 h-8 flex items-center justify-center rounded
                             ${isSelected ? "ring-2 ring-gray-600 font-bold" : ""
                            }`}
                    >
                        {isCurrentMonth ? day : ""}
                    </motion.button>
                );
                day++;
            }
            weeks.push(<div key={w} className="flex justify-between">{week}</div>);
        }
        return weeks;
    };

    const dateKey = formatDateKey(selectedDate);
    const todaysAppointments = appointments[dateKey] || [];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold flex-1 ">
                    Appointment Calendar
                </h2>

                <button
                    onClick={() =>
                        setSelectedDate(
                            new Date(selectedDate.setDate(selectedDate.getDate() - 1))
                        )
                    }
                    className="px-2"
                >
                    ←
                </button>

                {/* Show current date */}
                <span className="mx-2">
                    {selectedDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>

                <button
                    onClick={() =>
                        setSelectedDate(
                            new Date(selectedDate.setDate(selectedDate.getDate() + 1))
                        )
                    }
                    className="px-2"
                >
                    →
                </button>
            </div>

            <p className="mb-6">View and manage appointments in calendar view.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="border rounded p-4">
                    <h3 className="font-semibold mb-2 text-2xl">Calendar</h3>
                    <p className="text-sm mb-4">Select a date to view schedules.</p>

                    {/* Month + year */}
                    <div className="flex justify-between mb-2 font-medium">
                        <span>
                            {selectedDate.toLocaleString("default", { month: "long" })}{" "}
                            {selectedDate.getFullYear()}
                        </span>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 text-center font-medium text-sm mb-1">
                        <span>Su</span>
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                    </div>

                    {/* Days */}
                    <div className="space-y-1">{renderCalendar()}</div>
                </div>

                {/* Daily Schedule */}
                <div className="md:col-span-2 border rounded p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-2xl">Daily Schedule</h3>
                        <div className="flex border rounded">
                            {/* No bg/text colors */}
                            {["day", "week", "month", "list"].map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => setView(tab)}
                                    whileTap={{ scale: 0.9 }}
                                    className={`px-3 py-1 ${view === tab ? "font-semibold underline" : ""
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm mb-4">
                        Schedule for{" "}
                        {selectedDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}{" "}
                        • All Doctors
                    </p>

                    {/* Time slots */}
                    <div className="space-y-4 ">
                        {["9:00 AM", "10:00 AM", "11:00 AM"].map((time) => {
                            const appointment = todaysAppointments.find((a) =>
                                a.time.includes(time.split(" ")[0]) // ✅ FIXED: match correctly
                            );
                            return (
                                <div key={time}>
                                    <p className="text-sm font-medium">{time}</p>
                                    {appointment ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-3 mt-3 rounded border border-l-4 border-l-blue-600 flex justify-between items-center"
                                        >
                                            <div>
                                                <p className="font-semibold">{appointment.patient}</p>
                                                <p className="text-sm">
                                                    {appointment.time} • {appointment.type}
                                                </p>
                                                <p className="text-sm">{appointment.doctor}</p>
                                            </div>
                                            <span className="text-xs border rounded px-2 py-1">
                                                {appointment.status}
                                            </span>
                                        </motion.div>
                                    ) : (
                                        <p className="text-sm">No appointments</p>
                                    )}
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSchedule;
