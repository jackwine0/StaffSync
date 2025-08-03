import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./DepartmentChart.css";

const data = [
  { name: "Engineering", value: 42, color: "#000000" },
  { name: "Sales", value: 28, color: "#374151" },
  { name: "Marketing", value: 24, color: "#6b7280" },
  { name: "HR", value: 18, color: "#9ca3af" },
  { name: "Finance", value: 15, color: "#d1d5db" },
  { name: "Operations", value: 20, color: "#e5e7eb" },
];

const COLORS = data.map((item) => item.color);
const total = data.reduce((sum, item) => sum + item.value, 0);

const DepartmentChart = () => {
  return (
    <div className="department-chart">
      <div className="chart-header">
        <h3>Staff Distribution</h3>
        <div className="chart-total">Total: {total} employees</div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center">
          <div className="chart-center-text">
            <div className="chart-center-total">{total}</div>
            <div className="chart-center-label">Total Staff</div>
          </div>
        </div>
      </div>

      <div className="chart-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentChart;
