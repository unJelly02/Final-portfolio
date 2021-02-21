$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

console.log("Your index.js file is loaded correctly");
$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.name',{}); 
sr.reveal('.subPara',{delay: 200}); 
sr.reveal('.quote',{delay: 400}); 
sr.reveal('.buttonContainer',{ interval: 200}); 
sr.reveal('.right',{}); 
sr.reveal('.mySkills',{delay: 400}); 