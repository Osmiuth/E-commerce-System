import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddEditProduct from './addEditProduct';

beforeEach(() => {
  require('bootstrap/dist/js/bootstrap.js');
});

describe('AddEditProduct', () => {
  it('renders without crashing', () => {
    render(<AddEditProduct></AddEditProduct>);
  });

  it('handles form submission', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(<AddEditProduct onSubmit={handleSubmit} />);
    const form = getByTestId('form');

    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('handles input change', () => {
    const { getByTestId } = render(<AddEditProduct />);
    const input = getByTestId('productID');
  
    fireEvent.change(input, { target: { value: '123' } });
  
    expect(input.value).toBe('123');
  });
});