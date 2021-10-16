import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooking, cancelBooking } from '../../actions/TicketActions';

export class InstantDisplay extends Component {
  handleClick = (id) => {
    console.log('from instant', this.props.history);

    this.props.cancelBooking(id, this.props.history);
  };

  render() {
    const newBooking = this.props.bookingValues;
    console.log('newBooking', newBooking.id);

    const newdate = new Date(newBooking.date);
    const year = newdate.getFullYear();
    const month = newdate.getMonth() + 1;
    const date = newdate.getDate();
    newBooking.date =
      newdate.getDate() +
      '-' +
      newdate.getMonth() +
      '-' +
      newdate.getFullYear();
    return (
      <div>
        <div className='container p-5  '>
          <div className='row'>
            <div className='col-md-6 col-sm-12 m-auto text-center mb-4 '>
              <h2>Booking Details</h2>
            </div>
          </div>

          <div className='row w-75 m-auto bg-light p-4 shadow'>
            <h3 className='text-center text-danger'>
              Shree Vaijnath Jyotirling Temple
            </h3>
            <p className='text-center text-danger'>
              Parali Vaijnath,District: Beed , Pincode : 431515.
            </p>
            <hr />
            <div className='col-md-6 col-sm-12'>
              <label htmlFor='Name' className='font-weight-700'>
                Name
              </label>
              <p>{newBooking.fullname}</p>

              <label htmlFor='Email' className='font-weight-700'>
                Email
              </label>
              <p>{newBooking.email}</p>

              <label htmlFor='phone' className='font-weight-700'>
                Phone
              </label>
              <p>{newBooking.phone}</p>

              <label htmlFor='address' className='font-weight-700'>
                Address
              </label>
              <p>{newBooking.address}</p>
            </div>
            <div className='col-md-6'>
              <label htmlFor='persons' className='font-weight-700'>
                No of Persons
              </label>
              <p> {newBooking.persons}</p>

              <label htmlFor='date' className='font-weight-700'>
                Booking Date
              </label>
              <p> {newBooking.date}</p>

              <label htmlFor='slot' className='font-weight-700'>
                Booking slot
              </label>
              <p> {newBooking.slot}</p>

              <label htmlFor='aadhar' className='font-weight-700'>
                Aadhar Card No
              </label>
              <p> {newBooking.aadhar}</p>
            </div>
            <hr />
            <div className='col-lg-2 col-md-2 col-sm-12 text-center d-flex align-items-center  '>
              <span className='mx-2  '>
                <Link to='/'>
                  <i
                    className='fa fa-arrow-circle-left text-success fs-4'
                    title='Back'
                  ></i>
                </Link>
              </span>
              <span className='mx-2  '>
                <Link to={`/update/${newBooking.id}`}>
                  <i
                    className='fa fa-pencil text-primary fs-4'
                    title='Edit'
                  ></i>
                </Link>
              </span>
              <span className='mx-2  '>
                <i
                  className='fa fa-trash text-danger cursor fs-4'
                  title='Delete'
                  onClick={this.handleClick.bind(this, newBooking.id)}
                ></i>
              </span>
            </div>
            <div className='col-lg-10 text-end col-md-10 col-sm-12'>
              <label className='fs-4'>Total :-</label>
              <span className='mx-2 fs-4'>
                {newBooking.persons} x 300 Rs ={newBooking.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InstantDisplay.propTypes = {
  cancelBooking: PropTypes.func.isRequired,
};

export default connect(null, { cancelBooking })(InstantDisplay);
