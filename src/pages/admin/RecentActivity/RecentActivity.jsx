import {
  RiUserAddLine,
  RiCalendarCheckLine,
  RiTimeLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiMoreLine,
} from 'react-icons/ri';

import './RecentActivity.css';

const activityIcons = {
  'ri-user-add-line': <RiUserAddLine />,
  'ri-calendar-check-line': <RiCalendarCheckLine />,
  'ri-time-line': <RiTimeLine />,
  'ri-money-dollar-circle-line': <RiMoneyDollarCircleLine />,
  'ri-shield-check-line': <RiShieldCheckLine />,
};

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'employee',
      message: 'New employee Sarah Wilson joined Engineering',
      user: 'HR Team',
      time: '2 mins ago',
      status: 'new',
      icon: 'ri-user-add-line',
      color: 'dark',
    },
    {
      id: 2,
      type: 'leave',
      message: 'Leave request approved for Mike Johnson',
      user: 'Manager',
      time: '15 mins ago',
      status: 'approved',
      icon: 'ri-calendar-check-line',
      color: 'light',
    },
    {
      id: 3,
      type: 'attendance',
      message: 'Late check-in recorded for Alex Smith',
      user: 'System',
      time: '1 hour ago',
      status: 'late',
      icon: 'ri-time-line',
      color: 'light',
    },
    {
      id: 4,
      type: 'payroll',
      message: 'Monthly payroll processed successfully',
      user: 'Finance Team',
      time: '2 hours ago',
      status: 'completed',
      icon: 'ri-money-dollar-circle-line',
      color: 'light',
    },
    {
      id: 5,
      type: 'system',
      message: 'System backup completed',
      user: 'Admin',
      time: '3 hours ago',
      status: 'system',
      icon: 'ri-shield-check-line',
      color: 'light',
    },
  ];

  return (
    <div className="recent-activity-container">
      <div className="recent-activity-header">
        <h3>Recent Activities</h3>
        <button>View all</button>
      </div>

      <div className="recent-activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-icon ${activity.color}`}>
              {activityIcons[activity.icon]}
            </div>

            <div className="activity-details">
              <p className="activity-message">{activity.message}</p>
              <div className="activity-meta">
                <span>by {activity.user}</span>
                <span className="dot">•</span>
                <span>{activity.time}</span>
              </div>
            </div>

            <button className="activity-options">
              <RiMoreLine />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
