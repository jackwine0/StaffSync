"use client";
import { useState } from "react";
import Layout from "../../layout/Layout";
import EmployeeStats from "./EmployeeStats";
import AttendanceCalendar from "./AttendanceCalendar";
import LeaveRequestForm from "./LeaveRequestForm";
import RecentAttendance from "./RecentAttendance";
import SalarySlipDownload from "./SalarySlipDownload";
import QRScanner from "./QRScanner";
import "./EmployeeDashboard.css";
import { RiQrScan2Line } from "react-icons/ri";

const EmployeeDashboard = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    setScanResult(data);
    console.log("Scanned data:", data);
    // Add your scan handling logic here
  };

  return (
    <Layout title="My Dashboard">
      <main className="dashboard-container">
        {/* Stats Section - Full Width */}
        <section className="stats-section">
          <EmployeeStats />
        </section>

        {/* Calendar + QR (60%) | Leave Request (40%) */}
        <section className="main-content-section">
          <div className="calendar-qr-container">
            <AttendanceCalendar />

          </div>

          <div className="leave-request-container">
            <LeaveRequestForm />
            
            <div className="qr-section">
              <div className="qr-section-header">
                <h4>Scan QR to mark presence</h4>
                <button
                  className="qr-scan-btn"
                  onClick={() => setShowScanner(true)}
                >
                  <RiQrScan2Line className="ri-qr-scan-line" /> Scan QR Code
                </button>
              </div>

              {scanResult && (
                <div className="scan-result-box">
                  <span>
                    Last scanned: <strong>{scanResult}</strong>
                  </span>
                  <button
                    className="clear-scan-btn"
                    onClick={() => setScanResult(null)}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recent Attendance (70%) | Salary Summary (30%) */}
        <section className="secondary-content-section">
          <div className="attendance-container">
            <RecentAttendance />
          </div>
          <div className="salary-container">
            <SalarySlipDownload />
          </div>
        </section>

        {/* QR Scanner Modal - This is what was missing */}
        {showScanner && (
          <QRScanner
            onScan={handleScan}
            onClose={() => setShowScanner(false)}
          />
        )}
      </main>
    </Layout>
  );
};

export default EmployeeDashboard;
