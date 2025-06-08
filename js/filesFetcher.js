const API_URL = "https://github-schema.weizhihan3.workers.dev/contents/contents/schematic";

let files = [];

async function fetchFiles(url = API_URL, prefix = "") {
    const res = await fetch(url);
    if (!res.ok) throw new Error("网络错误，无法获取文件列表");
    const data = await res.json();

    for (const item of data) {
        if (item.type === "dir") {
            await fetchFiles(item.url, prefix + item.name + "/");
        } else if (item.name.endsWith(".litematic") || item.name.endsWith(".zip")) {
            const fullPath = prefix + item.name;
            files.push({
                name: item.name,
                path: fullPath,
                url: `https://github-schema.weizhihan3.workers.dev/raw/${encodeURIComponent(fullPath)}` // ✅ 关键：raw 路径用于下载
            });
        }
    }
}
