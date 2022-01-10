import { render, screen } from '@testing-library/react';
import Profile from './Profile';

test('renders <fill in property>', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});