// 这里的 URL 是你 CF Workers 的endpoint
const API_URL = "https://schema.weizhihan3.workers.dev/contents/contents/schematic/";

let files = [];

async function fetchFiles(url, prefix = "") {
    const res = await fetch(url);
    if (!res.ok) throw new Error("网络错误，无法获取文件列表");
    const data = await res.json();

    for (const item of data) {
        if (item.type === "dir") {
            await fetchFiles(item.url, prefix + item.name + "/");
        } else if (item.name.endsWith(".litematic")) {
            files.push({
                name: item.name,
                path: prefix + item.name,
                // 如果你想抄:point_down: 将 download_url 替换为你 CF Workers 的代理地址
                url: `https://schema.weizhihan3.workers.dev/${encodeURIComponent(prefix + item.name)}`
            });
        }
    }
}
