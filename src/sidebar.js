let toggleAccess = true;

window.addEventListener("resize", () => {
  toggleAccess = window.innerWidth > 1024 ? true : false;
});
window.addEventListener("load", () => {
  toggleAccess = window.innerWidth > 1024 ? true : false;
});

const sidebar = document.getElementById("sidebar");
const sidebarItems = document.getElementById("sidebar-items");

document
  .querySelectorAll("#" + sidebar.getAttribute("id") + " ul > li > ul > li > a")
  .forEach((e) => {
    var fullText = e.textContent;
    var firstLetter = fullText.substring(0, 1);

    var fullTextEl = document.createElement("span");
    var firstLetterEl = document.createElement("span");
    firstLetterEl.classList.add("hidden");
    fullTextEl.textContent = fullText;
    firstLetterEl.textContent = firstLetter;

    e.textContent = "";
    e.appendChild(fullTextEl);
    e.appendChild(firstLetterEl);
  });

const toggleSidebarMobile = (
  sidebar,
  sidebarBackdrop,
  toggleSidebarMobileHamburger,
  toggleSidebarMobileClose
) => {
  sidebar.classList.toggle("hidden");
  sidebarBackdrop.classList.toggle("hidden");
  toggleSidebarMobileHamburger.classList.toggle("hidden");
  toggleSidebarMobileClose.classList.toggle("hidden");
};

const toggleSidebarMobileEl = document.getElementById("toggleSidebarMobile");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const toggleSidebarMobileHamburger = document.getElementById(
  "toggleSidebarMobileHamburger"
);
const toggleSidebarMobileClose = document.getElementById(
  "toggleSidebarMobileClose"
);
const toggleSidebarMobileSearch = document.getElementById(
  "toggleSidebarMobileSearch"
);

toggleSidebarMobileSearch.addEventListener("click", () => {
  toggleSidebarMobile(
    sidebar,
    sidebarBackdrop,
    toggleSidebarMobileHamburger,
    toggleSidebarMobileClose
  );
});

toggleSidebarMobileEl.addEventListener("click", () => {
  toggleSidebarMobile(
    sidebar,
    sidebarBackdrop,
    toggleSidebarMobileHamburger,
    toggleSidebarMobileClose
  );
});

sidebarBackdrop.addEventListener("click", () => {
  toggleSidebarMobile(
    sidebar,
    sidebarBackdrop,
    toggleSidebarMobileHamburger,
    toggleSidebarMobileClose
  );
});
