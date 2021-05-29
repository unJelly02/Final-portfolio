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
