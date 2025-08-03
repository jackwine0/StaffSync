import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import './AttendanceChart.css';

const data = [
  { month: 'Jan', present: 138, absent: 4 },
  { month: 'Feb', present: 141, absent: 4 },
  { month: 'Mar', present: 143, absent: 4 },
  { month: 'Apr', present: 144, absent: 3 },
  { month: 'May', present: 146, absent: 3 },
  { month: 'Jun', present: 144, absent: 3 },
  { month: 'Jul', present: 145, absent: 2 },
  { month: 'Aug', present: 146, absent: 2 },
  { month: 'Sep', present: 145, absent: 2 },
  { month: 'Oct', present: 144, absent: 3 },
  { month: 'Nov', present: 143, absent: 4 },
  { month: 'Dec', present: 132, absent: 15 },
];

const AttendanceChart = () => {
  return (
    <div className="attendance-chart-container">
      <div className="chart-header">
        <h3 className="chart-title">Monthly Attendance Overview</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color present"></div>
            <span className="legend-label">Present</span>
          </div>
          <div className="legend-item">
            <div className="legend-color absent"></div>
            <span className="legend-label">Absent</span>
          </div>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#e5e7eb" 
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                color: '#111827'
              }}
              itemStyle={{ color: '#111827' }}
              labelStyle={{ 
                color: '#6b7280',
                fontWeight: '600',
                marginBottom: '8px'
              }}
            />
            <Bar 
              dataKey="present" 
              name="Present"
              radius={[4, 4, 0, 0]}
              fill="#374151"
            />
            <Bar 
              dataKey="absent" 
              name="Absent"
              radius={[4, 4, 0, 0]}
              fill="#9ca3af"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;