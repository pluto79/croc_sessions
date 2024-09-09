

/*
function SendMail(){
    var params = {
       from_name : document.getElementById("fullname").value,
       email_id : document.getElementById("email_id").value,
       message : document.getElementById("message").value
    }
    emailjs.send("service_hjhluyv", "template_ehdjnl5", params).then(function (res) {
        alert("Success" + res.status);
    })
}
    window.addEventListener('DOMContentLoaded', event => {
    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});
*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ehdjnl5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

