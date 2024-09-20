import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ListProducts from './ListProducts';
import { useFetchProducts } from '../hooks/useFetchProduct';
import ProductView from './ProductView';

// Mock the useFetchProducts hook
jest.mock('../hooks/useFetchProduct');

// Mock the axios library
jest.mock('axios');

// Mock useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ListProducts Component', () => {
  const mockNavigate = useNavigate();

  const mockProducts = [
    { id: 1, name: 'Product 1', description: 'Desc 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Desc 2', price: 200 },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should display loading state initially', () => {
    useFetchProducts.mockReturnValue({
      products: [],
      setProducts: jest.fn(),
      isLoading: true,
      errorMessage: '',
    });

    render(<ListProducts />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display an error message when there is an error', () => {
    useFetchProducts.mockReturnValue({
      products: [],
      setProducts: jest.fn(),
      isLoading: false,
      errorMessage: 'Failed to fetch products',
    });

    render(<ListProducts />);

    expect(screen.getByText('Failed to fetch products')).toBeInTheDocument();
  });

  it('should render products and total price', () => {
    useFetchProducts.mockReturnValue({
      products: mockProducts,
      setProducts: jest.fn(),
      isLoading: false,
      errorMessage: '',
    });

    render(<ListProducts />);

    // Check if the products are rendered
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`Price: ${product.price}`)).toBeInTheDocument();
    });

    // Check total price calculation
    expect(screen.getByText('Total Price: 300')).toBeInTheDocument();
  });

  it('should delete a product when delete button is clicked', async () => {
    const setProductsMock = jest.fn();
    
    // Mock the products and setProducts function
    useFetchProducts.mockReturnValue({
      products: mockProducts,
      setProducts: setProductsMock,
      isLoading: false,
      errorMessage: '',
    });
  
    // Mock axios.delete to resolve successfully
    axios.delete.mockResolvedValueOnce({});
  
    render(<ListProducts />);
  
    // Click the delete button for the first product
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
  
    // Wait for the axios.delete call to resolve and the alert to be triggered
    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith(`http://localhost:9000/products/1`);
    });
  
    // Check if setProducts is called to update the product list after deletion
    await waitFor(() => {
      expect(setProductsMock).toHaveBeenCalledWith(
        mockProducts.filter(product => product.id !== 1) // Ensure the product with id 1 is removed
      );
    });
  });
  

//   it('should navigate to edit product page when edit button is clicked', () => {
//     useFetchProducts.mockReturnValue({
//       products: mockProducts,
//       setProducts: jest.fn(),
//       isLoading: false,
//       errorMessage: '',
//     });

//     render(<ListProducts />);

//     const editButton = screen.getAllByText('Edit')[0]; // Click the edit button for the first product
//     fireEvent.click(editButton);

//     // Ensure navigation is called with the correct product ID
//     expect(mockNavigate).toHaveBeenCalledWith('/products/1');
//   });

//   it('should toggle visibility of the test message', () => {
//     useFetchProducts.mockReturnValue({
//       products: mockProducts,
//       setProducts: jest.fn(),
//       isLoading: false,
//       errorMessage: '',
//     });

//     render(<ListProducts />);

//     const toggleButton = screen.getByText('Toggle Message');

//     // Initially, the message should not be visible
//     expect(screen.queryByText('This is a test message')).toBeNull();

//     // Click to show the message
//     fireEvent.click(toggleButton);
//     expect(screen.getByText('This is a test message')).toBeInTheDocument();

//     // Click again to hide the message
//     fireEvent.click(toggleButton);
//     expect(screen.queryByText('This is a test message')).toBeNull();
//   });
});
