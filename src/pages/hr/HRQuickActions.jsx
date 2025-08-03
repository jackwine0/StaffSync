import {
  RiUserAddLine,
  RiBuildingLine,
  RiCalendarCheckLine,
  RiFileTextLine,
  RiContactsLine,
  RiRefreshLine,
  RiSettings3Line,
} from 'react-icons/ri';
import './HRQuickActions.css';

const actions = [
  {
    title: 'Add New Employee',
    description: 'Create a new employee profile',
    icon: <RiUserAddLine />,
    class: 'action-blue',
  },
  {
    title: 'Manage Departments',
    description: 'Update department structure',
    icon: <RiBuildingLine />,
    class: 'action-purple',
  },
  {
    title: 'Bulk Leave Review',
    description: 'Review pending leave requests',
    icon: <RiCalendarCheckLine />,
    class: 'action-green',
  },
  {
    title: 'Attendance Report',
    description: 'Generate attendance reports',
    icon: <RiFileTextLine />,
    class: 'action-yellow',
  },
  {
    title: 'Employee Directory',
    description: 'Search and manage staff',
    icon: <RiContactsLine />,
    class: 'action-red',
  },
  {
    title: 'Sync Staff Data',
    description: 'Update employee information',
    icon: <RiRefreshLine />,
    class: 'action-cyan',
  },
];

const HRQuickActions = () => {
  return (
    <div className="hr-actions-container">
      <div className="hr-actions-header">
        <h3 className="hr-actions-title">HR Quick Actions</h3>
        <RiSettings3Line className="hr-actions-settings" />
      </div>

      <div className="hr-actions-grid">
        {actions.map((action, index) => (
          <div key={index} className={`hr-action-card ${action.class}`}>
            <div className="hr-action-icon">{action.icon}</div>
            <div className="hr-action-content">
              <h4 className="hr-action-title">{action.title}</h4>
              <p className="hr-action-description">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRQuickActions;
