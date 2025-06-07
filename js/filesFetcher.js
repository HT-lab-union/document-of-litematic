export const API_URL = "https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/";

export const files = [];

export async function fetchFiles(url, prefix = "") {
    const res = await fetch(url);
    const data = await res.json();

    for (const item of data) {
        if (item.type === "dir") {
            await fetchFiles(item.url, prefix + item.name + "/");
        } else if (item.name.endsWith(".litematic") || item.name.endsWith(".zip")) {
            files.push({
                name: item.name,
                path: prefix + item.name,
                url: `https://github-schema.weizhihan3.workers.dev/${encodeURIComponent(prefix + item.name)}`
            });
        }
    }
}
