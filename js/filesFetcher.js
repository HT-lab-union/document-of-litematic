fetch("https://schema.weizhihan3.workers.dev/")
  .then(res => res.json())
  .then(data => {
    // 显示文件名
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name;
      document.querySelector("#list").appendChild(li);
    });
  });
