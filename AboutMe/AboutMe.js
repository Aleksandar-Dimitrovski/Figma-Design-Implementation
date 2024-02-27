document.addEventListener("DOMContentLoaded", function () {
    // Get the collapse button and the collapse element
    const collapseButton = document.querySelector('[data-bs-toggle="collapse"]');
    const collapseElement = document.querySelector(collapseButton.getAttribute("data-bs-target"));

    // Add an event listener to the document to close the collapse when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !collapseElement.contains(event.target) && // Clicked outside of the collapse
        !collapseButton.contains(event.target) // Clicked outside of the collapse button
      ) {
        // Check if the collapse is currently open
        if (collapseElement.classList.contains("show")) {
          // Close the collapse
          bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
        }
      }
    });
  });