fetch("https://schema.weizhihan3.workers.dev/list")
  .then(r => {
    if (!r.ok) throw new Error(`HTTP错误: ${r.status}`);
    return r.json();
  })
  .then(files => {
    const container = document.getElementById("file-list");
    container.innerHTML = "";
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
