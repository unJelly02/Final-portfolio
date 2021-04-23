
const scriptURL = 'https://script.google.com/macros/s/AKfycbyBbVl-sxoS-6gj0LvL-wbFdynb2Yiv7ff-QP9AVUEgDOzyWu0/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method :'POST', body: new FormData(form)})
    .then(response => alert("Thank you for contacting me! Cant wait to send you an owl back"))
    .catch(error =>console.error("Error!",error.message))
    document.getElementById("myForm").reset();
})

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
sr.reveal('.container',{delay: 400}); 