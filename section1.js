const section1_write = document.getElementsByClassName("section1_write"),
  section1_word = document.getElementsByClassName("section1_word"),
  section_img1 = document.getElementsByClassName("section_img1"),
  section_bg = document.getElementsByClassName("section_bg");
const section1_write_a = section1_write[0].getElementsByTagName("a");

let i = -1;
for (let k = 0; k < section1_write_a.length; k++) {
  section1_write_a[k].style.color = "white";
  section1_word[k].style.display = "none";
}
function time_section1_write() {
  i++;
  if (i == section1_write_a.length) {
    for (let j of section1_write_a) {
      j.style.color = "white";
      section1_word[i - 1].style.display = "none";
    }
  } else if (i == section1_write_a.length + 1) {
    i = -1;
  } else {
    for (let k = 0; k < section1_write_a.length; k++) {
      if (k == i) {
        section1_write_a[i].style.color = "white";
        section1_word[i].style.display = "block";
      } else {
        section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)";
        section1_word[k].style.display = "none";
      }
    }
  }
}
let pause = true;
for (let k = 0; k < section1_write_a.length; k++) {
  section1_write_a[k].addEventListener("mouseenter", function () {
    for (let k = 0; k < section1_write_a.length; k++) {
      section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)";
      section1_word[k].style.display = "none";
    }
    section1_write_a[k].style.color = "white";
    section1_word[k].style.display = "block";
    section_img1[k].style.display = "block";
    section_bg[0].style.display = "none";
    pause = false;
    i = -1;
  });
  section1_write_a[k].addEventListener("mouseleave", function () {
    section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)";
    section1_word[k].style.display = "none";
    section_img1[k].style.display = "none";
    section_bg[0].style.display = "block";
    pause = true;
  });
}

setInterval(function () {
  if (pause) {
    time_section1_write();
  }
}, 2000);
