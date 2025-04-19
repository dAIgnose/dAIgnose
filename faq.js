document.querySelectorAll('.faq-ques').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq-ans');

        // Toggle the active class
        item.classList.toggle('active');

        // Adjust the max-height for smooth toggle
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});
