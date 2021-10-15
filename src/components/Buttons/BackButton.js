import React from 'react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <>
      <Link to='/dasbboard' className='btn btn-secondary'>
        Back
      </Link>
    </>
  );
}
