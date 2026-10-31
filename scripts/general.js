document.body.classList = localStorage.getItem("@cnmbclubinfo-theme") === "true" ? "dark" : "";

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("@cnmbclubinfo-theme", document.body.classList.contains("dark"));
})