const regLinks = document.querySelectorAll("ul a");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  e.preventDefault();
  if (e.target.matches("ul a")) {
    e.target.classList.add("active");
    regLinks.forEach((element) => {
      if (element != e.target) {
        element.classList.remove("active");
      }
    });
  }
}
