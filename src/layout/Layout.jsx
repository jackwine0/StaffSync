import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiDashboard3Line, RiTeamLine, RiTimeLine, RiCalendarCheckLine,
  RiMoneyDollarCircleLine, RiBarChartLine, RiSettings3Line,
  RiUserLine, RiLogoutBoxLine, RiNotificationLine,
  RiBuildingLine, RiRefreshLine, RiQrCodeLine, RiQrScan2Line,
} from "react-icons/ri";

import "./Layout.css";
import Logo from "../components/Logo";
import QRCodeGenerator from "../components/QRCodeGenerator";
import QRScanner from "../pages/employee/QRScanner";

const Layout = ({ children, title }) => {
  const [user, setUser] = useState(null);
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleScan = (data) => {
    if (data?.startsWith("attendance|")) {
      const scannedDate = data.split("|")[1];
      const today = new Date().toISOString().slice(0, 10);
      if (scannedDate === today) {
        alert("✅ Attendance marked successfully!");
      } else {
        alert("❌ QR expired or invalid for today.");
      }
    } else {
      alert("❌ Invalid QR code.");
    }
  };

  if (!user) return <div>Loading...</div>;

  const iconMap = {
    "ri-dashboard-3-line": <RiDashboard3Line />,
    "ri-team-line": <RiTeamLine />,
    "ri-time-line": <RiTimeLine />,
    "ri-calendar-check-line": <RiCalendarCheckLine />,
    "ri-money-dollar-circle-line": <RiMoneyDollarCircleLine />,
    "ri-bar-chart-line": <RiBarChartLine />,
    "ri-settings-3-line": <RiSettings3Line />,
    "ri-user-line": <RiUserLine />,
    "ri-logout-box-line": <RiLogoutBoxLine />,
    "ri-notification-line": <RiNotificationLine />,
    "ri-building-line": <RiBuildingLine />,
    "ri-refresh-line": <RiRefreshLine />,
  };

  const menuItems = {
    admin: [
      { name: "Dashboard", href: "/admin", icon: "ri-dashboard-3-line" },
      { name: "Employees", href: "/admin/employees", icon: "ri-team-line" },
      { name: "Attendance", href: "/admin/attendance", icon: "ri-time-line" },
      { name: "Leave", href: "/admin/leave", icon: "ri-calendar-check-line" },
      { name: "Payroll", href: "/admin/payroll", icon: "ri-money-dollar-circle-line" },
      { name: "Reports", href: "/admin/reports", icon: "ri-bar-chart-line" },
      { name: "Settings", href: "/admin/settings", icon: "ri-settings-3-line" },
    ],
    hr: [
      { name: "Dashboard", href: "/hr", icon: "ri-dashboard-3-line" },
      { name: "Employees", href: "/hr/employees", icon: "ri-team-line" },
      { name: "Leave Requests", href: "/hr/leaves", icon: "ri-calendar-check-line" },
      { name: "Attendance", href: "/hr/attendance", icon: "ri-time-line" },
      { name: "Departments", href: "/hr/departments", icon: "ri-building-line" },
      { name: "Sync Staff", href: "/hr/sync", icon: "ri-refresh-line" },
    ],
    employee: [
      { name: "Dashboard", href: "/employee", icon: "ri-dashboard-3-line" },
      { name: "Attendance", href: "/employee/attendance", icon: "ri-time-line" },
      { name: "Leave", href: "/employee/leave", icon: "ri-calendar-check-line" },
      { name: "Salary", href: "/employee/salary", icon: "ri-money-dollar-circle-line" },
      { name: "Profile", href: "/employee/profile", icon: "ri-user-line" },
    ],
  };

  const userMenu = menuItems[user.role.toLowerCase()] || [];

  return (
    <div className="layout-container">
      {/* Sticky Header */}
      <header className="layout-header">
        <div className="header-left">
          <h1>{title}</h1>
          <p>Good morning, {user.name}</p>
        </div>

        <div className="header-right">
          {user.role === "employee" && (
            <button
              className="qr-icon-btn"
              data-tooltip="Scan QR Code"
              onClick={() => setShowQRScanner(true)}
            >
              <RiQrScan2Line className="icon" />
            </button>
          )}
          {(user.role === "admin" || user.role === "hr") && (
            <button
              className="qr-icon-btn"
              data-tooltip="Generate QR Code"
              onClick={() => setShowQRGenerator(true)}
            >
              <RiQrCodeLine className="icon" />
            </button>
          )}

          <div className="notif-btn" data-tooltip="Notifications">
            <RiNotificationLine className="icon" />
            <span className="notif-dot"></span>
          </div>

          <div className="user-info">
            <div className="user-initial">{user.name.charAt(0)}</div>
            <div className="user-meta">
              <p>{user.name}</p>
              <span>{user.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Main */}
      <div className="layout-body">
        <aside className="sidebar">
          <div className="logo">
            <Logo collapsed />
          </div>

          <nav className="nav-links">
            {userMenu.map((item) => (
              <a key={item.name} href={item.href} className="nav-item" data-tooltip={item.name}>
                <span className="nav-icon">{iconMap[item.icon]}</span>
              </a>
            ))}
          </nav>

          <div className="nav-bottom">
            <div className="nav-item" data-tooltip="Profile">
              <span className="nav-icon"><RiUserLine /></span>
            </div>
            <button className="nav-item" data-tooltip="Logout" onClick={handleLogout}>
              <span className="nav-icon"><RiLogoutBoxLine /></span>
            </button>
          </div>
        </aside>

        <main className="main-content">
          {children}
        </main>
      </div>

      {/* QR Modals */}
      {showQRScanner && <QRScanner onScan={handleScan} onClose={() => setShowQRScanner(false)} />}
      {showQRGenerator && <QRCodeGenerator visible={showQRGenerator} onClose={() => setShowQRGenerator(false)} />}
    </div>
  );
};

export default Layout;
