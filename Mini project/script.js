// script.js
const filterButtons = document.querySelectorAll('.filter-button');
const videoItems = document.querySelectorAll('.video-item');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.getAttribute('data-filter');

        videoItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
