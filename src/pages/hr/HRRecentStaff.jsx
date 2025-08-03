import "./HRRecentStaff.css";
import {
  RiUserAddLine,
  RiEditLine,
  RiEyeLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

const recentStaff = [
  {
    id: 1,
    name: "Alex Turner",
    department: "Engineering",
    position: "Senior Developer",
    joinDate: "2024-12-10",
    email: "alex.turner@company.com",
    phone: "+1 (555) 123-4567",
    status: "active",
  },
  {
    id: 2,
    name: "Jessica Wang",
    department: "Marketing",
    position: "Marketing Specialist",
    joinDate: "2024-12-08",
    email: "jessica.wang@company.com",
    phone: "+1 (555) 234-5678",
    status: "active",
  },
  {
    id: 3,
    name: "Ryan Cooper",
    department: "Sales",
    position: "Sales Representative",
    joinDate: "2024-12-05",
    email: "ryan.cooper@company.com",
    phone: "+1 (555) 345-6789",
    status: "pending",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    department: "Finance",
    position: "Financial Analyst",
    joinDate: "2024-12-03",
    email: "maria.rodriguez@company.com",
    phone: "+1 (555) 456-7890",
    status: "active",
  },
  {
    id: 5,
    name: "James Wilson",
    department: "Operations",
    position: "Operations Manager",
    joinDate: "2024-12-01",
    email: "james.wilson@company.com",
    phone: "+1 (555) 567-8901",
    status: "active",
  },
];

const getStatusClass = (status) => {
  return `status-pill ${status}`;
};

const getDepartmentClass = (dept) => {
  return `dept-pill ${dept.toLowerCase()}`;
};

const HRRecentStaff = () => (
  <div className="staff-card">
    <div className="staff-header">
      <h3>New Staff Added Recently</h3>
      <div className="header-right">
        <button className="view-all-btn">View all employees</button>
        <RiUserAddLine className="header-icon" />
      </div>
    </div>

    <div className="staff-list">
      {recentStaff.map((staff) => (
        <div key={staff.id} className="staff-item">
          <div className="staff-main">
            <div className="Newavatar">
              {staff.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="staff-info">
              <div className="staff-name-row">
                <h4>{staff.name}</h4>
                <span className={getStatusClass(staff.status)}>
                  {staff.status}
                </span>
              </div>
              <p className="position">{staff.position}</p>
              <div className="staff-meta">
                <span className={getDepartmentClass(staff.department)}>
                  {staff.department}
                </span>
                <span>Joined: {staff.joinDate}</span>
              </div>
            </div>
            <div className="staff-actions">
              <button>
                <RiEditLine />
              </button>
              <button>
                <RiEyeLine />
              </button>
            </div>
          </div>
          <div className="staff-contacts">
            <div>
              <RiMailLine /> {staff.email}
            </div>
            <div>
              <RiPhoneLine /> {staff.phone}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HRRecentStaff;
