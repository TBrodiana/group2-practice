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

form.addEventListener("invalid", eventHandler, true);
function eventHandler(e){
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" ){
        return;
    }
    setValidity(e.target);
}
function setValidity(input){
    if (input.validity.valueMissing && input.name === "first__name"){
        input.setCustomValidity("Please, enter your first name");
    }
    else if (input.validity.valueMissing && input.name === "message"){
        input.setCustomValidity("Please, enter your message");
    }
    else{
        input.setCustomValidity("");
    }
}

firstName.addEventListener("input", function (){
    firstName.setCustomValidity("");
})

message.addEventListener("input", function (){
    message.setCustomValidity("");
})