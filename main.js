const section_wrap = document.getElementsByClassName("section_wrap"),
  section_button = document.getElementsByClassName("section_button"),
  button_wrap = document.getElementById("button_wrap"),
  header_wrap = document.getElementById("header_wrap"),
  header_wrap_menu = document.getElementById("header_wrap_menu");
const section_wrap_length = section_wrap.length;
const section_wrap_Height = window.innerHeight;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function button_color(i) {
  for (let j = 0; j < section_button.length; j++) {
    if (j != i) {
      section_button[j].style.backgroundColor = "rgba(0, 0, 255, 0)";
    }
  }
  section_button[i].style.backgroundColor = "rgba(182, 182, 182, 0.705)";
}

let k = 0;
let mouseWheel = true;
document.addEventListener("mousewheel", function (e) {
  if (!mouseWheel) {
    return false;
  }
  mouseWheel = false;
  setTimeout(function () {
    mouseWheel = true;
  }, 700);
  let delta = e.wheelDelta;
  if (delta < 0) {
    if (section_wrap_length - 2 > k) {
      k++;
      button_color(k);
      button_wrap.style.opacity = "1";
    } else if (section_wrap_length - 1 > k) {
      k++;
      button_wrap.style.right = "-10rem";
      button_wrap.style.opacity = "0";
      header_wrap.style.color = "black";
    }
  } else {
    if (0 < k) {
      k--;
      button_color(k);
      if (button_wrap.style.right === "-10rem") {
        button_wrap.style.right = "0rem";
      }
      button_wrap.style.opacity = "1";
    }
  }
  header_wrap_color(k);
  window.scrollTo({
    top: section_wrap_Height * k,
    behavior: "smooth",
  });
});

for (let i = 0; i < section_button.length; i++) {
  section_button[i].addEventListener("click", function () {
    button_color(i);
    header_wrap_color(i);
    window.scrollTo({
      top: section_wrap_Height * i,
      behavior: "smooth",
    });
    k = i;
  });
}

function header_wrap_color(k) {
  if (k % 2 === 1) {
    header_wrap.style.color = "black";
  } else {
    header_wrap.style.color = "white";
  }
  header_wrap_menu.addEventListener("mouseenter", function () {
    header_wrap.style.color = "black";
    header_menu.style.display = "block";
    header_wrap.style.backgroundColor = "white";
  });
  header_wrap_menu.addEventListener("mouseleave", function () {
    if (k % 2 === 1) {
      header_wrap.style.color = "black";
    } else {
      header_wrap.style.color = "white";
    }
    header_menu.style.display = "none";
    header_wrap.style.backgroundColor = "transparent";
  });
}
header_wrap_color(k);
