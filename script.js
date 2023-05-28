var navToggler = document.querySelector(".nav-toggler");
var navMenu = document.querySelector(".nav-menu");

navToggler.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Active Menu Item
var navItems = document.querySelectorAll(".nav-menu li");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove active class from all items
    navItems.forEach(function (navItem) {
      navItem.classList.remove("active");
    });

    // Add active class to the clicked item
    item.classList.add("active");
  });
});

// Smooth Scrolling
var navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    var target = document.querySelector(link.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// Contact Form Submission
var contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Perform form validation
  // ...

  // Submit form data to the server-side script
  // ...
});

// Image Slider
var images = document.querySelectorAll(".portfolio img");
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var currentIndex = 0;

function showImage(index) {
  images.forEach(function (image) {
    image.style.display = "none";
  });

  images[index].style.display = "block";
}

showImage(currentIndex);

prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Progress Bar Animation
var progressBars = document.querySelectorAll(".progress-bar");

function animateProgressBar() {
  progressBars.forEach(function (progressBar) {
    var targetWidth = progressBar.getAttribute("data-progress");
    progressBar.style.width = targetWidth;
  });
}

animateProgressBar();
