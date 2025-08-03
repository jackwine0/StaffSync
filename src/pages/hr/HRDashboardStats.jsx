import { RiGroupLine, RiUserStarLine, RiCalendar2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import './HRDashboardStats.css';

const stats = [
  {
    title: 'Total Employees',
    value: 120,
    icon: <RiGroupLine />,
    color: 'darkgray',
  },
  {
    title: 'Active Staff',
    value: 105,
    icon: <RiUserStarLine />,
    color: 'darkgray',
  },
  {
    title: 'On Leave',
    value: 8,
    icon: <RiCalendar2Line />,
    color: 'darkgray',
  },
  {
    title: 'Monthly Payroll (₦)',
    value: '4,200,000',
    icon: <RiMoneyDollarCircleLine />,
    color: 'darkgray',
  },
];

const HRDashboardStats = () => (
  <div className="dashboard-stats">
    {stats.map((stat, index) => (
      <div key={index} className="stat-card">
        <div className="stat-icon" style={{ backgroundColor: stat.color }}>
          {stat.icon}
        </div>
        <div className="stat-info">
          <p className="stat-title">{stat.title}</p>
          <h3 className="stat-value">{stat.value}</h3>
        </div>
      </div>
    ))}
  </div>
);

export default HRDashboardStats;
