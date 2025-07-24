// Handle section switching
function setActiveSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}

// Highlight navigation on hover
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.color = "#ffffff"; // Tailwind hover text-white
  });
  button.addEventListener("mouseout", () => {
    button.style.color = "#d1d5db"; // Tailwind text-gray-300
  });
});

