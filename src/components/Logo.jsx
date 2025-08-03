import './Logo.css';

const Logo = ({ collapsed }) => {
  return (
    <div className={`logo-wrapper ${collapsed ? 'collapsed' : ''}`}>
      <div className="grid-icon">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`grid-dot delay-${i + 1}`} />
        ))}
      </div>
      {!collapsed && <div className="logo-text-3">StaffSync</div>}
    </div>
  );
};

export default Logo;
