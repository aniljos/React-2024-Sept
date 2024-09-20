import axios from 'axios';
import { useState, useEffect, useDeferredValue } from 'react';

function WikiSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Defer the search term to delay the API call and avoid excessive requests
    const deferredSearchTerm = useDeferredValue(searchTerm);

    useEffect(() => {
        if (!deferredSearchTerm) return; // Don't fetch if the search term is empty

        setLoading(true);

        // Function to fetch products from backend based on the search term
        const fetchResults = async () => {
            try {
                const url = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${deferredSearchTerm}`
                const response = await axios.get(url);
                setResults(response.data[1]);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        // Call the function to fetch products
        fetchResults();
    }, [deferredSearchTerm]);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
            />

            {loading && <div>Loading...</div>}

            {!loading && (
                <ul>
                    {results.map(result => (
                        <li key={result}>{result}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WikiSearch;
