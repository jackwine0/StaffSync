import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './HRAttendanceChart.css';

const data = [
  { day: 'Mon', present: 142, absent: 5, late: 8 },
  { day: 'Tue', present: 138, absent: 9, late: 12 },
  { day: 'Wed', present: 145, absent: 2, late: 6 },
  { day: 'Thu', present: 139, absent: 8, late: 10 },
  { day: 'Fri', present: 132, absent: 15, late: 14 },
  { day: 'Sat', present: 89, absent: 58, late: 3 },
  { day: 'Sun', present: 85, absent: 62, late: 2 },
];

const HRAttendanceChart = () => {
  return (
    <div className="attendance-chart">
      <div className="attendance-header">
        <h3>Weekly Attendance Comparison</h3>
        <div className="attendance-legend">
          <span><span className="dot green"></span>Present</span>
          <span><span className="dot yellow"></span>Late</span>
          <span><span className="dot red"></span>Absent</span>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            stackOffset="sign"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="day"
              tick={{ fill: '#444', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#444', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
            <Bar dataKey="present" stackId="a" fill="#10b981" />
            <Bar dataKey="late" stackId="a" fill="#f59e0b" />
            <Bar dataKey="absent" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HRAttendanceChart;
