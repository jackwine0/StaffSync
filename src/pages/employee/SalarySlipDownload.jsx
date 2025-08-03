import React, { useState } from 'react';
import './SalarySlipDownload.css';

const SalarySlipDownload = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-10');

  const salaryData = [
    { month: '2024-10', basic: 4000, allowance: 500, deduction: 200, net: 4300, status: 'Paid' },
    { month: '2024-09', basic: 4000, allowance: 500, deduction: 150, net: 4350, status: 'Paid' },
    { month: '2024-08', basic: 4000, allowance: 600, deduction: 180, net: 4420, status: 'Paid' },
    { month: '2024-07', basic: 4000, allowance: 500, deduction: 200, net: 4300, status: 'Paid' },
  ];

  const current = salaryData.find(s => s.month === selectedMonth) || salaryData[0];

  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  const formatMonth = (monthStr) =>
    new Date(monthStr).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

  const handleDownload = () => {
    alert(`Downloading salary slip for ${formatMonth(selectedMonth)}...`);
  };

  return (
    <div className="salary-summary">
      <div className="salary-header">
        <h3>Salary Summary</h3>
        <select
          className="month-selector"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {salaryData.map((item) => (
            <option key={item.month} value={item.month}>
              {formatMonth(item.month)}
            </option>
          ))}
        </select>
      </div>

      <div className="salary-breakdown">
        <div className="row">
          <span>Basic Salary</span>
          <span>{formatCurrency(current.basic)}</span>
        </div>
        <div className="row">
          <span>Allowances</span>
          <span className="positive">+{formatCurrency(current.allowance)}</span>
        </div>
        <div className="row">
          <span>Deductions</span>
          <span className="negative">-{formatCurrency(current.deduction)}</span>
        </div>
        <div className="row net-row">
          <span>Net Salary</span>
          <span>{formatCurrency(current.net)}</span>
        </div>
      </div>

      <div className="salary-actions">
        <button className="btn-download" onClick={handleDownload}>
          <i className="ri-download-line"></i> Download PDF
        </button>
        <button className="btn-history">
          <i className="ri-history-line"></i> View History
        </button>
      </div>

      <div className="payment-details">
        <div className="detail">
          <span>Status:</span>
          <span className="status-paid">{current.status}</span>
        </div>
        <div className="detail">
          <span>Payment Date:</span>
          <span>30th of each month</span>
        </div>
      </div>
    </div>
  );
};

export default SalarySlipDownload;
