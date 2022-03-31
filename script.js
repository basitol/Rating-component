// const rating = document.getElementsByClassName("rating");
const review = document.querySelector(".sub");
const rating = document.querySelectorAll(".rating");
const container = document.querySelector(".container");
const subCon = document.querySelector(".submit-con");
const score = document.querySelector(".score");

const handleClick = (e) => {
  rating.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  score.innerText = e.target.innerText;
  //   console.log(ratingVal);
};

rating.forEach((item) => {
  item.addEventListener("click", handleClick);
});

// console.log(ratingVal);

const onSubmit = () => {
  container.classList.add("hidden");
  subCon.classList.remove("hidden");
};

review.addEventListener("click", onSubmit);
