import React from 'react';
import './RecentLeaveRequests.css';

const leaveRequests = [
  {
    id: 1,
    name: 'John Martinez',
    department: 'Engineering',
    type: 'Annual Leave',
    dates: 'Dec 15–20, 2024',
    status: 'Pending',
    avatar: 'JM',
  },
  {
    id: 2,
    name: 'Anna Rodriguez',
    department: 'Marketing',
    type: 'Sick Leave',
    dates: 'Dec 12–14, 2024',
    status: 'Approved',
    avatar: 'AR',
  },
  {
    id: 3,
    name: 'David Kim',
    department: 'Sales',
    type: 'Personal Leave',
    dates: 'Dec 18–19, 2024',
    status: 'Pending',
    avatar: 'DK',
  },
  {
    id: 4,
    name: 'Sophie Turner',
    department: 'HR',
    type: 'Annual Leave',
    dates: 'Dec 22–29, 2024',
    status: 'Pending',
    avatar: 'ST',
  },
];

const RecentLeaveRequests = () => {
  return (
    <div className="recent-leaves-container">
      <div className="recent-leaves-header">
        <h3>Leave Requests</h3>
        <button className="view-all-btn">View all</button>
      </div>

      <div className="recent-leaves-list">
        {leaveRequests.map(({ id, name, avatar, type, dates, status }) => (
          <div key={id} className="leave-card">
            <div className="leave-avatar">{avatar}</div>

            <div className="leave-content">
              <div className="leave-row">
                <p className="leave-name">{name}</p>
                <span className={`leave-status ${status.toLowerCase()}`}>{status}</span>
              </div>
              <p className="leave-subtext">{type} • {dates}</p>
            </div>

            {status === 'Pending' && (
              <div className="leave-actions">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentLeaveRequests;
