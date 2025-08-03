import "./AdminDashboard.css";
import Layout from "../../../layout/Layout";
import DashboardStats from "../DashboardStats/DashboardStats";
import HRAttendanceChart from "../../hr/HRAttendanceChart";
import DepartmentChart from "../DepartmentChart/DepartmentChart";
import RecentClockIns from "../RecentClockIns/RecentClockIns";
import RecentLeaveRequests from "../RecentLeaveRequests/RecentLeaveRequests";
import RecentActivity from "../RecentActivity/RecentActivity";
import QRCodeGenerator from "../../../components/QRCodeGenerator";
import { useState } from "react";
import { RiQrCodeLine } from "react-icons/ri";

const AdminDashboard = () => {
  const [showQR, setShowQR] = useState(false);
  return (
    <Layout title="Dashboard">
      <main className="admin-dashboard">
        {/* Stats Cards */}
        <section className="admin-section stats-grid">
          <DashboardStats />
        </section>

        <section className="admin-section chart-grid">
          <div className="admin-box">
            <HRAttendanceChart />
            <div className="qr-generate-box">
              <h3 className="qr-box-title">Generate Attendance QR</h3>
              <button
                className="qr-generate-btn"
                title="Generate QR Code"
                onClick={() => setShowQR(true)}
              >
                <RiQrCodeLine className="qr-icon" />
                Generate QR Code
              </button>
            </div>
          </div>
          <div className="admin-box">
            <DepartmentChart />
          </div>
        </section>

        <section className="admin-section">
          <div className="admin-box">
            <RecentActivity />
          </div>
        </section>

        <section className="admin-section table-grid">
          <div className="admin-box scrollable">
            <RecentClockIns />
          </div>
          <div className="admin-box scrollable">
            <RecentLeaveRequests />
          </div>
        </section>
        {/* QR Modal */}
        <QRCodeGenerator visible={showQR} onClose={() => setShowQR(false)} />
      </main>
    </Layout>
  );
};

export default AdminDashboard;
