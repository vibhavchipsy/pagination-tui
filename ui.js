// Render a single accordion item
export function renderAccordionItem(container, item) {
  const accordionItem = document.createElement("div");
  accordionItem.innerHTML = `
      <div class="accordion-title">${item.title}</div>
      <div class="accordion-content" style="display: none;">${item.content}</div>
    `;
  accordionItem
    .querySelector(".accordion-title")
    .addEventListener("click", () => {
      const content = accordionItem.querySelector(".accordion-content");
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  container.appendChild(accordionItem);
}

// Render a full page of items
export function renderPage(container, data, start, end) {
  container.innerHTML = ""; // Clear the container
  const currentPageData = data.slice(start, end);
  currentPageData.forEach((item) => {
    renderAccordionItem(container, item);
  });
}
