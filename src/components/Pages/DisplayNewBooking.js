import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class DisplayNewBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: 1,
    };
    console.log('flag', this.state.flag);
  }

  render() {
    const booking = this.props.newbooking;
    // const newBooking = booking.filter((item) => item.flag === 1);
    // console.log('from display new', newBooking);
    return (
      <>
        <tr>
          <td>
            <input type='checkbox' />
          </td>
          <td>{booking.fullname} </td>
          <td>{booking.date}</td>

          <td className='text-center'>
            <span className='mx-2'>
              <Link to={`/viewticket/${booking.id}`}>
                <i className='fa fa-eye text-secondary'></i>
              </Link>
            </span>
          </td>
        </tr>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  booking: state.bookings,
});
export default connect(mapStateToProps)(DisplayNewBooking);
