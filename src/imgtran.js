const featureItems = document.querySelectorAll(".feature-item");
const featureImages = document.querySelectorAll(".feature-image");

// Function to show specific image
function showImage(imageId) {
  featureImages.forEach((img) => {
    if (img.id === imageId) {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    } else {
      img.style.opacity = "0";
      img.style.transform = "scale(1.05)";
    }
  });
}

// Function to set active feature
function setActiveFeature(activeItem) {
  featureItems.forEach((item) => {
    if (item === activeItem) {
      item.classList.remove("inactive");
      item.classList.add("active");
    } else {
      item.classList.remove("active");
      item.classList.add("inactive");
    }
  });
}

// Add hover event listeners
featureItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const imageId = this.getAttribute("data-image");
    showImage(imageId);
    setActiveFeature(this);
  });

  // Optional: Add click functionality for mobile
  item.addEventListener("click", function () {
    const imageId = this.getAttribute("data-image");
    showImage(imageId);
    setActiveFeature(this);
  });
});

// Initialize with first feature active
document.addEventListener("DOMContentLoaded", function () {
  showImage("featureimg1");
});
