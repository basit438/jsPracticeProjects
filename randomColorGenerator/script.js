let body = document.querySelector("body");

let change_btn = document.querySelector("#changer-btn");

let GenCode = "0123456789ABCDEF";

let colorVal = document.querySelector('#colorVal');

change_btn.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let traverser = Math.floor(Math.random() * 16);
    hexCode += GenCode[traverser];
  }
  body.style.backgroundColor = hexCode;

  colorVal.innerHTML = `The hexcode for the generated color is ${hexCode}`;
});
