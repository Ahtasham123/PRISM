
export default async function handler(req, res) {
    const { q } = req.query;

    console.log('Search request received for:', q);

    if (!q) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    const apiKey = 'f2d4a2640f95cd790908b779ef7c9a68de66f2179cdc344f20a05a62cfb0f31a';
    const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&api_key=${apiKey}&num=20`;

    try {
        console.log('Fetching from SerpApi:', url.replace(apiKey, 'HIDDEN'));
        const response = await fetch(url);

        if (!response.ok) {
            console.error('SerpApi upstream error:', response.status, response.statusText);
            return res.status(response.status).json({ error: 'Upstream API error' });
        }

        const data = await response.json();
        console.log('SerpApi success, results count:', data.shopping_results?.length || 0);
        return res.status(200).json(data);
    } catch (error) {
        console.error('SerpApi Internal Error:', error);
        return res.status(500).json({ error: 'Failed to fetch search results', details: error.message });
    }
}
