let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".nav-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Get all buttons that trigger the modal
var buttons = document.querySelectorAll(".callButton");

// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button (same for all modals)
var closeBtn = document.getElementsByClassName("close")[0];

// When any button is clicked, open the modal
buttons.forEach(function (button) {
  button.onclick = function () {
    modal.style.display = "block";
  };
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
