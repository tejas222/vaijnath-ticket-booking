import React from 'react';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TodayIcon from '@mui/icons-material/Today';
import DeleteIcon from '@mui/icons-material/Delete';

import AdminDashboard from '../../Pages/AdminDashboard';

import { connect } from 'react-redux';
import DisplayNewBooking from '../../Pages/DisplayNewBooking';
import SortBooking from '../../Reusable/SortBooking';

const Mainboard = ({ booking }) => {
  const total = booking.bookings;
  const newbooking = total.filter((item) => item.flag === 1);
  const confirmed = total.filter((item) => item.confirmed === true);
  return (
    <div className='mainboard'>
      <h1>Dashboard</h1>
      <section>
        <div className='row g-4 justify-content-between'>
          <div className='col-lg-3 col-md-6'>
            <div className='top-card border-primary border-start border-5 rounded-1 d-flex justify-content-between align-items-center'>
              <div>
                <p className='card-title fw-bold text-primary '>
                  Today's Bookings
                </p>
                <h2>{total.length}</h2>
              </div>
              <div>
                <TodayIcon className='fs-1' />
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='top-card border-succe00ss border-start border-5 rounded-1 d-flex justify-content-between align-items-center'>
              <div>
                <p className='card-title fw-bold text-success '>
                  Confirmed Bookings
                </p>
                <h2>{confirmed.length}</h2>
              </div>
              <div>
                <DoneAllIcon className='fs-1' />
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='top-card border-warning border-start border-5 rounded-1 d-flex justify-content-between align-items-center'>
              <div>
                <p className='card-title fw-bold text-warning '>New Bookings</p>
                <h2>{newbooking.length}</h2>
              </div>
              <div>
                <PersonAddAlt1Icon className='fs-1' />
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='top-card border-danger border-start border-5 rounded-1 d-flex justify-content-between align-items-center'>
              <div>
                <p className='card-title fw-bold text-danger '>
                  Canceled Bookings
                </p>
                <h2>5</h2>
              </div>
              <div>
                <DeleteIcon className='fs-1' />
              </div>
            </div>
          </div>
        </div>

        <div className='row g-4 justify-content-between mt-5'>
          <div className='col-lg-8 col-md-12'>
            <div className='bg-light p-2 text-primary border rounded-1 p-3'>
              <h4>All Bookings ({total.length})</h4>
            </div>
            <div className='p-3 custom-shadow border'>
              <AdminDashboard />
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='bg-light p-2 text-primary rounded-1 border p-3'>
              <h4> New Bookings</h4>
            </div>
            <div className='p-3 custom-shadow border'>
              {newbooking.length === 0 ? (
                <h4>No New Bookings</h4>
              ) : (
                <table className='table table-responsive'>
                  <thead>
                    <tr>
                      <th scope='col'>
                        <input type='checkbox' />
                      </th>
                      <th scope='col'>Fullname</th>
                      <th scope='col'>Booking Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newbooking.map((newbooking) => (
                      <DisplayNewBooking
                        key={newbooking.id}
                        newbooking={newbooking}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  booking: state.bookings,
});

export default connect(mapStateToProps)(Mainboard);
