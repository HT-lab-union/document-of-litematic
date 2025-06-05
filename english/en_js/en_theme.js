const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("light mode"); // Is buttom id“light mode”？

function setTheme(theme) {
    if (theme === "light") {
        htmlEl.setAttribute("data-theme", "light");
    } else {
        htmlEl.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
    toggleBtn.textContent = theme === "light" ? "dark mode" : "light mode";
}

// initialize web try to searching localStorage，if y use local settings，if n use origin style
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(currentTheme === "light" ? "dark" : "light");
});
