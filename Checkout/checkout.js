document.addEventListener('DOMContentLoaded', function() {
  const filterToggles = document.querySelectorAll('.filter-toggle');

  filterToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.classList.toggle('active');
      const filterContent = this.nextElementSibling;
      if (filterContent.style.display === "block") {
        filterContent.style.display = "none";
      } else {
        filterContent.style.display = "block";
      }
    });
  });
});