// document.addEventListener("DOMContentLoaded", () => {
// Sample JSON data
//   const data = [
//     { title: "Item 1", content: "This is the content for Item 1." },
//     { title: "Item 2", content: "This is the content for Item 2." },
//     { title: "Item 3", content: "This is the content for Item 3." },
//     { title: "Item 4", content: "This is the content for Item 4." },
//     { title: "Item 5", content: "This is the content for Item 5." },
//     { title: "Item 6", content: "This is the content for Item 6." },
//     { title: "Item 7", content: "This is the content for Item 7." },
//     { title: "Item 8", content: "This is the content for Item 8." },
//     { title: "Item 9", content: "This is the content for Item 9." },
//     { title: "Item 10", content: "This is the content for Item 10." },
//     { title: "Item 11", content: "This is the content for Item 11." },
//     { title: "Item 12", content: "This is the content for Item 12." },
//     { title: "Item 13", content: "This is the content for Item 13." },
//     { title: "Item 14", content: "This is the content for Item 14." },
//     { title: "Item 15", content: "This is the content for Item 15." },
//     { title: "Item 16", content: "This is the content for Item 16." },
//     { title: "Item 17", content: "This is the content for Item 17." },
//     { title: "Item 18", content: "This is the content for Item 18." },
//     { title: "Item 19", content: "This is the content for Item 19." },
//     { title: "Item 20", content: "This is the content for Item 20." },
//     { title: "Item 21", content: "This is the content for Item 21." },
//     { title: "Item 22", content: "This is the content for Item 22." },
//     { title: "Item 23", content: "This is the content for Item 23." },
//     { title: "Item 24", content: "This is the content for Item 24." },
//     { title: "Item 25", content: "This is the content for Item 25." },
//     { title: "Item 26", content: "This is the content for Item 26." },
//     { title: "Item 27", content: "This is the content for Item 27." },
//     { title: "Item 28", content: "This is the content for Item 28." },
//     { title: "Item 29", content: "This is the content for Item 29." },
//     { title: "Item 30", content: "This is the content for Item 30." },
//     { title: "Item 31", content: "This is the content for Item 31." },
//     { title: "Item 32", content: "This is the content for Item 32." },
//     { title: "Item 33", content: "This is the content for Item 33." },
//     { title: "Item 34", content: "This is the content for Item 34." },
//     { title: "Item 35", content: "This is the content for Item 35." },
//     { title: "Item 36", content: "This is the content for Item 36." },
//     { title: "Item 37", content: "This is the content for Item 37." },
//     { title: "Item 38", content: "This is the content for Item 38." },
//     { title: "Item 39", content: "This is the content for Item 39." },
//     { title: "Item 40", content: "This is the content for Item 40." },
//     { title: "Item 41", content: "This is the content for Item 41." },
//     { title: "Item 42", content: "This is the content for Item 42." },
//     { title: "Item 43", content: "This is the content for Item 43." },
//     { title: "Item 44", content: "This is the content for Item 44." },
//     { title: "Item 45", content: "This is the content for Item 45." },
//     { title: "Item 46", content: "This is the content for Item 46." },
//     { title: "Item 47", content: "This is the content for Item 47." },
//     { title: "Item 48", content: "This is the content for Item 48." },
//     { title: "Item 49", content: "This is the content for Item 49." },
//     { title: "Item 50", content: "This is the content for Item 50." },
//     { title: "Item 51", content: "This is the content for Item 51." },
//     { title: "Item 52", content: "This is the content for Item 52." },
//     { title: "Item 53", content: "This is the content for Item 53." },
//     { title: "Item 54", content: "This is the content for Item 54." },
//     { title: "Item 55", content: "This is the content for Item 55." },
//     { title: "Item 56", content: "This is the content for Item 56." },
//     { title: "Item 57", content: "This is the content for Item 57." },
//     { title: "Item 58", content: "This is the content for Item 58." },
//     { title: "Item 59", content: "This is the content for Item 59." },
//     { title: "Item 60", content: "This is the content for Item 60." },
//     { title: "Item 61", content: "This is the content for Item 61." },
//     { title: "Item 62", content: "This is the content for Item 62." },
//     { title: "Item 63", content: "This is the content for Item 63." },
//     { title: "Item 64", content: "This is the content for Item 64." },
//     { title: "Item 65", content: "This is the content for Item 65." },
//     { title: "Item 66", content: "This is the content for Item 66." },
//     { title: "Item 67", content: "This is the content for Item 67." },
//     { title: "Item 68", content: "This is the content for Item 68." },
//     { title: "Item 69", content: "This is the content for Item 69." },
//     { title: "Item 70", content: "This is the content for Item 70." },
//     { title: "Item 71", content: "This is the content for Item 71." },
//     { title: "Item 72", content: "This is the content for Item 72." },
//     { title: "Item 73", content: "This is the content for Item 73." },
//     { title: "Item 74", content: "This is the content for Item 74." },
//     { title: "Item 75", content: "This is the content for Item 75." },
//     { title: "Item 76", content: "This is the content for Item 76." },
//     { title: "Item 77", content: "This is the content for Item 77." },
//     { title: "Item 78", content: "This is the content for Item 78." },
//     { title: "Item 79", content: "This is the content for Item 79." },
//     { title: "Item 80", content: "This is the content for Item 80." },
//     { title: "Item 81", content: "This is the content for Item 81." },
//     { title: "Item 82", content: "This is the content for Item 82." },
//     { title: "Item 83", content: "This is the content for Item 83." },
//     { title: "Item 84", content: "This is the content for Item 84." },
//     { title: "Item 85", content: "This is the content for Item 85." },
//     { title: "Item 86", content: "This is the content for Item 86." },
//     { title: "Item 87", content: "This is the content for Item 87." },
//     { title: "Item 88", content: "This is the content for Item 88." },
//     { title: "Item 89", content: "This is the content for Item 89." },
//     { title: "Item 90", content: "This is the content for Item 90." },
//     { title: "Item 91", content: "This is the content for Item 91." },
//     { title: "Item 92", content: "This is the content for Item 92." },
//     { title: "Item 93", content: "This is the content for Item 93." },
//     { title: "Item 94", content: "This is the content for Item 94." },
//     { title: "Item 95", content: "This is the content for Item 95." },
//     { title: "Item 96", content: "This is the content for Item 96." },
//     { title: "Item 97", content: "This is the content for Item 97." },
//     { title: "Item 98", content: "This is the content for Item 98." },
//     { title: "Item 99", content: "This is the content for Item 99." },
//   ];
//   const itemsPerPage = 11; // Items per page
//   const container = document.getElementById("accordion-container");
//   const pagination = new tui.Pagination("pagination", {
//     totalItems: data.length,
//     itemsPerPage: itemsPerPage,
//     visiblePages: 5,
//     centerAlign: true,
//   });
// Function to render accordion content for the current page
//   function renderPage(page) {
//     container.innerHTML = ""; // Clear the container
//     const start = (page - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const currentPageData = data.slice(start, end);
//     // Render the accordion items
//     currentPageData.forEach((item, index) => {
//       const accordionItem = document.createElement("div");
//       accordionItem.innerHTML = `
//           <div class="accordion-title">${item.title}</div>
//           <div class="accordion-content" style="display: none;">${item.content}</div>
//         `;
//       accordionItem
//         .querySelector(".accordion-title")
//         .addEventListener("click", () => {
//           const content = accordionItem.querySelector(".accordion-content");
//           content.style.display =
//             content.style.display === "none" ? "block" : "none";
//         });
//       container.appendChild(accordionItem);
//     });
//   }
// Initial render
//   renderPage(1);
// Listen for page changes
//   pagination.on("afterMove", (event) => {
//     renderPage(event.page);
//   });
// });

import { data } from "./data.js";
import { renderPage } from "./ui.js";
import { setupPagination } from "./pagination.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemsPerPage = 11; // Items per page
  const container = document.getElementById("accordion-container");

  // Render initial page
  function render(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    renderPage(container, data, start, end);
  }

  render(1); // Initial render

  // Setup pagination
  setupPagination(data, itemsPerPage, "pagination", render);
});
