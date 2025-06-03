fetch("https://fetch("https:// schema.weizhihan3.workers.dev)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP错误: ${res.status}`);
    return res.json();
  })
  .then(files => {
    const container = document.getElementById("file-list");
    container.innerHTML = "";

    if (!files.length) {
      container.textContent = "暂无文件";
      return;
    }

    files.forEach(file => {
      // 注意给链接加 encodeURI 处理，防止空格等字符问题
      const link = document.createElement("a");
      link.href = encodeURI(file.url);
      link.textContent = file.name;
      link.download = ""; // 让浏览器识别为下载链接
      link.target = "_blank"; // 新标签打开

      const div = document.createElement("div");
      div.className = "item";
      div.appendChild(link);

      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("file-list").textContent = "加载失败：" + err.message;
  });
/list")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP错误: ${res.status}`);
    return res.json();
  })
  .then(files => {
    const container = document.getElementById("file-list");
    container.innerHTML = "";

    if (!files.length) {
      container.textContent = "暂无文件";
      return;
    }

    files.forEach(file => {
      // 注意给链接加 encodeURI 处理，防止空格等字符问题
      const link = document.createElement("a");
      link.href = encodeURI(file.url);
      link.textContent = file.name;
      link.download = ""; // 让浏览器识别为下载链接
      link.target = "_blank"; // 新标签打开

      const div = document.createElement("div");
      div.className = "item";
      div.appendChild(link);

      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("file-list").textContent = "加载失败：" + err.message;
  });
/list")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP错误: ${res.status}`);
    return res.json();
  })
  .then(files => {
    const container = document.getElementById("file-list");
    container.innerHTML = "";

    if (!files.length) {
      container.textContent = "暂无文件";
      return;
    }

    files.forEach(file => {
      // 注意给链接加 encodeURI 处理，防止空格等字符问题
      const link = document.createElement("a");
      link.href = encodeURI(file.url);
      link.textContent = file.name;
      link.download = ""; // 让浏览器识别为下载链接
      link.target = "_blank"; // 新标签打开

      const div = document.createElement("div");
      div.className = "item";
      div.appendChild(link);

      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("file-list").textContent = "加载失败：" + err.message;
  });
