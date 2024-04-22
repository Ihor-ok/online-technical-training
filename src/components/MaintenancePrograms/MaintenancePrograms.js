import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MaintenancePrograms() {

  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location);

  const btnGoBackStyle = {
    marginLeft: '10px',
    marginTop:'10px',
    backgroundColor: '#FF4500',
      color: '#FFFFFF',
      border: 'none',
      padding: '5px 10px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s, color 0.3s',
      ...(isHovered && { backgroundColor: '	#006400', color: '#FFFFFF' }),
    };
  

  return (
    <div>
      <Link to={backLinkLocationRef.current.state}>
        <button
          style={btnGoBackStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           Go back
        </button>
      </Link>

      <ul>
        <li>Welcome</li>
        <li>Maintenance Programs</li>
        <li>Reliability Programs</li>
        <li>Maintenance Costs</li>
      </ul>
    </div>
  );
}