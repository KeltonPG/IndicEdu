const dashboard = document.querySelector("#dashboard");
const home = document.querySelector("#home");
const cta = document.querySelector(".cta-button");
const backLinks = document.querySelectorAll(".dashboard-back, .dashboard-link");

cta.addEventListener("click", (e) => {
  e.preventDefault();
  home.style.display = "none";
  dashboard.classList.remove("hidden");
});

backLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    dashboard.classList.add("hidden");
    home.style.display = "block";
  });
});
