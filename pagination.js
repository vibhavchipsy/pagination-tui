// import { renderPage } from "./ui.js";

export function setupPagination(data, itemsPerPage, containerId, callback) {
  const paginationContainer = document.getElementById(containerId);

  if (!paginationContainer) {
    console.error(`Container with id ${containerId} not found`);
    return;
  }

  const pagination = new tui.Pagination(containerId, {
    totalItems: data.length,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
    template: function (type, page, currPage) {
      switch (type) {
        case "prev":
          return `<button class="pagination-prev"><span class="tui-ico-prev">prev</span></button>`;
        case "next":
          return `<button class="pagination-next"><span class="tui-ico-next">next</span></button>`;
        case "first":
          return `<button class="pagination-first"><span class="tui-ico-first">first</span></button>`;
        case "last":
          return `<button class="pagination-last"><span class="tui-ico-last">last</span></button>`;
        default:
          return `<button class="pagination-page">${page}</button>`;
      }
    },
  });

  // Attach callback for page change
  pagination.on("afterMove", (event) => {
    callback(event.page);
    replaceIcons();
  });

  replaceIcons();

  return pagination;
}

function replaceIcons() {
  const prevButton = document.querySelector(".tui-ico-prev");
  const nextButton = document.querySelector(".tui-ico-next");
  const firstButton = document.querySelector(".tui-ico-first");
  const lastButton = document.querySelector(".tui-ico-last");

  if (prevButton) {
    prevButton.innerHTML = getPrevIcon(); // Replace with custom icon
  }
  if (nextButton) {
    nextButton.innerHTML = getNextIcon(); // Replace with custom icon
  }
  if (firstButton) {
    firstButton.innerHTML = getFastForwardIcon(); // Replace with custom icon
  }
  if (lastButton) {
    lastButton.innerHTML = getFastForwardIcon(); // Replace with custom icon
  }
}

// Custom icons for pagination buttons
function getPrevIcon() {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5m7-7l-7 7 7 7"></path>
      </svg>
    `;
}

function getNextIcon() {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14m-7-7l7 7-7 7"></path>
      </svg>
    `;
}

function getFastForwardIcon() {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 4v16l12-8-12-8"></path>
      </svg>
    `;
}
