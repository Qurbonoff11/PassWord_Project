"use strict";

const $HTML = document;

const passwordData = [
  {
    username: "Root",
    password: "root123",
  },
  {
    username: "Kali",
    password: "kali123",
  },
  {
    username: "Win",
    password: "Windows003",
  },
];

let passwordInp = $HTML.querySelector("#passwordInp");
let checkBtn = $HTML.querySelector("#checkBtn");
let textContent = $HTML.querySelector("#result");

let count = 0;

checkBtn.addEventListener("click", () => {
  let passwordInpVal = passwordInp.value;
  const foundPass = passwordData.find((pass) => {
    return pass.password === passwordInpVal;
  });

  if (foundPass) {
    textContent.innerHTML = `Parolingiz tasdiqlandi`;
    textContent.style.color = "green";
  } else {
    count++;
    if (count === 3) {
      checkBtn.setAttribute("disabled", "");
      textContent.innerHTML = `15 soniyaga bloklandingiz!`;
      textContent.style.color = "red";

      setTimeout(() => {
        checkBtn.removeAttribute("disabled");
        textContent.innerHTML = ``;
      }, 1500);
    } else if (count === 6) {
      checkBtn.setAttribute("disabled", "");
      textContent.innerHTML = `60 soniyaga bloklandingiz!`;

      setTimeout(() => {
        checkBtn.removeAttribute("disabled");
        textContent.innerHTML = ``;
      }, 3000);
    }
  }
  console.log(count);

});