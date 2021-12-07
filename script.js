"use strict";

const summaryRatingEls = document.querySelectorAll(".summary-rating");
summaryRatingEls.forEach((el) =>
  el.addEventListener("click", function () {
    summaryRatingEls.forEach((el) => el.classList.remove("selected"));
    el.classList.add("selected");
  })
);

const summaryRatingBarContentEls = document.querySelectorAll(
  ".stamped-summary-rating-bar-content"
);
summaryRatingBarContentEls.forEach((el) => {
  el.style.width = `${el.dataset.rating}%`;
});
