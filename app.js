const icon = document.querySelector(".icon");
icon.addEventListener("mouseover", function () {
  icon.style.color = "green";
  icon.style.transform = "rotate(90deg)";
});

icon.addEventListener("mouseout", function () {
  icon.style.transform = "rotate(0deg)";
  icon.style.color = "red";
});
