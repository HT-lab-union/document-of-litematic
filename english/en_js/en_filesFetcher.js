const API_URL = "https://github-schema.weizhihan3.workers.dev/contents/contents/schematic"; //Here is your cloudflare workers url and subfiles

let files = [];

async function fetchFiles(url = API_URL, prefix = "") {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network Error");
    const data = await res.json();

    for (const item of data) {
        if (item.type === "dir") {
            await fetchFiles(item.url, prefix + item.name + "/");
        } else if (item.name.endsWith(".litematic") || item.name.endsWith(".zip")) {
            const fullPath = prefix + item.name;
            files.push({
                name: item.name,
                path: fullPath,
                url: `https://github-schema.weizhihan3.workers.dev/raw/${encodeURIComponent(fullPath)}` // ✅ IMPORTANT! raw to download
            });
        }
    }
}
