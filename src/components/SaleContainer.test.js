import { render, screen } from '@testing-library/react';
import SaleContainer from './SaleContainer';

test('renders <fill in property>', () => {
  render(<SaleContainer />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});