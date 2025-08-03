import './RecentClockIns.css';

const clockIns = [
  { id: 1, name: 'Sarah Wilson', department: 'Engineering', time: '08:45 AM', status: 'On Time', avatar: 'SW' },
  { id: 2, name: 'Mike Johnson', department: 'Sales', time: '09:15 AM', status: 'Late', avatar: 'MJ' },
  { id: 3, name: 'Emily Davis', department: 'Marketing', time: '08:30 AM', status: 'Early', avatar: 'ED' },
  { id: 4, name: 'Alex Smith', department: 'HR', time: '09:00 AM', status: 'On Time', avatar: 'AS' },
  { id: 5, name: 'Lisa Chen', department: 'Finance', time: '08:50 AM', status: 'On Time', avatar: 'LC' },
];

const RecentClockIns = () => {
  return (
    <div className="clockin-container">
      <div className="clockin-header">
        <h3>Recent Clock-ins</h3>
        <button className="view-all-btn">View all</button>
      </div>

      <div className="clockin-list">
        {clockIns.map(({ id, name, department, time, status, avatar }) => (
          <div key={id} className="clockin-item">
            <div className="clockin-avatar">{avatar}</div>

            <div className="clockin-info">
              <p className="clockin-name">{name}</p>
              <p className="clockin-department">{department}</p>
            </div>

            <div className="clockin-meta">
              <p className="clockin-time">{time}</p>
              <p className={`clockin-status ${status.toLowerCase().replace(' ', '-')}`}>{status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentClockIns;
