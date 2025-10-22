import React, { useState } from "react";
import { motion } from "framer-motion";

const PatientAdmissionsChart = () => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const data = [
    { month: "Jan", admissions: 120 },
    { month: "Feb", admissions: 135 },
    { month: "Mar", admissions: 148 },
    { month: "Apr", admissions: 165 },
    { month: "May", admissions: 178 },
    { month: "Jun", admissions: 195 },
    { month: "Jul", admissions: 210 },
    { month: "Aug", admissions: 225 },
    { month: "Sep", admissions: 240 },
    { month: "Oct", admissions: 255 },
    { month: "Nov", admissions: 270 },
    { month: "Dec", admissions: 295 },
  ];

  const maxValue = Math.max(...data.map((d) => d.admissions));
  const chartHeight = 400;
  const chartWidth = 800;
  const padding = { top: 40, right: 60, bottom: 80, left: 80 };

  // Grid lines values
  const gridValues = [0, 75, 150, 225, 300];

  const yScale = (value) =>
    (value / maxValue) * (chartHeight - padding.top - padding.bottom);

  const getBarHeight = (value) => yScale(value);

  const getYPosition = (value) =>
    chartHeight - padding.bottom - yScale(value);

  const barWidth = (chartWidth - padding.left - padding.right) / data.length;

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Patient Admissions
        </h1>
        <p className="text-gray-600">Monthly trend for the current year</p>
      </motion.div>

      <div className="relative">
        <svg
          width={chartWidth}
          height={chartHeight + 40}
          className="overflow-visible"
        >
          {/* Grid lines */}
          {gridValues.map((value, index) => (
            <g key={value}>
              <motion.line
                x1={padding.left}
                y1={getYPosition(value)}
                x2={chartWidth - padding.right}
                y2={getYPosition(value)}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="4,4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              />
              <motion.text
                x={padding.left - 10}
                y={getYPosition(value)}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-sm fill-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                {value}
              </motion.text>
            </g>
          ))}

          {/* Bars */}
          {data.map((item, index) => (
            <motion.rect
              key={item.month}
              x={padding.left + index * barWidth + barWidth * 0.15}
              y={getYPosition(item.admissions)}
              width={barWidth * 0.7}
              height={getBarHeight(item.admissions)}
              fill="#8B5CF6"
              rx="4"
              initial={{ height: 0, y: chartHeight - padding.bottom }}
              animate={{
                height: getBarHeight(item.admissions),
                y: getYPosition(item.admissions),
              }}
              transition={{
                delay: index * 0.1 + 0.5,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                fill: "#7C3AED",
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() =>
                setHoveredMonth({
                  month: item.month,
                  admissions: item.admissions,
                })
              }
              onMouseLeave={() => setHoveredMonth(null)}
              className="cursor-pointer origin-bottom"
            />
          ))}

          {/* Line chart overlay */}
          <motion.path
            d={`M ${data
              .map(
                (item, index) =>
                  `${padding.left + index * barWidth + barWidth * 0.5},${getYPosition(
                    item.admissions
                  )}`
              )
              .join(" L ")}`}
            fill="none"
            stroke="#F97316"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          />

          {/* Line chart points */}
          {data.map((item, index) => (
            <motion.circle
              key={`point-${item.month}`}
              cx={padding.left + index * barWidth + barWidth * 0.5}
              cy={getYPosition(item.admissions)}
              r="4"
              fill="#F97316"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 1.8, duration: 0.4 }}
              whileHover={{ scale: 1.3, r: 6 }}
              className="cursor-pointer"
              onMouseEnter={() =>
                setHoveredMonth({
                  month: item.month,
                  admissions: item.admissions,
                })
              }
              onMouseLeave={() => setHoveredMonth(null)}
            />
          ))}

          {/* X-axis labels */}
          {data.map((item, index) => (
            <motion.text
              key={`label-${item.month}`}
              x={padding.left + index * barWidth + barWidth * 0.5}
              y={chartHeight - padding.bottom + 25}
              textAnchor="middle"
              className="text-sm fill-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.8, duration: 0.4 }}
            >
              {item.month}
            </motion.text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default PatientAdmissionsChart;
