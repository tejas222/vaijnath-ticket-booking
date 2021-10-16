import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getBooking, updateBooking } from '../../actions/TicketActions';
import BackButton from '../Buttons/BackButton';

const options = [
  { value: '5 AM - 6 AM' },
  { value: '6 AM - 7 AM' },
  { value: '7 AM - 8 AM' },
  { value: '8 AM - 9 AM' },
  { value: '9 AM - 10 AM' },
];

export class UpdateTicket extends Component {
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
    };
  }

  componentWillReceiveProps(NextProps) {
    const { id, fullname, email, phone, address, persons, date, slot, aadhar } =
      NextProps.bookings;
    this.setState({
      id,
      fullname,
      email,
      phone,
      address,
      persons,
      date,
      slot,
      aadhar,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBooking(id);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updateBooking = {
      id: this.state.id,
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      persons: this.state.persons,
      date: this.state.date,
      slot: this.state.slot,
      aadhar: this.state.aadhar,
    };

    this.props.updateBooking(this.state.id, updateBooking, this.props.history);
  };

  render() {
    return (
      <>
        <div className='container p-5  '>
          <div className='row'>
            <div className='col-md-6 m-auto text-center mb-4 '>
              <h2>Update Ticket</h2>
            </div>
          </div>

          <div className='row '>
            <div className='col-md-6 m-auto bg-light p-5'>
              <form onSubmit={this.handleSubmit}>
                {/* <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    name='id'
                    value={this.state.id}
                    onChange={this.onChange}
                    disabled
                  />
                </div> */}

                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Full Name'
                    name='fullname'
                    value={this.state.fullname}
                    onChange={this.onChange}
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
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='date'
                    className='form-control'
                    name='date'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                  {/* <ReactDatePicker
                    className='form-control'
                    name='date'
                    selected={this.state.date}
                    onChange={this.onChange}
                    isClearable
                    placeholderText='Select Date'
                    closeOnScroll={true}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                  /> */}
                </div>

                <div className='mb-3'>
                  <select
                    className='form-select'
                    name='slot'
                    value={this.state.slot}
                    onChange={this.onChange}
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
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-success '
                  value='Update'
                />
                <span className='mx-2'>
                  <BackButton />
                </span>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
UpdateTicket.propTypes = {
  getBooking: PropTypes.func.isRequired,
  updateBooking: PropTypes.func.isRequired,
  bookings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bookings: state.bookings.booking,
});

export default connect(mapStateToProps, { getBooking, updateBooking })(
  UpdateTicket
);
