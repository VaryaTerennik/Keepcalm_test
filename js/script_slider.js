"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    containerSlides = document.querySelector(".offer__slider-container"),
    wrapper = document.querySelector(".offer__slider-wrapper"),
    next = document.querySelector(".offer__slider-next"),
    prev = document.querySelector(".offer__slider-prev"),
    widthLeg = window.getComputedStyle(
      document.querySelector(".offer__slide_two .slide__description")
    ).width,
    width = +widthLeg.slice(0, widthLeg.length - 2) + 37 + "px";

  console.log(width);
  console.log(widthLeg);
  containerSlides.style = `display: flex; width: ${
    100 * slides.length + "%"
  }; transition: 0.5s all`;

  let offset = 0;
  let slideIndex = 1;
  const windowWidth = window.innerWidth;

  if (windowWidth > 450) {
    next.addEventListener("click", () => {
      if (
        offset == +width.slice(0, width.length - 2) * (slides.length - 4) &&
        slideIndex === slides.length - 3
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
      if (offset >= -+width.slice(0, width.length - 2) && slideIndex <= 0) {
        offset = 0;
        slideIndex = 1;
      } else {
        offset -= +width.slice(0, width.length - 2);
        console.log(offset);
        slideIndex--;
        console.log(slideIndex);
      }
      containerSlides.style.transform = `translateX(${-offset}px)`;
    });
  }

  slider.style.position = "relative";

  if (windowWidth <= 450) {
    next.addEventListener("click", () => {
      if (
        offset >= +width.slice(0, width.length - 2) * (slides.length - 3) &&
        slideIndex === slides.length - 2
      ) {
        console.log(offset);
        console.log(slideIndex);
        offset = 0;
        slideIndex = 1;
      } else {
        offset += +width.slice(0, width.length - 2);
        console.log(offset);
        slideIndex++;
        console.log(slideIndex);
      }

      containerSlides.style.transform = `translateX(${-offset}px)`;
    });
    prev.addEventListener("click", () => {
      if (
        offset >= -+width.slice(0, width.length - 2) * (slides.length - 3) &&
        slideIndex <= -1
      ) {
        offset = 0;
        slideIndex = 1;
      } else {
        offset -= +width.slice(0, width.length - 2);
        console.log(offset);
        slideIndex--;
        console.log(slideIndex);
      }

      containerSlides.style.transform = `translateX(${-offset}px)`;
    });
  }

  const sladesImg = [
    { id: 0, url: "images/jasmin-chew.jpg" },
    {
      id: 1,
      url: "images/cat-han.jpg",
      description:
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    { id: 2, url: "images/angelica-echeverry.jpg" },
    { id: 3, url: "images/joeyy-lee.jpg" },
    {
      id: 4,
      url: "images/andres-vera.jpg",
      description:
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  slides.forEach((slide, index) => {
    slide.addEventListener("click", (e) => {
      const target = e.target;
      e.stopPropagation();
      const template = document.createElement("div");
      template.classList.add("slider-fullscreen");
      template.innerHTML = `
      <div class="slider-fullscreen__button-wrapper">
          <button class="slider-fullscreen__button-close">
            <img src="icons/close.svg"/>
          </button>
      </div>
      <div class="slider-fullscreen__wrapper">
        <div class="slide-fullscreen">
            <img src='${sladesImg[index].url}'/>
            <div class="slider-fullscreen__nav">
                <div class="slider-fullscreen__nav-prev">
                    <img src="icons/prev_white.svg" alt="prev" />
                </div>
                <div class="slider-fullscreen__nav-next">
                    <img src="icons/next_white.svg" alt="next" />
                </div>
            </div>
        </div>
        <div class="description-fullscreen">${
          sladesImg[index].description ? sladesImg[index].description : ""
        }</div>
      </div>
      `;
      slider.append(template);

      const close = document.querySelector(
        ".slider-fullscreen__button-wrapper img"
      );
      const fullScreenSlader = document.querySelector(".slider-fullscreen");
      const fullScreenWrapper = document.querySelector(
        ".slider-fullscreen__wrapper"
      );

      fullScreenSlader.addEventListener("click", (e) => {
        const target = e.target;
        if (target == close || target == fullScreenWrapper) {
          slider.removeChild(fullScreenSlader);
        }
      });

      const prev = document.querySelector(".slider-fullscreen__nav-prev");
      const next = document.querySelector(".slider-fullscreen__nav-next");
      let i = index;

      const img = document.querySelector("div.slide-fullscreen img");
      const descr = document.querySelector(".description-fullscreen");

      next.addEventListener("click", () => {
        if (+i < sladesImg.length - 1) {
          i++;
          img.src = sladesImg[i].url;
          descr.textContent = sladesImg[i].description
            ? sladesImg[i].description
            : "";
        } else if (i == sladesImg.length - 1) {
          i = 0;
          img.src = sladesImg[i].url;
          descr.textContent = sladesImg[i].description
            ? sladesImg[i].description
            : "";
        }
      });

      prev.addEventListener("click", () => {
        if (i <= sladesImg.length - 1 && i > 0) {
          i--;
          img.src = sladesImg[i].url;
          descr.textContent = sladesImg[i].description
            ? sladesImg[i].description
            : "";
        } else if (i <= 0) {
          i = sladesImg.length - 1;
          img.src = sladesImg[i].url;
          descr.textContent = sladesImg[i].description
            ? sladesImg[i].description
            : "";
        }
      });
    });
  });
});
