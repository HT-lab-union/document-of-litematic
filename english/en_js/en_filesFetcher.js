// This is the URL of your CF Workers endpoint
const API_URL = "https://schema.weizhihan3.workers.dev/contents/schematic/";

let files = [];

async function fetchFiles(url, prefix = "") {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network Error, unable to fetch file list");
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
    } catch (error) {
        const fileList = document.getElementById('fileList');
        if (fileList) {
            fileList.classList.remove('loading');
            fileList.innerHTML = `<li style="color:red;">Failed to load: ${error.message}</li>`;
        }
    }
}