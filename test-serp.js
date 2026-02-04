
const apiKey = 'f2d4a2640f95cd790908b779ef7c9a68de66f2179cdc344f20a05a62cfb0f31a';
const q = 'iphone 15 pro';
const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&api_key=${apiKey}&num=5`;

console.log('Testing SerpApi...');
fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.error('API Error:', data.error);
        } else if (data.shopping_results) {
            console.log('Success! Found', data.shopping_results.length, 'results.');
            console.log('Sample item:', data.shopping_results[0].title);
        } else {
            console.log('No specific error, but no shopping_results found.');
            console.log('Full response keys:', Object.keys(data));
        }
    })
    .catch(err => console.error('Network Error:', err));
