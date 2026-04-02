"use client";

import React, { useState } from "react";

interface TimetableProps {
  color: string;
}

const Timetable = ({ color }: TimetableProps) => {
  const [selectedClass, setSelectedClass] = useState("1");
  const [selectedSection, setSelectedSection] = useState("A");

  const classes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "I PUC",
    "II PUC",
  ];
  const sections = ["A", "B", "C"];

  const timeSlots = [
    { time: "08:30 - 09:30", activity: "1st Period" },
    { time: "09:30 - 10:30", activity: "2nd Period" },
    { time: "10:30 - 11:30", activity: "3rd Period" },
    { time: "11:30 - 12:15", activity: "Lunch Break", isBreak: true },
    { time: "12:15 - 13:15", activity: "4th Period" },
    { time: "13:15 - 14:15", activity: "5th Period" },
    { time: "14:15 - 15:15", activity: "6th Period" },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Mock schedule data based on section
  const getSubject = (day: string, slotIndex: number, isBreak?: boolean) => {
    if (isBreak) return "Lunch Break";

    let subjects = [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Kannada",
      "Hindi",
      "Physical Education",
      "Art",
      "Computer",
      "Moral Science",
      "Library",
      "Yoga",
    ];

    // PUC specific subjects
    if (selectedClass.includes("PUC")) {
      subjects = [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Accountancy",
        "Business Studies",
        "Economics",
        "Statistics",
        "English",
        "Kannada",
        "Hindi",
        "Computer Science",
        "Electronics",
      ];
    }

    // Create a simple deterministic "hash" based on day, slot index, class and section
    const dayIndex = days.indexOf(day);
    const classIdx = classes.indexOf(selectedClass);
    const sectionIdx = sections.indexOf(selectedSection);

    // Using a more complex formula to ensure variation across rows, columns, classes and sections
    const index =
      (dayIndex * 13 + slotIndex * 7 + classIdx * 17 + sectionIdx * 23) %
      subjects.length;

    return subjects[index];
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-600 border-blue-100 text-blue-600";
      case "amber":
        return "bg-amber-600 border-amber-100 text-amber-600";
      case "indigo":
        return "bg-indigo-600 border-indigo-100 text-indigo-600";
      case "emerald":
        return "bg-emerald-600 border-emerald-100 text-emerald-600";
      case "purple":
        return "bg-purple-600 border-purple-100 text-purple-600";
      case "rose":
        return "bg-rose-600 border-rose-100 text-rose-600";
      default:
        return "bg-gray-600 border-gray-100 text-gray-600";
    }
  };

  const activeBg = getBgColor(color).split(" ")[0];
  const activeText = getBgColor(color).split(" ")[1];
  const activeBorder = getBgColor(color).split(" ")[2];

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${activeText}`}>
            Class Timetable
          </h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Weekly schedule for Class {selectedClass}
            {selectedSection}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
              Class:
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className={`px-3 py-1.5 rounded-xl border-2 ${activeBorder} outline-none font-bold text-gray-700 bg-white cursor-pointer hover:shadow-md transition-all text-sm`}
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
              Section:
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className={`px-3 py-1.5 rounded-xl border-2 ${activeBorder} outline-none font-bold text-gray-700 bg-white cursor-pointer hover:shadow-md transition-all text-sm`}
            >
              {sections.map((section) => (
                <option key={section} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto lg:overflow-visible rounded-2xl border border-gray-100">
        <table className="w-full text-left border-collapse table-fixed lg:table-auto min-w-[800px] lg:min-w-0">
          <thead>
            <tr className={`${activeBg} text-white`}>
              <th className="w-24 md:w-32 px-3 py-3 md:px-4 md:py-4 font-bold border-r border-white/10 text-xs md:text-sm">
                Time Slot
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="px-2 py-3 md:px-3 md:py-4 font-bold text-center border-r border-white/10 last:border-r-0 text-xs md:text-sm"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, idx) => (
              <tr
                key={idx}
                className={`${slot.isBreak ? "bg-gray-50" : "hover:bg-gray-50/50 transition-colors"}`}
              >
                <td className="px-3 py-3 md:px-4 md:py-4 font-bold text-gray-700 border-b border-r border-gray-100 whitespace-nowrap">
                  <div className="text-[10px] md:text-xs text-gray-400 font-normal">
                    {slot.activity}
                  </div>
                  <div className="text-xs md:text-sm">{slot.time}</div>
                </td>
                {days.map((day) => (
                  <td
                    key={`${day}-${idx}`}
                    className={`px-1 py-3 md:px-2 md:py-4 text-center border-b border-r border-gray-100 last:border-r-0 text-[11px] md:text-xs lg:text-sm ${
                      slot.isBreak
                        ? "font-bold text-gray-400 italic"
                        : "text-gray-600 font-medium leading-tight"
                    }`}
                  >
                    {getSubject(day, idx, slot.isBreak)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-start md:items-center p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <svg
          className={`w-5 h-5 ${activeText} mr-3 flex-shrink-0 mt-0.5 md:mt-0`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-[11px] md:text-xs text-gray-500">
          * This is a standard timetable. For specific laboratory sessions or
          special activity changes, please contact the class teacher.
        </p>
      </div>
    </div>
  );
};

export default Timetable;
