import { render, screen } from '@testing-library/react';
import Sale from './Sale';

test('renders <fill in property>', () => {
  render(<Sale />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});