import React, { Component } from 'react';

import { sortBooking } from '../../actions/TicketActions';

import { connect } from 'react-redux';
import ReactDatePicker from 'react-datepicker';

export class SortBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  onChange = (value) => {
    //console.log('date', value);

    const newdate = new Date(value);
    const year = newdate.getFullYear();
    const month = newdate.getMonth() + 1;
    //console.log('Selected month is', month);
    const date = newdate.getDate();
    value = newdate.getDate() + '-' + month + '-' + newdate.getFullYear();

    // console.log('Selected date is', newdate);
    this.props.sortBooking(value);
    this.setState({ date: '' });
  };

  render() {
    return (
      <>
        <ReactDatePicker
          className='form-control'
          name='date'
          selected={this.state.date}
          onChange={this.onChange}
          isClearable
          placeholderText='Select Date'
          closeOnScroll={true}
          dateFormat='dd/MM/yyyy'
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  booking: state.bookings,
});

export default connect(mapStateToProps, { sortBooking })(SortBooking);
