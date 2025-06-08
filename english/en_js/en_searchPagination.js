// shader next page, pages, and page count
const API_URL = "https://github-schema.weizhihan3.workers.dev/contents/contents/schematic/";
const fileList = document.getElementById("fileList");
const pagination = document.getElementById("pagination");
const searchBox = document.getElementById("searchBox");

let currentFiles = [];
let currentPage = 1;
const filesPerPage = 10;

function updateList(list) {
    currentFiles = list;
    currentPage = 1;
    renderPage();
}

function renderPage() {
    fileList.classList.remove("loading");
    fileList.innerHTML = "";

    if (currentFiles.length === 0) {
        fileList.innerHTML = "<li>No found</li>";
        pagination.innerHTML = "";
        return;
    }

    const start = (currentPage - 1) * filesPerPage;
    const end = start + filesPerPage;
    const pageFiles = currentFiles.slice(start, end);

    for (const file of pageFiles) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = file.url;
        a.textContent = file.path;
        a.target = "_blank";
        a.download = "";
        li.appendChild(a);
        fileList.appendChild(li);
    }

    renderPaginationControls();
}

function renderPaginationControls() {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(currentFiles.length / filesPerPage);
    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous page";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        currentPage--;
        renderPage();
    };

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next page";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        currentPage++;
        renderPage();
    };

    const pageInfo = document.createElement("span");
    pageInfo.textContent = `  ${currentPage}  /  ${totalPages}  `;

    pagination.appendChild(prevBtn);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextBtn);
}

searchBox.addEventListener("input", (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    if (!keyword) {
        updateList(files);
    } else {
        const filtered = files.filter((f) => f.path.toLowerCase().includes(keyword));
        updateList(filtered);
    }
});

// 初始化入口
(async function init() {
    try {
        await fetchFiles(API_URL);
        updateList(files);
    } catch (e) {
        fileList.classList.remove("loading");
        fileList.innerHTML = "<li>Loading failed! Check your internet connection!</li>";
        console.error(e);
    }
})();
