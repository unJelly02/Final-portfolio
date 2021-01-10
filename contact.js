
const scriptURL = 'https://script.google.com/macros/s/AKfycbyBbVl-sxoS-6gj0LvL-wbFdynb2Yiv7ff-QP9AVUEgDOzyWu0/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method :'POST', body: new FormData(form)})
    .then(response => alert("Thank you for contacting me! Cant wait to send you an owl back"))
    .catch(error =>console.error("Error!",error.message))
})

$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
});
