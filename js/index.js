
$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});


jQuery(document).ready(function($){
  $('.type-it').typeIt({
      content : 'I am a Web Developer'
  });
});

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// });

// sr.reveal('.swingingDoodle',{}); 
// sr.reveal('.text-bottom',{delay: 200}); 
// sr.reveal('.firstShape',{delay: 400}); 
// sr.reveal('.name',{ interval: 200}); 

// sr.reveal('.rentwingsShape',{}); 
// sr.reveal('.workTitle',{delay: 400}); 
// sr.reveal('.workPara',{delay: 400}); 