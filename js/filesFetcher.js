 async function fetchFiles() {
    const res = await fetch('https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/');
    const data = await res.json();
    const ul = document.getElementById('file-list');
    data.forEach(file => {
      if (file.name.endsWith('.litematic') || file.name.endsWith('.zip')) {
        const li = document.createElement('li');
        li.textContent = file.name;
        ul.appendChild(li);
      }
    });
  }
