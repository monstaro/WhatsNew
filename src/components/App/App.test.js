import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
// import NewsContainer from '../NewsContainer/NewsContainer';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should display a news type on button press', () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(
      <App />
    )
    fireEvent.click(getByDisplayValue('entertainment'))
    expect(getByText('entertainment')).toBeInTheDocument()
  })
  it('should display a news type on seawrch', () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(
      <App />
    )
    fireEvent.change(getByPlaceholderText('search news type'), {target: {value: 'entertainment'}})
    expect(getByText('entertainment')).toBeInTheDocument()
  })
  // it('should render a container', () => {
  //   render(
  //     <NewsContainer />
  //   )
  // })
})