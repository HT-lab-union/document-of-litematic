// This is the URL of your CF Workers endpoint
const API_URL = "https://schema.weizhihan3.workers.dev/contents/schematic/";

let files = [];

async function fetchFiles(url, prefix = "") {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network Error");
    const data = await res.json();

    for (const item of data) {
        if (item.type === "dir") {
            await fetchFiles(item.url, prefix + item.name + "/");
        } else if (item.name.endsWith(".litematic")) {
            files.push({
                name: item.name,
                path: prefix + item.name,
                // Cloudflare workers
                url: `https://schema.weizhihan3.workers.dev/${encodeURIComponent(prefix + item.name)}`
            });
        }
    }
}