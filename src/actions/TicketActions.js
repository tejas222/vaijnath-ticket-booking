import {
  GET_BOOKINGS,
  DELETE_BOOKING,
  UPDATE_BOOKING,
  GET_SINGLE_BOOKING,
  SORT_BOOKING,
} from '../actions/types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

export const addBooking = (booking, history) => async (dispatch) => {
  try {
    console.log(booking.date);
    const newdate = new Date(booking.date);
    const year = newdate.getFullYear();
    const month = newdate.getMonth() + 1;
    const date = newdate.getDate();
    booking.date = date + '-' + month + '-' + year;
    console.log(booking.date);
    const response = await axios.post(
      'http://localhost:3333/bookings',
      booking
    );
    // console.log('Posting data', response);
    toast.success('Booking is Successful..!!');
    // history.push('/dasbboard');
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookings = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3333/bookings');
  dispatch({
    type: GET_BOOKINGS,
    payload: response.data,
  });
};

export const getBooking = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3333/bookings/${id}`);
  dispatch({
    type: GET_SINGLE_BOOKING,
    payload: response.data,
  });
};

export const updateBooking = (id, booking, history) => async (dispatch) => {
  try {
    console.log('in Update');
    const response = await axios.put(
      `http://localhost:3333/bookings/${id}`,
      booking
    );
    dispatch({
      type: UPDATE_BOOKING,
      payload: response.data,
    });
    history.push(`/viewticket/${id}`);
    toast.success('Booking is Updated Successful..!!');
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3333/bookings/${id}`);
  console.log('Deleted from actions');
  dispatch({
    type: DELETE_BOOKING,
    payload: id,
  });
  toast.error('Booking is Deleted Successful..!!');
};

export const cancelBooking = (id, history) => async (dispatch) => {
  console.log('Recieving in cancel', history);
  await axios.delete(`http://localhost:3333/bookings/${id}`);
  console.log('Canceled from actions');
  history.push('/usermsg');
  dispatch({
    type: DELETE_BOOKING,
    payload: id,
  });
  toast.error('Booking is Canceled ..!!');
  return;
};

export const sortBooking = (date) => {
  console.log('In Action Sorting');
  return {
    type: SORT_BOOKING,
    payload: date,
  };
};
