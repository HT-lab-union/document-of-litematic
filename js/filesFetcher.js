  async function fetchFiles() {
    const res = await fetch('https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/');
    const data = await res.json();
    const ul = document.getElementById('file-list');
    ul.innerHTML = ''; // 清空旧内容

    data.forEach(file => {
      if (file.name.endsWith('.litematic') || file.name.endsWith('.zip')) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `https://github-schema.weizhihan3.workers.dev/${encodeURIComponent(file.name)}`; // 你的workers代理下载链接
        a.textContent = file.name;
        a.target = '_blank';
        a.download = file.name; // 建议加上download属性，提示浏览器下载

        li.appendChild(a);
        ul.appendChild(li);
      }
    });
  }

  window.onload = () => {
    fetchFiles();
  };
