// console.log("Your header.js file is loaded correctly");
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

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else {
      x.className = x.className.replace(" w3-show", "");
  }
}


function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 3000);
  
  $(".searchButton").on("click", function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")) {
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });
  
  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });
  
