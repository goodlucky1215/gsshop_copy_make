const section4_word = document.getElementsByClassName("section4_word"),
  section4_write = document.getElementsByClassName("section4_write"),
  section4_write_wrap = document.getElementsByClassName("section4_write_wrap");

let section4_i = 0;
for (let k = 0; k < section4_write.length; k++) {
  section4_write[k].addEventListener("mouseenter", function () {
    section4_write[k].style.height = "30%";
    section4_write[k].style.backgroundColor = "rgb(251, 255, 193)";
    section4_word[k].style.display = "block";
    section4_board(k);
  });
}
function section4_board(k) {
  for (let j = 0; j < section4_write.length; j++) {
    if (k != j) {
      section4_write[j].style.height = "10%";
      section4_write[j].style.backgroundColor = "transparent";
      section4_word[j].style.display = "none";
    }
  }
}
