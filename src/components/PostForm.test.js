import { render, screen } from '@testing-library/react';
import PostForm from './PostForm';

test('renders <fill in property>', () => {
  render(<PostForm />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});