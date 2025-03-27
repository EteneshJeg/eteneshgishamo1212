// Sidebar elements
const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener("mouseover", function() {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseout", function() {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// Sidebar toggle
menu.addEventListener("click", function() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function() {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// Email sending function
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs
    .send("service_lup53ga", "template_v335xlv", params)
    .then(function(response) {
      alert("Email Sent Successfully!");
      console.log("Success:", response);
    })
    .catch(function(error) {
      alert("Failed to send message. Please try again!");
      console.error("Error:", error);
    });
}

// Attach event listener to form
document
  .getElementById("contact")
  .addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    sendMail(); // Call sendMail function when the form is submitted
  });
