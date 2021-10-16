import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/TicketActions';
import { v4 as uuid } from 'uuid';
import 'react-datepicker/dist/react-datepicker.css';
import BackButton from '../Buttons/BackButton';

import ReactDatePicker from 'react-datepicker';
import InstantDisplay from './InstantDisplay';

const options = [
  { value: '5 AM - 6 AM' },
  { value: '6 AM - 7 AM' },
  { value: '7 AM - 8 AM' },
  { value: '8 AM - 9 AM' },
  { value: '9 AM - 10 AM' },
];

export class BookTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      fullname: '',
      email: '',
      phone: '',
      address: '',
      persons: '',
      date: '',
      slot: '',
      aadhar: '',
      isSubmitted: false,
      price: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      persons: this.state.persons,
      date: this.state.date,
      slot: this.state.slot,
      aadhar: this.state.aadhar,
      isSubmitted: false,
      price: this.state.persons * 300,
      id: uuid(),
    };
    console.log('price', newBooking.price);
    this.props.addBooking(newBooking, this.props.history);

    this.setState({
      isSubmitted: !this.state.isSubmitted,
      price: this.state.persons * 300,
      id: uuid(),
    });
  };

  render() {
    const bookingValues = this.state;
    console.log('BookingValues', bookingValues);
    return (
      <>
        <div className='col-md-12 col-lg-6 m-auto' id='msg'></div>

        <div className='container p-5  '>
          {this.state.isSubmitted ? (
            <InstantDisplay bookingValues={bookingValues} />
          ) : (
            <div>
              <div className='row'>
                <div className='col-md-6 m-auto text-center mb-4 '>
                  <h2>Book Your Ticket</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 m-auto bg-light p-5 shadow'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Full Name'
                        name='fullname'
                        value={this.state.fullname}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Enter Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Enter Phone'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <textarea
                        rows='3'
                        className='form-control'
                        placeholder='Enter Address'
                        name='address'
                        value={this.state.address}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Enter No of Persons'
                        name='persons'
                        value={this.state.persons}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      {/* <input
                    type='date'
                    className='form-control'
                    name='date'
                    value={this.state.date}
                    onChange={this.onChange}
                    required
                  /> */}

                      <ReactDatePicker
                        className='form-control'
                        name='date'
                        selected={this.state.date}
                        onChange={(date) => this.setState({ date: date })}
                        isClearable
                        placeholderText='Select Date'
                        closeOnScroll={true}
                        minDate={new Date()}
                        dateFormat='dd/MM/yyyy'
                      />
                    </div>

                    <div className='mb-3'>
                      <select
                        className='form-select'
                        name='slot'
                        value={this.state.slot}
                        onChange={this.onChange}
                        required
                      >
                        <option>Select Slot</option>
                        {options.map((item) => (
                          <option>{item.value}</option>
                        ))}
                      </select>
                    </div>

                    <div className='mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Aadhar No'
                        name='aadhar'
                        value={this.state.aadhar}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <input type='submit' className='btn btn-success' />
                    <span className='mx-2'>
                      <BackButton />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

BookTicket.propTypes = {
  addBooking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  addBooking: state.bookings,
});

export default connect(mapStateToProps, { addBooking })(BookTicket);
