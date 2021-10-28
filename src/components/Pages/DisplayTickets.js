import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooking } from '../../actions/TicketActions';

export class DisplayTickets extends Component {
  handleClick = (id) => {
    this.props.deleteBooking(id);
  };

  render() {
    const booking = this.props.booking;

    return (
      <>
        <tr>
          <td>
            <input type='checkbox' />
          </td>
          <td>{booking.fullname} </td>
          <td>{booking.date}</td>
          <td>{booking.slot} </td>

          <td className='text-center'>
            <span className='mx-2'>
              <Link to={`/update/${booking.id}`}>
                <i className='fa fa-pencil text-primary'></i>
              </Link>
            </span>
            <span className='mx-2'>
              <Link to={`/viewticket/${booking.id}`}>
                <i className='fa fa-eye text-secondary'></i>
              </Link>
            </span>

            <span className='mx-2'>
              <i
                className='fa fa-trash text-danger pe-auto cursor'
                onClick={this.handleClick.bind(this, booking.id)}
              ></i>
            </span>
          </td>
        </tr>
      </>
    );
  }
}
DisplayTickets.propTypes = {
  deleteBooking: PropTypes.func.isRequired,
};

export default connect(null, { deleteBooking })(DisplayTickets);
