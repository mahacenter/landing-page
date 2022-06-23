document.querySelectorAll(".carousel-partner").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel-partner__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel-partner__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel-partner__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel-partner__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel-partner__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel-partner__button--selected")
        );
  
        items[i].classList.add("carousel-partner__item--selected");
        button.classList.add("carousel-partner__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel-partner__item--selected");
    buttons[0].classList.add("carousel-partner__button--selected");
  });
  