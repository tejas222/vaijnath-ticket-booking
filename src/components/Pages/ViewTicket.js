import React, { Component } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getBooking, cancelBooking } from '../../actions/TicketActions';

export class ViewTicket extends Component {
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

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBooking(id);
  }

  handleClick = (id, history) => {
    console.log('from View', this.props.history);
    this.props.cancelBooking(id, this.props.history);
  };

  render() {
    return (
      <>
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
              <p>{this.state.fullname}</p>

              <label htmlFor='Email' className='font-weight-700'>
                Email
              </label>
              <p>{this.state.email}</p>

              <label htmlFor='phone' className='font-weight-700'>
                Phone
              </label>
              <p>{this.state.phone}</p>

              <label htmlFor='address' className='font-weight-700'>
                Address
              </label>
              <p>{this.state.address}</p>
            </div>
            <div className='col-md-6'>
              <label htmlFor='persons' className='font-weight-700'>
                No of Persons
              </label>
              <p> {this.state.persons}</p>

              <label htmlFor='date' className='font-weight-700'>
                Booking Date
              </label>
              <p> {this.state.date}</p>

              <label htmlFor='slot' className='font-weight-700'>
                Booking slot
              </label>
              <p> {this.state.slot}</p>

              <label htmlFor='aadhar' className='font-weight-700'>
                Aadhar Card No
              </label>
              <p> {this.state.aadhar}</p>
            </div>
            <hr />
            <div className='col-lg-3 col-md-4 col-sm-12 text-center d-flex align-items-center  '>
              <span className='mx-2  '>
                <Link to='/'>
                  <i
                    className='fa fa-arrow-circle-left text-success'
                    title='Back'
                  ></i>
                </Link>
              </span>
              <span className='mx-2  '>
                <Link to={`/update/${this.state.id}`}>
                  <i className='fa fa-pencil text-primary' title='Edit'></i>
                </Link>
              </span>
              <span className='mx-2  '>
                <i
                  className='fa fa-trash text-danger cursor'
                  title='Delete'
                  onClick={this.handleClick.bind(this, this.state.id)}
                ></i>
              </span>
            </div>
            <div className='col-lg-9 text-end col-md-12 col-sm-12'>
              <label className='fs-4'>Total :-</label>
              <span className='mx-2 fs-4'>
                {this.state.persons} x 300 Rs ={' '}
                {`${this.state.persons * 300} Rs `}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
ViewTicket.propTypes = {
  getBooking: PropTypes.func.isRequired,
  cancelBooking: PropTypes.func.isRequired,
  bookings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bookings: state.bookings.booking,
});

export default connect(mapStateToProps, { getBooking, cancelBooking })(
  ViewTicket
);
