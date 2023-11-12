// import React from 'react';
// import '../../Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Sidebar</h2>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js

import React from 'react';
import '../../Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SharePlate</h2>
      <ul>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
