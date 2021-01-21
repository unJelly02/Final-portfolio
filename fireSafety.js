$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

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
sr.reveal('.right',{delay: 400}); 
sr.reveal('.filledButton',{delay: 500}); 
sr.reveal('.workPage',{}); 
sr.reveal('.Para',{delay: 200}); 
sr.reveal('.right',{delay: 400}); 
sr.reveal('.name',{ interval: 200}); 

sr.reveal('.card-body',{}); 
sr.reveal('.card-title',{delay: 400}); 
sr.reveal('.card-text',{delay: 400}); 
sr.reveal('.heading',{}); 
sr.reveal('.paragraph',{delay: 400}); 
sr.reveal('.figure',{delay: 400}); 