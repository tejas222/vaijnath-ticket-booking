import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
const Topbar = () => {
  return (
    <div className='bg-light topbar d-flex align-items-center shadow '>
      <div className='container-fluid d-flex align-items-center '>
        <div className='col-lg-6 d-flex align-items-center px-4 '>
          <form>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='autoSizingInputGroup'
                placeholder='Username'
              />
              <div className='input-group-text'>
                <SearchIcon />
              </div>
            </div>
          </form>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
          <ul className=' d-flex align-items-center'>
            <li className=' '>
              <NotificationsIcon />
            </li>
            <li>
              <EmailIcon />
            </li>
            <li className='border-start'>
              <div className='mx-4 d-flex align-items-center '>
                <span className='px-2 fw-bold'>User Name</span>
                <AccountCircleIcon className='fs-3' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
