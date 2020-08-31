const section2_slide = document.getElementById("section2_slide"),
  section2_slide1 = document.getElementsByClassName("section2_slide1"),
  section2_box = document.getElementsByClassName("section2_box"),
  section2_box_p1 = document.getElementsByClassName("section2_box_p1"),
  section2_button1 = document.getElementsByClassName("section2_button1"),
  section2_button2 = document.getElementsByClassName("section2_button2"),
  section2_wirte = document.getElementsByClassName("section2_wirte"),
  section2_p2 = document.getElementsByClassName("section2_p2");
for (let k = 0; k < section2_box.length; k++) {
  section2_box[k].addEventListener("mouseenter", function () {
    section2_slide1[k].style.overflow = "visible";
    section2_box[k].style.backgroundColor = "white";
    section2_box[k].style.top = "50%";
    section2_box[k].style.boxShadow =
      " 5px 5px 5px 5px rgba(158, 157, 157, 0.644)";
    section2_box_p1[k].style.color = "black";
  });
  section2_box[k].addEventListener("mouseleave", function () {
    section2_slide1[k].style.overflow = "hidden";
    section2_box[k].style.backgroundColor = "transparent";
    section2_box[k].style.top = "70%";
    section2_box[k].style.boxShadow = "none";
    section2_box_p1[k].style.color = "white";
  });
}

let a = section2_slide.offsetLeft;
let section2_slide1_width = section2_slide1[0].clientWidth;
let section2_button_i = 0;
function section2_button_fc(j) {
  section2_button_i = j;
  console.log(section2_button_i);
  if (section2_button_i === -1) {
    section2_button_i = 0;
  } else if (section2_button_i === section2_box.length) {
    section2_button_i = section2_box.length - 1;
  }
  section2_slide.style.left =
    a - section2_slide1_width * section2_button_i + "px";
  section2_wirte[0].style.display = "none";
  section2_p2_big();
  if (section2_button_i === 0) {
    section2_wirte[0].style.display = "flex";
    section2_p2_small();
  }
}
section2_button1[0].addEventListener("click", function () {
  section2_button_i--;

  section2_button_fc(section2_button_i);
});
section2_button2[0].addEventListener("click", function () {
  section2_button_i++;

  section2_button_fc(section2_button_i);
});
function section2_p2_big() {
  section2_p2[0].style.top = "24%";
  section2_p2[0].style.fontSize = "150px";
  section2_p2[0].style.left = "13.7%";
  section2_p2[0].style.zIndex = "0";
  section2_p2[0].style.color = "gray";
}
function section2_p2_small() {
  section2_p2[0].style.top = "37%";
  section2_p2[0].style.fontSize = "100px";
  section2_p2[0].style.left = "15%";
  section2_p2[0].style.zIndex = "2";
  section2_p2[0].style.color = "black";
}
