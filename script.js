"use strict";

// انتخاب تمام کارت ها
const cards = document.querySelectorAll(".card");

// انتخاب دکمه ی استارت
const startBtn = document.querySelector(".btn-start");

// انتخاب دکمه ی بعدی
const nextBtn = document.querySelectorAll(".btn-next");

// انتخاب دکمه ی انجام شد
const doneBtn = document.querySelector(".btn-done");

// انتخاب دکمه ی منو
const menuBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");

// انتخاب دکمه ی منوی تمرینات
const submenuBtn = document.getElementById("submenu-toggle");
const submenu = document.getElementById("exercises-submenu");

// متغییر شمارنده
let steps = -1;

// نمایش کارت ها یکی پس از دیگری
function showCard(step) {
  cards.forEach((card, i) => {
    if (i === step) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// فعال کردن منو
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// فعال کردن منوی تمرینات
submenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submenu.classList.toggle("active");
});

// فعال کردن دکمه ی استارت
startBtn.addEventListener("click", () => {
  // فقط بار اول کلیک بشه
  if (steps === -1) {
    steps++;
    showCard(steps);
    // غیرفعال شدن کلیک استارت
    startBtn.disabled = true;
    startBtn.style.cursor = "not-allowed";
    startBtn.style.pointer = "0.5";
  }
});

// فعال کردن دکمه ی بعدی
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (steps < cards.length - 1) {
      steps++;
      showCard(steps);
    }
  });
});

// فعال کردن دکمه ی انجام شد
doneBtn.addEventListener("click", () => {});
showCard(steps);
