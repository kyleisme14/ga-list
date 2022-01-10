import { render, screen } from '@testing-library/react';
import JobContainer from './JobContainer';

test('renders <fill in property>', () => {
  render(<JobContainer />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});