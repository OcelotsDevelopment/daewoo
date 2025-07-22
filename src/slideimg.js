import gsap from "gsap"

// Get the carousel track
const track = document.getElementById("carouselTrack");
const pauseBtn = document.getElementById("pauseBtn");
// const playBtn = document.getElementById("playBtn");
// const speedUpBtn = document.getElementById("speedUpBtn");
// const slowDownBtn = document.getElementById("slowDownBtn");

let timeline;
let currentSpeed = 8; // seconds for complete loop (4 seconds per image)

// Create the stop-slide-stop animation
function createSlideAnimation() {
  if (timeline) timeline.kill(); // Kill existing timeline

  timeline = gsap.timeline({ repeat: -1 });

  const slideTime = currentSpeed / 8; // Time for each slide transition
  const pauseTime = currentSpeed / 4; // Time to pause on each image

  // Start at first image (pause)
  timeline.set(track, { x: "0%" }).to(
    {},
    {
      duration: pauseTime,
      onStart: () => updateProgressDot(0),
    }
  ); // Pause on first image

  // Animate through each image with pauses
  for (let i = 1; i <= 4; i++) {
    const position = -(i * 25); // -25%, -50%, -75%, -100%
    const slideIndex = i % 4; // Keep within 0-3 range

    // Slide to next image
    timeline
      .to(track, {
        x: `${position}%`,
        duration: slideTime,
        ease: "power2.inOut",
      })
      // Pause on current image
      .to(
        {},
        {
          duration: pauseTime,
          onStart: () => updateProgressDot(slideIndex),
        }
      );
  }

  // Reset to start position for seamless loop
  timeline.set(track, { x: "0%" });
}

// Update progress dots
function updateProgressDot(slideIndex) {
//   currentSlide = slideIndex;
//   progressDots.forEach((dot, index) => {
//     if (index === slideIndex) {
//       dot.classList.remove("bg-gray-300");
//       dot.classList.add("bg-blue-500");
//     } else {
//       dot.classList.remove("bg-blue-500");
//       dot.classList.add("bg-gray-300");
//     }
//   });
}

// Initialize the carousel
function initCarousel() {
  // Set initial position
  gsap.set(track, { x: "0%" });

  // Start the animation
  createSlideAnimation();
}

// Control functions
// function pauseCarousel() {
//   if (timeline) timeline.pause();
//   pauseBtn.classList.add("hidden");
//   playBtn.classList.remove("hidden");
// }

// function playCarousel() {
//   if (timeline) timeline.resume();
//   pauseBtn.classList.remove("hidden");
//   playBtn.classList.add("hidden");
// }

// function speedUp() {
//   currentSpeed = Math.max(8, currentSpeed - 2); // Minimum 8 seconds (2 sec per image)
//   createSlideAnimation();
// }

// function slowDown() {
//   currentSpeed = Math.min(32, currentSpeed + 2); // Maximum 32 seconds (8 sec per image)
//   createSlideAnimation();
// }

// Event listeners
// pauseBtn.addEventListener("click", pauseCarousel);
// playBtn.addEventListener("click", playCarousel);
// speedUpBtn.addEventListener("click", speedUp);
// slowDownBtn.addEventListener("click", slowDown);

// Pause on hover, resume on leave
// track.addEventListener("mouseenter", () => {
//   if (timeline && !timeline.paused()) {
//     timeline.pause();
//   }
// });

// track.addEventListener("mouseleave", () => {
//   if (timeline && timeline.paused() && !pauseBtn.classList.contains("hidden")) {
//     timeline.resume();
//   }
// });

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initCarousel);

// Handle window resize
window.addEventListener("resize", () => {
  gsap.set(track, { x: "0%" });
  createSlideAnimation();
});
