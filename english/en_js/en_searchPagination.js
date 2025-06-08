// for pages function, searching function

const fileList = document.getElementById("file-list");
const pagination = document.getElementById("pagination");
const searchBox = document.getElementById("searchBox");

let currentFiles = [];
let currentPage = 1;
const filesPerPage = 10;

// update list view
function updateList(list) {
    currentFiles = list;
    currentPage = 1;
    renderPage();
}

// shader current page
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
        a.href = file.url;         // ✅ CF Worker supply url
        a.textContent = file.name;
        a.download = file.name;    // ✅ dowload
        li.appendChild(a);
        fileList.appendChild(li);
    }

    renderPaginationControls();
}

// 分页控制
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
    pageInfo.textContent = ` page${currentPage}  / total ${totalPages}  `;

    pagination.appendChild(prevBtn);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextBtn);
}

// search event
searchBox.addEventListener("input", (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    if (!keyword) {
        updateList(files);
    } else {
        const filtered = files.filter((f) => f.name.toLowerCase().includes(keyword));
        updateList(filtered);
    }
});

// ✅ page loading
(async function init() {
    try {
        await fetchFiles();
        updateList(files);
    } catch (e) {
        fileList.classList.remove("loading");
        fileList.innerHTML = "<li>Failed to load files! Please refresh the tab and try again.</li>";
        console.error(e);
    }
})();
