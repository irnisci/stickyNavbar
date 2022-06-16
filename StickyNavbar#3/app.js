const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
  entries.forEach(function (e) {
    const className = e.target.className;
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    const elementIndex = e.target.getAttribute("data-index");
    const coordinate = activeLink.getBoundingClientRect();
    const directions = {
      height: coordinate.height,
      width: coordinate.width,
      top: coordinate.top,
      left: coordinate.left,
    };

    if (e.isIntersecting) {
      trans.style.setProperty("height", `${directions.height}px`);
      trans.style.setProperty("width", `${directions.width}px`);
      trans.style.setProperty("top", `${directions.top}px`);
      trans.style.setProperty("left", `${directions.left}px`);
      trans.style.backgroundColor = gradients[elementIndex];
    }
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});
