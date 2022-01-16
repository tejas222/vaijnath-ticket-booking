import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
        <div className='container-fluid headerbg'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='fs-1 text-center text-white heading'>
                श्री क्षेत्र परळी वैजनाथ ज्योतिर्लिंग
              </h2>
            </div>
          </div>
        </div>
      </header>
      <nav className='navbar navbar-expand-lg bg-warning navbar-light p-0'>
        <div className='container-fluid '>
          <a className='navbar-brand'></a>
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-md-center'
            id='navbarTogglerDemo03'
          >
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <Link
                  className='nav-link active '
                  aria-current='page'
                  to='/bookticket'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/admin'>
                  View Ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
