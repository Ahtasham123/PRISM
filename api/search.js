export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  const apiKey = 'f2d4a2640f95cd790908b779ef7c9a68de66f2179cdc344f20a05a62cfb0f31a'; // TODO: Move to process.env.SERPAPI_KEY
  const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&api_key=${apiKey}&num=20`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('SerpApi Error:', error);
    return res.status(500).json({ error: 'Failed to fetch search results' });
  }
}
