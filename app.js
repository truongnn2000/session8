// Bài 1:

const block1 = document.getElementById("block1");
const btn = document.getElementsByClassName("clickme");

let check = false;
btn[0].onclick = function () {
  if (check == true) {
    block1.style.display = "block";
    check = false;
  } else {
    block1.style.display = "none";
    check = true;
  }
};

// Bài 2:

const block2 = document.getElementById("block2");
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

btn[1].onclick = function () {
  block2.style.color = randomColor();
};
// Bào 3:
const block3_1 = document.getElementById("block3_1");
const block3_2 = document.getElementById("block3_2");

btn[2].onclick = function () {
  let a = block3_1.textContent;
  block3_1.innerText = block3_2.innerText;
  block3_2.innerText = a;
};
// Bài 4:
const block4 = document.getElementById("block4");

let px = 14;
btn[3].onclick = function () {
  px++;
  block4.style.fontSize = px + "px";
};
