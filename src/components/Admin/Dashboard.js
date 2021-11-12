import React, { useState } from 'react';
import Mainboard from './navbars/Mainboard';
import Sidebar from './navbars/Sidebar';
import Topbar from './navbars/Topbar';

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar
        onCollapse={(open) => {
          setOpen(open);
        }}
      />
      <div className={`main-container ${open ? 'inactive' : ''}`}>
        <Topbar />
        <Mainboard />
      </div>
    </div>
  );
}

export default Dashboard;
