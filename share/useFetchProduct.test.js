import { renderHook, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useFetchProducts } from './useFetchProduct';

jest.mock('axios');

describe('useFetchProducts', () => {
  const mockUrl = 'http://localhost:9000/products';
  const mockProducts = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });







it('should load products correctly', async () => {
    // Mock axios.get to resolve with the products data
    axios.get.mockResolvedValueOnce({ data: mockProducts });

    // Render the hook
    const { result } = renderHook(() => useFetchProducts(mockUrl));

    // Initially, products should be an empty array
    expect(result.current.products).toEqual([]);

    // Wait for the products to be loaded
    await waitFor(() => expect(result.current.products).toEqual(mockProducts));

    // Ensure that loading is set to false after the products are loaded
    expect(result.current.isLoading).toBe(false);
  });
});
