"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main__tab-menu-title"),
    tabsContent = document.querySelectorAll(".main__tab-content"),
    tabsParent = document.querySelector(".main__tab-menu");

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("main__tab-menu-title_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("main__tab-menu-title_active");
  }

  hideTabsContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("main__tab-menu-title")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });

  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    containerSlides = document.querySelector(".offer__slider-container"),
    wrapper = document.querySelector(".offer__slider-wrapper"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    // width = window.getComputedStyle(wrapper).width;
    width = "398.5px";

  console.log(width);

  // containerSlides.style.width = 100 * slides.length + "%";
  containerSlides.style = `display: flex; width: ${
    100 * slides.length + "%"
  }; transition: 0.5s all`;
  // wrapper.style.overflow = "hidden";

  // slides.forEach((slide) => {
  //   slide.style.width = width;
  // });

  let offset = 0;
  let slideIndex = 1;

  next.addEventListener("click", () => {
    if (
      offset == +width.slice(0, width.length - 2) * (slides.length - 3) &&
      slideIndex === slides.length - 2
    ) {
      offset = 0;
      slideIndex = 1;
    } else {
      offset += +width.slice(0, width.length - 2);
      slideIndex++;
    }
    containerSlides.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener("click", () => {
    if (offset <= 0 && slideIndex <= 1) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 3);
      slideIndex = slides.length - 2;
    } else {
      offset -= +width.slice(0, width.length - 2);
      slideIndex--;
    }
    containerSlides.style.transform = `translateX(-${offset}px)`;
  });

  slider.style.position = "relative";
});
