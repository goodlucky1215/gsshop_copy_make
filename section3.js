const section3_write1 = document.getElementsByClassName("section3_write1"),
  section3_word = document.getElementsByClassName("section3_word"),
  section3_img1 = document.getElementsByClassName("section3_img1"),
  section3_bg = document.getElementsByClassName("section3_bg"),
  section3_write = document.getElementsByClassName("section3_write");

for (let k = 0; k < section3_write.length; k++) {
  section3_write1[k].addEventListener("mouseenter", function () {
    section3_write[k].style.backgroundColor = "rgb(19,19,19,0.3)";
    section3_write1[k].style.top = "50%";
    section3_word[k].style.top = "70%";
    section3_word[k].style.display = "block";
    section3_img1[k].style.display = "block";
    section3_bg[0].style.display = "none";
  });
  section3_write[k].addEventListener("mouseleave", function () {
    section3_write[k].style.backgroundColor = "transparent";
    section3_write1[k].style.top = "70%";
    section3_word[k].style.top = "90%";
    section3_word[k].style.display = "none";
    section3_img1[k].style.display = "none";
    section3_bg[0].style.display = "block";
  });
}
