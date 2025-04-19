
  document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let visibleCount = 3;
    const increment = 10;

    function showTestimonials() {
      testimonials.forEach((card, index) => {
        card.style.display = index < visibleCount ? "block" : "none";
      });

      if (visibleCount >= testimonials.length) {
        loadMoreBtn.style.display = "none";
      }
    }

    showTestimonials();

    loadMoreBtn.addEventListener("click", () => {
      visibleCount += increment;
      showTestimonials();
    });
  });
