import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders <fill in property>', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});