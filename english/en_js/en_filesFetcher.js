async function fetchFiles(apiUrl) {
    const res = await fetch(apiUrl);
    const data = await res.json();
    files = [];

    data.forEach(item => {
        if (item.name.endsWith('.litematic') || item.name.endsWith('.zip')) {
            files.push({
                name: item.name,
                path: item.name,
                url: `https://github-schema.weizhihan3.workers.dev/${encodeURIComponent(item.name)}`
            });
        }
    });
}
