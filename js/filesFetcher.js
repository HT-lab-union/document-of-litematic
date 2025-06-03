fetch("https://你的worker域名或路径")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP错误: ${res.status}`);
    return res.json();
  })
  .then(files => {
    const container = document.getElementById("file-list");
    container.innerHTML = ""; // 清空加载中

    if (!files.length) {
      container.textContent = "暂无文件";
      return;
    }

    files.forEach(file => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `<a href="${file.url}" download>${file.name}</a>`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("file-list").textContent = "加载失败：" + err.message;
  });
