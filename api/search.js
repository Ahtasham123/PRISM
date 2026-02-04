
export default async function handler(req, res) {
    const { q } = req.query;

    console.log('Search request received for:', q);

    if (!q) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    // const apiKey = 'f2d4a2640f95cd790908b779ef7c9a68de66f2179cdc344f20a05a62cfb0f31a';
    // const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&api_key=${apiKey}&num=20`;

    try {
        console.log('Fetching mock data...');
        // Real API call commented out for debugging
        /*
        console.log('Fetching from SerpApi:', url.replace(apiKey, 'HIDDEN'));
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('SerpApi upstream error:', response.status, response.statusText);
            return res.status(response.status).json({ error: 'Upstream API error' });
        }

        const data = await response.json();
        */

        // Mock Data
        const data = {
            shopping_results: [
                {
                    title: "Mock iPhone 15 Pro",
                    thumbnail: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363027",
                    price: "$999.00",
                    old_price: "$1099.00",
                    source: "Apple",
                    rating: 4.9,
                    reviews: 1000,
                    delivery: "Free delivery"
                },
                {
                    title: "Mock iPhone 15 Pro Max",
                    thumbnail: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845761595",
                    price: "$1199.00",
                    source: "Best Buy",
                    rating: 4.8,
                    reviews: 500
                }
            ]
        };

        console.log('Returning mock data');
        return res.status(200).json(data);
    } catch (error) {
        console.error('SerpApi Internal Error:', error);
        return res.status(500).json({ error: 'Failed to fetch search results', details: error.message });
    }
}
