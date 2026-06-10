"use strict";

// انتخاب تمام کارت ها
const cards = document.querySelectorAll(".card");

// انتخاب دکمه ی استارت
const startBtn = document.querySelector(".btn-start");

// انتخاب دکمه ی بعدی
const nextBtn = document.querySelectorAll(".btn-next");

// انتخاب دکمه ی انجام شد
const doneBtn = document.querySelector(".btn-done");

// انتخاب وروردی ها
const email = document.getElementById("email");
const userName = document.getElementById("user-name");
const password = document.getElementById("password");

// انتخاب کانتینر داشبورد
const cardsSliderWrapper = document.querySelector(".card-slider-wrapper");

// انتخاب داشبورد
const dashboard = document.getElementById("dashboard");

// انتخاب آیتم های داشبورد
const practiceBtn = document.getElementById("practice-btn");
const practiceMenu = document.getElementById("practice-menu");

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
doneBtn.addEventListener("click", () => {
  if (
    email.value.trim() === "" ||
    userName.value.trim() === "" ||
    password.value.trim() === ""
  ) {
    alert("لطفا موارد خواسته شده را وارد کنید. 🙂");
    return;
  }
  cardsSliderWrapper.style.display = "none";
  dashboard.style.display = "block";
});
cardsSliderWrapper.style.display = "none";
dashboard.style.display = "block";

// فعال کردن دکمه ی تمرینات
practiceBtn.addEventListener("click", () => {
  if ((practiceMenu.style.display = "none")) {
    practiceMenu.style.display = "block";
  } else {
    practiceMenu.style.display = "none";
  }
});
