import * as React from 'react';
import './Loading.scss';
import { Spinner } from 'react-bootstrap';

export const Loading = () => (
  <div className='loading-spinner'>
    <Spinner animation='border' role='status'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  </div>
);
