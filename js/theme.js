const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("浅色模式"); // 你按钮id是“浅色模式”？

function setTheme(theme) {
    if (theme === "light") {
        htmlEl.setAttribute("data-theme", "light");
    } else {
        htmlEl.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
    toggleBtn.textContent = theme === "light" ? "深色模式" : "浅色模式";
}

// 页面加载时检查localStorage，有就用，没有默认深色
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(currentTheme === "light" ? "dark" : "light");
});
