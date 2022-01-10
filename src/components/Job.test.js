import { render, screen } from '@testing-library/react';
import Job from './Job';

test('renders <fill in property>', () => {
  render(<Job />);
  const linkElement = screen.getByText(/  /i);
  expect(linkElement).toBeInTheDocument();
});