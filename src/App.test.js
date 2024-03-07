import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app-header');
    expect(linkElement).toBeInTheDocument();
  });
});
