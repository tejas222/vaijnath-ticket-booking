import {
  ADD_BOOKING,
  GET_BOOKINGS,
  DELETE_BOOKING,
  UPDATE_BOOKING,
  SEARCH_BOOKING,
  SORT_BOOKING,
  GET_SINGLE_BOOKING,
} from '../actions/types';

const initialstate = {
  bookings: [],
  booking: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      };

    case GET_SINGLE_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };
    case DELETE_BOOKING:
      console.log('Deleted from Reducer');
      return {
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
