import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders dashboard after bookmarks load', async () => {
  render(<App />);
  expect(screen.getByText(/loading bookmarks/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Example' })).toBeInTheDocument();
  });
});
