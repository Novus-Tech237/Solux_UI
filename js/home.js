const hamburber = document.querySelector(".hamburger")
hamburber.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove "active" class from all navigation links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Add "active" class to the clicked navigation link
    this.classList.add('active');
  });
});