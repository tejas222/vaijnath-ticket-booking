import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBookings } from '../../actions/TicketActions';
import DisplayTickets from './DisplayTickets';
import ReactPaginate from 'react-paginate';
import SortBooking from '../Reusable/SortBooking';

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
    console.log('Bookings legnth after sort', bookings.length);
    const pagesVisited = this.state.pageNumber * this.state.usersPerPage;
    const pageCount = Math.ceil(bookings.length / this.state.usersPerPage);
    console.log(bookings.length);
    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };
    return (
      <div>
        {/* <div className='mb-3 col-4 sortbox'>
          <SortBooking />
        </div> */}
        {bookings.length === 0 ? (
          <h2 className='text-center mt-5'>No Bookings</h2>
        ) : (
          <div>
            <table className='table table-responsive'>
              <thead>
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
        )}
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
