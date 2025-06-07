async function fetchFiles() {
  const res = await fetch('https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/');
  const data = await res.json();
  const ul = document.getElementById('file-list');
  ul.innerHTML = '';

  data.forEach(file => {
    if (file.name.endsWith('.litematic') || file.name.endsWith('.zip')) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `https://github-schema.weizhihan3.workers.dev/${encodeURIComponent(file.name)}`;
      a.textContent = file.name;
      a.download = file.name;
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
}

window.onload = fetchFiles;
