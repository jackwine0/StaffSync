import "./DashboardStats.css";
import {
  RiTeamLine,
  RiCalendarCheckLine,
  RiTimeLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const stats = [
  {
    title: "Total Employees",
    value: "147",
    change: "+12 this month",
    changeType: "increase",
    icon: <RiTeamLine />,
  },
  {
    title: "Leave Requests",
    value: "8",
    change: "Pending approval",
    changeType: "neutral",
    icon: <RiCalendarCheckLine />,
  },
  {
    title: "Present Today",
    value: "132",
    change: "89.8% attendance",
    changeType: "increase",
    icon: <RiTimeLine />,
  },
  {
    title: "Monthly Payroll",
    value: "$284,750",
    change: "This month",
    changeType: "neutral",
    icon: <RiMoneyDollarCircleLine />,
  },
];

const DashboardStats = () => {
  return (
    <div className="admin-stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="admin-stat-card">
          <div className="admin-stat-header">
            <div className="admin-stat-icon">{stat.icon}</div>
            <div className="admin-stat-value">{stat.value}</div>
          </div>
          <div className="admin-stat-body">
            <p className="admin-stat-title">{stat.title}</p>
            <p
              className={`admin-stat-change ${
                stat.changeType === "increase"
                  ? "change-positive"
                  : stat.changeType === "decrease"
                  ? "change-negative"
                  : "change-neutral"
              }`}
            >
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
