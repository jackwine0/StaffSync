import React from 'react';
import './RecentAttendance.css';
import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';

const attendanceLogs = [
  {
    id: 1,
    date: '2024-11-08',
    checkIn: '09:15:00',
    checkOut: '18:30:00',
    workHours: '8h 45m',
    status: 'present',
  },
  {
    id: 2,
    date: '2024-11-07',
    checkIn: '09:00:00',
    checkOut: '18:15:00',
    workHours: '8h 45m',
    status: 'present',
  },
  {
    id: 3,
    date: '2024-11-06',
    checkIn: '09:30:00',
    checkOut: '18:00:00',
    workHours: '8h 00m',
    status: 'present',
  },
  {
    id: 4,
    date: '2024-11-05',
    checkIn: '09:10:00',
    checkOut: '17:45:00',
    workHours: '8h 05m',
    status: 'present',
  },
  {
    id: 5,
    date: '2024-11-04',
    checkIn: '-',
    checkOut: '-',
    workHours: '0h 00m',
    status: 'absent',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'present':
      return 'present';
    case 'absent':
      return 'absent';
    case 'late':
      return 'late';
    default:
      return 'neutral';
  }
};

const RecentAttendance = () => {
  return (
    <div className="recent-attendance">
      <h3 className="title">Recent Attendance</h3>

      <div className="log-list">
        {attendanceLogs.map((log) => (
          <div key={log.id} className="log-item">
            <div className="log-date">
              <div className="day">
                {new Date(log.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="date">
                {new Date(log.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </div>

            <div className="log-times">
              <div className="time-block">
                <div className="label">Check In</div>
                <div className="value">
                  {log.checkIn === '-' ? '-' : new Date(`2024-01-01T${log.checkIn}`).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
              <div className="time-block">
                <div className="label">Check Out</div>
                <div className="value">
                  {log.checkOut === '-' ? '-' : new Date(`2024-01-01T${log.checkOut}`).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
              <div className="time-block">
                <div className="label">Work Hours</div>
                <div className="value">{log.workHours}</div>
              </div>
            </div>

            <div className="log-status">
              <span className={`status-tag ${getStatusColor(log.status)}`}>
                {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
              </span>

              {log.status === 'present' && <RiCheckboxCircleLine className="icon present-icon" />}
              {log.status === 'absent' && <RiCloseCircleLine className="icon absent-icon" />}
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <span>This week’s summary:</span>
        <div className="summary-data">
          <span><strong>4</strong> days present</span>
          <span><strong>33h 35m</strong> total hours</span>
        </div>
      </div>
    </div>
  );
};

export default RecentAttendance;
