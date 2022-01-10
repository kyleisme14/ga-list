import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders <fill in property>', () => {
  render(<Login />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});