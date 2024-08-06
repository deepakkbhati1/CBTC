AOS.init();

//Google sheet Code
var scriptURL = "https://script.google.com/macros/s/AKfycbyw_X_tRArBwawx5I4dhHGz-sTWCRxsarK8aGnD2nEfOWTJEnsKsRkdqctfDkMUkUP7tA/exec"
var form = document.forms['google-sheets'];
form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us...! We will contact you soon..."))
    .catch(error => console.error("Error!", error.message))
}
);

// Scroll to Top Button
$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    }
);