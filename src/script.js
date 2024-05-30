// Navbar Fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Modal
// Get the modal
var modal = document.getElementById("modal-content");

// Get the image inside the modal
var modalImage = document.querySelector(".modal-image");

// Get all image buttons
var imageButtons = document.querySelectorAll(".image-button");

// Add click event listener to each image button
imageButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the image source from the data-src attribute
        var imgSrc = this.getAttribute("data-src");

        // Set the source of the modal image
        modalImage.src = imgSrc;

        // Show the modal
        modal.classList.remove("hidden");
    });
});

// Get the close button
var closeButton = document.getElementById("close-modal");

// Add click event listener to the close button
closeButton.addEventListener("click", function() {
    // Hide the modal
    modal.classList.add("hidden");
});

var modalInner = document.querySelector(".modal-inner");

modalInner.addEventListener("click", function(event) {
    // If the target of the click is the modalInner itself (not the image or anything inside the modal content), close the modal
    if (event.target === modalInner) {
        modal.classList.add("hidden");
    }
});