// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add 'visible' class when the element is in the viewport
function handleScroll() {
    const donationTypes = document.querySelectorAll('.donation-type');
    donationTypes.forEach((type) => {
        if (isInViewport(type)) {
            type.classList.add('visible');
        }
    });
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);

// Initialize scroll effect on page load
document.addEventListener('DOMContentLoaded', handleScroll);
