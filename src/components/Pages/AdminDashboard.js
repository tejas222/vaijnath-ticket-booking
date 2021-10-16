import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBookings } from '../../actions/TicketActions';
import DisplayTickets from './DisplayTickets';
import ReactPaginate from 'react-paginate';

export class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0,
      usersPerPage: 10,
    };
  }

  componentDidMount() {
    this.props.getBookings();
  }

  render() {
    const bookings = this.props.booking.bookings;
    const pagesVisited = this.state.pageNumber * this.state.usersPerPage;

    const pageCount = Math.ceil(bookings.length / this.state.usersPerPage);

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };
    return (
      <div className='container p-5 '>
        <h1 className='text-center'>Booked Tickets</h1>
        <table className='table table-bordered border-secondary'>
          <thead className='bg-warning'>
            <tr>
              <th>
                <input type='checkbox' />
              </th>

              <th>Name</th>

              <th>Booking Date</th>
              <th>Slot</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings
              .slice(pagesVisited, pagesVisited + this.state.usersPerPage)
              .map((booking) => (
                <DisplayTickets key={booking.id} booking={booking} />
              ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination justify-content-end'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  booking: PropTypes.object.isRequired,
  getBookings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  booking: state.bookings,
});

export default connect(mapStateToProps, { getBookings })(AdminDashboard);
