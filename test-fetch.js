
async function testFetch() {
    const projectId = 'g0wx30dp';
    const dataset = 'production';
    const query = encodeURIComponent('*[_type == "blog"]');
    const url = `https://${projectId}.api.sanity.io/v2024-02-28/data/query/${dataset}?query=${query}`;

    console.log('Fetching from:', url);

    try {
        const response = await fetch(url);
        const result = await response.json();
        if (result.result) {
            console.log('Total blogs found:', result.result.length);
            console.log('Blogs:', JSON.stringify(result.result, null, 2));
        } else {
            console.log('No result field in response:', result);
        }
    } catch (error) {
        console.error('Error fetching:', error);
    }
}

testFetch();
