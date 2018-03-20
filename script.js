const contactButton = document.getElementById("contact-button");
const contactInfo = document.getElementById("contact-info");

contactButton.addEventListener("click", () => {
  contactInfo.classList.toggle("hidden");
});
