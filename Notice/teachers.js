function scrollCards(direction) {
    const container = document.querySelector('.teachers-container');
    if (direction === 'left') {
        container.scrollBy({
            left: -350, // Adjust the scroll distance as needed
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: 350, // Adjust the scroll distance as needed
            behavior: 'smooth'
        });
    }
}
