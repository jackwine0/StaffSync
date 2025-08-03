"use client";

import { useState } from "react";
import "./AttendanceCalendar.css";

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(day);
    }

    return days;
  };

  // Sample attendance data
  const attendanceData = {
    1: "present",
    2: "present",
    3: "present",
    4: "present",
    5: "present",
    8: "present",
    9: "present",
    10: "absent",
    11: "present",
    12: "present",
    15: "present",
    16: "present",
    17: "leave",
    18: "leave",
    19: "present",
    22: "present",
    23: "present",
    24: "present",
    25: "present",
    26: "present",
    29: "present",
    30: "present",
    31: "present",
  };

  // Calculate summary counts
  const summary = {
    present: Object.values(attendanceData).filter((v) => v === "present")
      .length,
    absent: Object.values(attendanceData).filter((v) => v === "absent").length,
    leave: Object.values(attendanceData).filter((v) => v === "leave").length,
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "present":
        return "day--present";
      case "absent":
        return "day--absent";
      case "leave":
        return "day--leave";
      default:
        return "day--empty";
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      present: "Present",
      absent: "Absent",
      leave: "On Leave",
      null: "No data",
    };
    return labels[status] || "";
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="attendance-calendar">
      <header className="calendar-header">
        <h2 className="calendar-title">Monthly Attendance</h2>
        <div className="month-navigator">
          <button
            className="nav-button"
            onClick={() => navigateMonth("prev")}
            aria-label="Previous month"
          >
            <span className="icon-arrow-left" />
          </button>
          <span className="current-month">
            {monthName} {year}
          </span>
          <button
            className="nav-button"
            onClick={() => navigateMonth("next")}
            aria-label="Next month"
          >
            <span className="icon-arrow-right" />
          </button>
        </div>
      </header>

      <div className="status-legend">
        <div className="legend-item">
          <span className="legend-dot legend-dot--present" />
          <span>Present</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-dot--absent" />
          <span>Absent</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-dot--leave" />
          <span>On Leave</span>
        </div>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          const status = attendanceData[day] || null;
          return (
            <div
              key={index}
              className={`calendar-day ${getStatusClass(status)}`}
              data-day={day}
              title={
                day
                  ? `${day} ${monthName}: ${getStatusLabel(status)}`
                  : undefined
              }
            >
              {day}
            </div>
          );
        })}
      </div>

      <footer className="attendance-summary">
        <div className="summary-item">
          <span className="summary-count">{summary.present}</span>
          <span className="summary-label">Present</span>
        </div>
        <div className="summary-item">
          <span className="summary-count">{summary.absent}</span>
          <span className="summary-label">Absent</span>
        </div>
        <div className="summary-item">
          <span className="summary-count">{summary.leave}</span>
          <span className="summary-label">On Leave</span>
        </div>
      </footer>
    </div>
  );
};

export default AttendanceCalendar;
