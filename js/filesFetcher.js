async function fetchFileList() {
  const workerApiUrl = 'https://github-schema.weizhihan3.workers.dev/'; // 你的 Worker URL
  const res = await fetch(workerApiUrl);
  if (!res.ok) throw new Error('获取失败');
  const data = await res.json();

  // data 是文件数组
  data.forEach(file => {
    console.log('文件名:', file.name);
    console.log('下载链接:', file.download_url);
  });

  return data;
}

fetchFileList();
