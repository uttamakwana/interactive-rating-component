const rates = document.querySelectorAll(".rate");
const btn = document.querySelector(".btn");
let rating = 0;

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    if (rate.classList.contains("active")) {
      rate.classList.remove("active");
    } else {
      rates.forEach((otherRate) => {
        otherRate.classList.remove("active");
      });
      rate.classList.add("active");
      rating = rate.innerHTML;
    }
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `thankyou.html?rating=${encodeURIComponent(rating)}`;
});
