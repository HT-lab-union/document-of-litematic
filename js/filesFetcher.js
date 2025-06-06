fetch('https://schema.weizhihan3.workers.dev/') //  Worker 链接
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      console.log(file.name, file.download_url)
      // 用 file.name 和 file.download_url 生成列表
    })
  })
