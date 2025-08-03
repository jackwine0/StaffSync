import { useState } from "react";
import "./HRDashboard.css";
import Layout from "../../layout/Layout";
import HRDashboardStats from "./HRDashboardStats";
import HRAttendanceChart from "./HRAttendanceChart";
import DepartmentChart from "../admin/DepartmentChart/DepartmentChart";
import HRLeaveRequests from "./HRLeaveRequests";
import HRRecentStaff from "./HRRecentStaff";
import HRQuickActions from "./HRQuickActions";
import QRCodeGenerator from "../../components/QRCodeGenerator";
import { RiQrCodeLine } from "react-icons/ri";

const HRDashboard = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <Layout title="HR Dashboard">
      <main className="hr-dashboard">
        {/* Stats */}
        <section className="dashboard-section">
          <HRDashboardStats />
        </section>

        {/* Charts + QR Button */}
        <section className="dashboard-section dashboard-grid-2-1">
          <div className="grid-item">
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

          <div className="grid-item">
            <DepartmentChart />
          </div>
        </section>

        {/* Leave Requests + Quick Actions */}
        <section className="dashboard-section dashboard-grid-2-1">
          <div className="grid-item">
            <HRLeaveRequests />
          </div>
          <div className="grid-item">
            <HRQuickActions />
          </div>
        </section>

        {/* Recent Staff */}
        <section className="dashboard-section">
          <HRRecentStaff />
        </section>

        {/* QR Modal */}
        <QRCodeGenerator visible={showQR} onClose={() => setShowQR(false)} />
      </main>
    </Layout>
  );
};

export default HRDashboard;
