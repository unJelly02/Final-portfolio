
console.log("Your index.js file is loaded correctly");
$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
  });
  

// let toggled = false;
// const nav = document.getElementsByClassName('nav')[0];
// const btn = document.getElementsByClassName('nav-tgl')[0];
// btn.onclick = function(evt) {
//   if (!toggled) {
//     toggled = true;
//     evt.target.classList.add('toggled');
//     nav.classList.add('active');
//   } else {
//     toggled = false;
//     evt.target.classList.remove('toggled');
//     nav.classList.remove('active');
//   }
// }

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelector(".nav-links li");

// hamburger.addEventListener("click",() =>{
//   console.log('clicked');
//   navLinks.classList.toggle("open");
// })

$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   console.log('clicked');
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });