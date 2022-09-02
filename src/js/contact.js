let form = document.querySelector("[name=contact__form]");
let firstName = document.querySelector("#first__name");
let lastName = document.querySelector("#last__name");
let message = document.querySelector("#message");

form.addEventListener("submit", function (e){
    e.preventDefault();
    alert("Your message was sent to us!");
    firstName.value = "";
    lastName.value = "";
    message.value = "";
})