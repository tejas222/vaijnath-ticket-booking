import React, { useState, useEffect } from 'react';
import { Menus } from './Menus';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Sidebar = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.onCollapse(open);
  });

  return (
    <>
      <div className={`sidebar pt-4 ${open ? 'inactive' : ''}`}>
        <div className='d-flex px-2 align-items-center'>
          <span id='title'>
            <h2 className='text-light'>Dashboard</h2>
          </span>
          <span id='icon'>
            {open ? (
              <ArrowForwardIosIcon
                className='backToggle fs-2'
                onClick={() => setOpen(!open)}
              />
            ) : (
              <ArrowBackIosNewIcon
                className='backToggle fs-2'
                onClick={() => setOpen(!open)}
              />
            )}
          </span>
        </div>
        {/* navigation Starts  */}

        <hr className='text-light' />
        <ul className='p-0  '>
          {Menus.map((menu, key) => (
            <li key={key}>
              <span id='icon'> {menu.icon}</span>
              <span id='title'> {menu.title}</span>
            </li>
          ))}
        </ul>
        {/* navigation Ends  */}
      </div>
    </>
  );
};

export default Sidebar;
