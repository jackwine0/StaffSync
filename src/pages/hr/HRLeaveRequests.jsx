import { useState } from 'react';
import './HRLeaveRequests.css';

const HRLeaveRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      employee: 'Sarah Johnson',
      department: 'Engineering',
      type: 'Sick Leave',
      dates: 'Dec 15 - Dec 16',
      days: 2,
      status: 'pending',
      reason: 'Flu symptoms',
      applied: '2024-12-10',
    },
    {
      id: 2,
      employee: 'Michael Chen',
      department: 'Sales',
      type: 'Vacation',
      dates: 'Dec 20 - Dec 24',
      days: 5,
      status: 'pending',
      reason: 'Family vacation',
      applied: '2024-12-08',
    },
    {
      id: 3,
      employee: 'Emma Wilson',
      department: 'Marketing',
      type: 'Personal',
      dates: 'Dec 18',
      days: 1,
      status: 'pending',
      reason: 'Personal appointment',
      applied: '2024-12-12',
    },
    {
      id: 4,
      employee: 'David Brown',
      department: 'HR',
      type: 'Sick Leave',
      dates: 'Dec 12 - Dec 14',
      days: 3,
      status: 'approved',
      reason: 'Medical procedure',
      applied: '2024-12-09',
    },
    {
      id: 5,
      employee: 'Lisa Martinez',
      department: 'Finance',
      type: 'Vacation',
      dates: 'Dec 25 - Dec 29',
      days: 5,
      status: 'pending',
      reason: 'Holiday vacation',
      applied: '2024-12-11',
    },
  ]);

  const handleApprove = (id) =>
    setRequests(prev =>
      prev.map(req => req.id === id ? { ...req, status: 'approved' } : req)
    );

  const handleReject = (id) =>
    setRequests(prev =>
      prev.map(req => req.id === id ? { ...req, status: 'rejected' } : req)
    );

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  const getTypeClass = (type) => {
    return `type-badge type-${type.toLowerCase().replace(/\s/g, '-')}`;
  };

  const pendingCount = requests.filter(req => req.status === 'pending').length;

  return (
    <div className="hr-leave-container">
      <div className="hr-leave-header">
        <h3 className="hr-leave-title">Leave Requests</h3>
        <div className="hr-leave-subtitle">
          <span>{pendingCount} pending</span>
          <i className="ri-calendar-check-line"></i>
        </div>
      </div>

      <div className="hr-leave-list">
        {requests.map(request => (
          <div key={request.id} className="hr-leave-card">
            <div className="hr-leave-card-header">
              <div className="hr-avatar">
                {request.employee.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="hr-name">{request.employee}</p>
                <p className="hr-department">{request.department}</p>
              </div>
            </div>

            <div className="hr-leave-info">
              <div className="info-group">
                <p className="info-label">Type</p>
                <span className={getTypeClass(request.type)}>{request.type}</span>
              </div>
              <div className="info-group">
                <p className="info-label">Dates</p>
                <p className="info-value">{request.dates}</p>
              </div>
            </div>

            <div className="hr-leave-reason">
              <p className="info-label">Reason</p>
              <p className="info-value">{request.reason}</p>
            </div>

            <div className="hr-leave-footer">
              <div className="hr-leave-status">
                <span className={getStatusClass(request.status)}>{request.status}</span>
                <span className="applied-date">Applied: {request.applied}</span>
              </div>

              {request.status === 'pending' && (
                <div className="hr-leave-actions">
                  <button
                    className="btn btn-approve"
                    onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-reject"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRLeaveRequests;
