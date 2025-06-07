const API_URL = "https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/";

let files = [];

async function fetchFiles() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("网络错误，无法获取文件列表");

    const data = await res.json();

    for (const item of data) {
        files.push({
            name: item.name,
            url: item.download_url, // GitHub Raw 下载链接
        });
    }

    console.log(files);
    // 你可以在这里更新页面 DOM
}
