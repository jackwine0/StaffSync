import './EmployeeStats.css';
import {
  RiCheckboxCircleLine,
  RiCalendarCheckLine,
  RiMoneyDollarCircleLine,
  RiFileListLine
} from 'react-icons/ri';

const EmployeeStats = () => {
  const stats = [
    {
      title: 'Attendance Status',
      value: 'Present',
      icon: <RiCheckboxCircleLine size={24}  />,
      bgColor: '#ecfdf5',
      textColor: '#15803d',
      description: 'Today - 9:15 AM'
    },
    {
      title: 'Leave Days Left',
      value: '12',
      icon: <RiCalendarCheckLine size={24}  />,
      bgColor: '#eff6ff',
      textColor: '#1d4ed8',
      description: 'Out of 24 days'
    },
    {
      title: 'Latest Salary',
      value: '$4,500',
      icon: <RiMoneyDollarCircleLine size={24}  />,
      bgColor: '#f5f3ff',
      textColor: '#6d28d9',
      description: 'Paid on Oct 30, 2024'
    },
    {
      title: 'Leave Requests',
      value: '3',
      icon: <RiFileListLine size={24}  />,
      bgColor: '#fff7ed',
      textColor: '#c2410c',
      description: '1 pending approval'
    }
  ];

  return (
    <div className="employee-overview-grid">
      {stats.map((stat, index) => (
        <div key={index} className="employee-overview-card">
          <div className="overview-card-header">
            <div
              className="overview-icon"
              style={{ backgroundColor: stat.bgColor }}
            >
              {stat.icon}
            </div>
            <div
              className="overview-status-dot"
              style={{ backgroundColor: stat.textColor }}
            ></div>
          </div>
          <h4 className="overview-title">{stat.title}</h4>
          <div className="overview-value">{stat.value}</div>
          <p className="overview-description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStats;
