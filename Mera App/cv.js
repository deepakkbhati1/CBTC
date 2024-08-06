var scriptURL = "https://script.google.com/macros/s/AKfycby1vaVXaR9EOT_rtVq8FtiG9g-h6d_OVhfE8yxi0oQ08c6s35R_RFLPzKgbKOAzwbMkfw/exec"
var form = document.forms['google-sheets'];
form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us...! We will contact you soon..."))
    .catch(error => console.error("Error!", error.message))
}
);