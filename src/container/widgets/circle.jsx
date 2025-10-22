import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DepartmentChart = () => {
    const [hoveredSegment, setHoveredSegment] = useState(null);

    const data = [
        { name: 'Cardiology', value: 45, color: '#3B82F6', textColor: 'text-blue-500' },
        { name: 'Emergency', value: 20, color: '#10B981', textColor: 'text-green-500' },
        { name: 'Oncology', value: 25, color: '#8B5CF6', textColor: 'text-purple-500' },
        { name: 'Pediatrics', value: 28, color: '#F97316', textColor: 'text-orange-500' },
        { name: 'Orthopedics', value: 32, color: '#F59E0B', textColor: 'text-amber-500' },
        { name: 'Neurology', value: 38, color: '#06D6A0', textColor: 'text-emerald-500' }
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativeAngle = 0;

    const createPath = (centerX, centerY, radius, startAngle, endAngle) => {
        const start = polarToCartesian(centerX, centerY, radius, endAngle);
        const end = polarToCartesian(centerX, centerY, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M", centerX, centerY,
            "L", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            "Z"
        ].join(" ");
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const getLabelPosition = (centerX, centerY, radius, startAngle, endAngle) => {
        const midAngle = (startAngle + endAngle) / 2;
        const labelRadius = radius + 30;
        return polarToCartesian(centerX, centerY, labelRadius, midAngle);
    };

    return (
        <div className="w-full max-w-4xl mx-auto ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <h1 className="text-2xl font-bold mb-2">Department Distribution</h1>
                <p>Patient distribution by department</p>
            </motion.div>

            <div className=" items-center justify-center ">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <svg width="250" height="250" className="drop-shadow-lg md:ml-20">
                        {data.map((item, index) => {
                            const angle = (item.value / total) * 360;
                            const startAngle = cumulativeAngle;
                            const endAngle = cumulativeAngle + angle;
                            const path = createPath(125, 125, 90, startAngle, endAngle); // smaller circle
                            const labelPos = getLabelPosition(125, 125, 90, startAngle, endAngle);

                            cumulativeAngle += angle;

                            return (
                                <g key={item.name}>
                                    <motion.path
                                        d={path}
                                        fill={item.color}
                                        stroke="white"
                                        strokeWidth="2"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                                        onMouseEnter={() => setHoveredSegment(item.name)}
                                        onMouseLeave={() => setHoveredSegment(null)}
                                        className="cursor-pointer"
                                        style={{ transformOrigin: "125px 125px" }}
                                    />

                                    <motion.text
                                        x={labelPos.x}
                                        y={labelPos.y}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="text-sm font-semibold fill-current"
                                        fill={item.color}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                                    >
                                        {item.value}
                                    </motion.text>
                                </g>
                            );
                        })}
                    </svg>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-wrap flex gap-4"
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${hoveredSegment === item.name ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
                                }`}
                            onMouseEnter={() => setHoveredSegment(item.name)}
                            onMouseLeave={() => setHoveredSegment(null)}
                        >
                            <motion.div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: item.color }}
                                whileHover={{ scale: 1.2 }}
                            />
                            <span className={`font-medium text-lg ${item.textColor}`}>
                                {item.name}
                            </span>
                            <motion.span
                                className="ml-2 font-bold"
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.value}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="mt-8 text-center"
            >
                <p>
                    Total Patients: <span className="font-bold">{total}</span>
                </p>
            </motion.div>
        </div>
    );
};

export default DepartmentChart;