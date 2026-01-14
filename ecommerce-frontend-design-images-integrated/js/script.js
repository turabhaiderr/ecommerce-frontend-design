// Basic interactivity for internship project (desktop only)

// 1) Search button: prevent form submit if a form exists
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-search-btn]");
  if (!btn) return;
  e.preventDefault();
});

// 2) Product detail tabs
document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const tabsWrap = tab.closest(".tabs-box");
  if (!tabsWrap) return;

  const allTabs = tabsWrap.querySelectorAll("[data-tab]");
  const allPanels = tabsWrap.querySelectorAll("[data-panel]");

  allTabs.forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  const target = tab.getAttribute("data-tab");
  allPanels.forEach(p => {
    p.style.display = (p.getAttribute("data-panel") === target) ? "block" : "none";
  });
});

// 3) Product detail thumbnail click
document.addEventListener("click", (e) => {
  const thumb = e.target.closest("[data-thumb]");
  if (!thumb) return;

  const mainImg = document.querySelector("[data-main-image]");
  if (!mainImg) return;

  const src = thumb.getAttribute("data-thumb");
  mainImg.setAttribute("src", src);
});

// 4) Size dropdown: show selection
document.addEventListener("change", (e) => {
  const sel = e.target.closest("[data-size-select]");
  if (!sel) return;
  const out = document.querySelector("[data-size-output]");
  if (!out) return;
  out.textContent = sel.value;
});
