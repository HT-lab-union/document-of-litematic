// 负责从 GitHub API 递归抓取所有 .litematic 文件
const API_URL = "https://api.github.com/repos/HT-lab-union/document-of-litematic/contents/contents/schematic/";

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
                url: item.download_url,
            });
        }
    }
}
