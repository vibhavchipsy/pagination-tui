// import { renderPage } from "./ui.js";

export function setupPagination(data, itemsPerPage, containerId, callback) {
  const pagination = new tui.Pagination(containerId, {
    totalItems: data.length,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
  });

  // Attach callback for page change
  pagination.on("afterMove", (event) => {
    callback(event.page);
  });

  return pagination;
}
