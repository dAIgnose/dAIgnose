document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            let rating = this.getAttribute('data-value');
            for (let i = 0; i < rating - 1; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});