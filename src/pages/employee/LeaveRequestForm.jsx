import { useState } from 'react';
import './LeaveRequestForm.css';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [showModal, setShowModal] = useState(false);

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: 'Sick Leave',
      startDate: '2024-11-15',
      endDate: '2024-11-16',
      status: 'approved',
      reason: 'Flu symptoms',
    },
    {
      id: 2,
      type: 'Personal Leave',
      startDate: '2024-11-20',
      endDate: '2024-11-20',
      status: 'pending',
      reason: 'Personal work',
    },
    {
      id: 3,
      type: 'Vacation',
      startDate: '2024-12-01',
      endDate: '2024-12-05',
      status: 'rejected',
      reason: 'Family vacation',
    },
    {
      id: 4,
      type: 'Emergency Leave',
      startDate: '2024-12-10',
      endDate: '2024-12-12',
      status: 'approved',
      reason: 'Family emergency',
    },
    {
      id: 5,
      type: 'Sick Leave',
      startDate: '2024-12-15',
      endDate: '2024-12-16',
      status: 'pending',
      reason: 'Medical checkup',
    },
    {
      id: 6,
      type: 'Personal Leave',
      startDate: '2024-12-20',
      endDate: '2024-12-20',
      status: 'approved',
      reason: 'Personal errands',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: requests.length + 1,
      type: formData.leaveType,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: 'pending',
      reason: formData.reason,
    };
    setRequests([...requests, newRequest]);
    setFormData({ leaveType: '', startDate: '', endDate: '', reason: '' });
    setShowModal(false);
  };

  const getStatusClass = (status) => {
    return `lr-status lr-${status}`;
  };

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    return Math.ceil((e - s) / (1000 * 3600 * 24)) + 1;
  };

  return (
    <div className="lr-wrapper">
      <div className="lr-header">
        <h3>Leave Requests</h3>
        <button className="lr-new-request-btn" onClick={() => setShowModal(true)}>
          + New Request
        </button>
      </div>

      <div className="lr-request-list">
        {requests.map((req) => (
          <div className="lr-card" key={req.id}>
            <div className="lr-card-header">
              <span className="lr-type">{req.type}</span>
              <span className={getStatusClass(req.status)}>
                {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
              </span>
            </div>
            <div className="lr-card-body">
              <p className="lr-dates">
                {new Date(req.startDate).toLocaleDateString()} –{' '}
                {new Date(req.endDate).toLocaleDateString()} (
                {calculateDays(req.startDate, req.endDate)}{' '}
                {calculateDays(req.startDate, req.endDate) > 1 ? 'days' : 'day'})
              </p>
              <p className="lr-reason">{req.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="lr-modal-overlay">
          <div className="lr-modal">
            <h3>New Leave Request</h3>
            <form className="lr-form" onSubmit={handleSubmit}>
              <div className="lr-form-group">
                <label>Leave Type</label>
                <select
                  value={formData.leaveType}
                  onChange={(e) =>
                    setFormData({ ...formData, leaveType: e.target.value })
                  }
                  required
                >
                  <option value="">Select leave type</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Personal Leave">Personal Leave</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Emergency Leave">Emergency Leave</option>
                </select>
              </div>

              <div className="lr-form-row">
                <div className="lr-form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="lr-form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="lr-form-group">
                <label>Reason</label>
                <textarea
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  maxLength={500}
                  required
                  placeholder="Please provide a reason for your leave request..."
                ></textarea>
                <div className="lr-char-count">{formData.reason.length}/500 characters</div>
              </div>

              <div className="lr-form-actions">
                <button
                  type="button"
                  className="lr-btn-cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="lr-btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveRequestForm;
