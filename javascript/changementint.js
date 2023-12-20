document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.titles h3');
    const contents = document.querySelectorAll('.content');

    titles.forEach((title, index) => {
        title.addEventListener('click', function() {
            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
        });
    });
});
