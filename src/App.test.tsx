import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reset button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reset/i);
  expect(linkElement).toBeInTheDocument();
});
