import { render, screen } from '@testing-library/react';
import Signup from './Signup';

test('renders <fill in property>', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});