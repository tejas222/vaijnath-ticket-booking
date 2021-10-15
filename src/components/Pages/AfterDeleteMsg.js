import React from 'react';
import { Link } from 'react-router-dom';

export default function AfterDeleteMsg() {
  return (
    <div className='container p-5 vh-100  '>
      <div className='col-md-8 m-auto text-center p-5 alert alert-warning'>
        <h2 className='text-danger'> You have Canceled Your Booking. </h2>
        <h4>
          To book your ticket please <Link to='/bookticket'> click here</Link>
        </h4>
      </div>
    </div>
  );
}
