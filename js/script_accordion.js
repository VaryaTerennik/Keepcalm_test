"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const accArray = document.querySelectorAll(".main__accordion-item");

  accArray.forEach((acc) => {
    acc.addEventListener("click", function () {
      acc.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
