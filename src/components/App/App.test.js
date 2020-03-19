import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTitle } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
// import NewsContainer from '../NewsContainer/NewsContainer';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should display a news type on search', () => {
    const { getByPlaceholderText, getByText, getByTitle } = render(
      <App />
    )
    fireEvent.change(getByPlaceholderText('search news type'), {target: {value: 'entertainment'}})
    fireEvent.click(getByTitle('search-btn'))
    expect(getByText('entertainment')).toBeInTheDocument()
  })
})