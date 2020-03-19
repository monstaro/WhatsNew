import React from 'react';
// import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('NewsContainer', () => {
  it('should render', () => {
    render(
      <NewsContainer info={['a', 'b']}/>
    )
  })
})

