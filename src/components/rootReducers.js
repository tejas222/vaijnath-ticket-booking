import { combineReducers } from 'redux';
import TicketReducer from '../reducers/TicketReducer';

export default combineReducers({
  bookings: TicketReducer,
});
