const section5_write3_1_bu_min = document.getElementsByClassName(
    "section5_write3_1_bu_min"
  ),
  section5_write3_1_bu_plu = document.getElementsByClassName(
    "section5_write3_1_bu_plu"
  ),
  section5_write3_2_ti = document.getElementsByClassName(
    "section5_write3_2_ti"
  );
let section5_i = 0;
section5_write3_2_ti[section5_i].style.display = "block";
function section5_button(j) {
  section5_i = j;
  if (section5_i < 0) {
    section5_i = section5_write3_2_ti.length - 1;
  } else if (section5_i > section5_write3_2_ti.length - 1) {
    section5_i = 0;
  }
  for (let k = 0; k < section5_write3_2_ti.length; k++) {
    if (k === section5_i) {
      section5_write3_2_ti[k].style.display = "block";
    } else {
      section5_write3_2_ti[k].style.display = "none";
    }
  }
}
section5_write3_1_bu_min[0].addEventListener("click", function () {
  section5_i--;
  section5_button(section5_i);
});

section5_write3_1_bu_plu[0].addEventListener("click", function () {
  section5_i++;
  section5_button(section5_i);
});
