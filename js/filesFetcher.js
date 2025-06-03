fetch("https://schema.weizhihan3.workers.dev/list") //调用cf workers
      .then(r => r.json())
      .then(files => {
        const container = document.getElementById("file-list");
        container.innerHTML = "";
        files.forEach(file => {
          const div = document.createElement("div");
          div.className = "item";
          div.innerHTML = `<a href="${file.url}" download>${file.name}</a>`;
          container.appendChild(div);
        });
      });
