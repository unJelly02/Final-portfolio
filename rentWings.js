$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

console.log("Your index.js file is loaded correctly");
$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
});