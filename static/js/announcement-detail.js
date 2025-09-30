document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const message = document.querySelector(".message");

  toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none") {
      message.style.display = "block";
      toggleBtn.textContent = "Show less";
    } else {
      message.style.display = "none";
      toggleBtn.textContent = "Read more";
    }
  });
});