const mockAdminInfo = {
  // ✅ Top-level user info for role-based rendering
  user: {
    name: "Samuel Akande",
    avatar: "https://i.pravatar.cc/100?img=13",
    role: "admin",
  },

  // ✅ Admin profile section (for navbar or header)
  adminProfile: {
    name: "Samuel Akande",
    avatar: "https://i.pravatar.cc/100?img=13",
  },

  // ✅ Stat cards summary
  stats: [
    {
      title: "Total Employees",
      value: 42,
    },
    {
      title: "Leave Requests Pending",
      value: 5,
    },
    {
      title: "Active Today",
      value: 27,
    },
    {
      title: "Payroll Summary",
      value: "₦3,200,000",
    },
  ],

  // ✅ Monthly attendance (for bar chart)
  attendanceData: [
    { month: "Jan", attendance: 85 },
    { month: "Feb", attendance: 91 },
    { month: "Mar", attendance: 78 },
    { month: "Apr", attendance: 88 },
    { month: "May", attendance: 95 },
    { month: "Jun", attendance: 90 },
    { month: "Jul", attendance: 84 },
  ],

  // ✅ Department distribution (for pie chart)
  departmentData: [
    { department: "Engineering", count: 14 },
    { department: "HR", count: 6 },
    { department: "Sales", count: 10 },
    { department: "Marketing", count: 7 },
    { department: "Finance", count: 5 },
  ],

  // ✅ Recent leave requests table
  leaveRequests: [
    {
      id: 1,
      employee: "John Doe",
      department: "Engineering",
      date: "2025-07-27",
      reason: "Medical Leave",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Jane Smith",
      department: "Sales",
      date: "2025-07-26",
      reason: "Family Emergency",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Samuel Akande",
      department: "HR",
      date: "2025-07-25",
      reason: "Annual Leave",
      status: "Rejected",
    },
  ],

  // ✅ Recent admin activities (for logs)
  activities: [
    {
      id: 1,
      action: "Approved leave request from Jane Smith",
      time: "2 hrs ago",
    },
    {
      id: 2,
      action: "Added new employee: Michael Johnson",
      time: "Yesterday",
    },
    {
      id: 3,
      action: "Generated June payroll",
      time: "2 days ago",
    },
  ],

  // ✅ Admin quick action shortcuts
  quickActions: [
    { label: "Add Employee", link: "/admin/employees/new" },
    { label: "Generate Payslip", link: "/admin/payroll" },
    { label: "Manage Departments", link: "/admin/departments" },
  ],

  // ✅ Recent clock-in records
  recentClockIns: [
    {
      id: 1,
      name: "John Doe",
      time: "08:04 AM",
      date: "2025-07-30",
      status: "On Time",
    },
    {
      id: 2,
      name: "Janet Williams",
      time: "08:29 AM",
      date: "2025-07-30",
      status: "Late",
    },
    {
      id: 3,
      name: "Michael Johnson",
      time: "08:02 AM",
      date: "2025-07-30",
      status: "On Time",
    },
  ],
};

export default mockAdminInfo;
