document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
    } else {
      emailError.textContent = '';
    }
  });

//   function sendEmail(){
//   Email.send({
//     SecureToken: "ba5128cb-f82a-4bbc-95a2-a4a50b392a01",
//     To : 'jatinkumar9162@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "Contact form enquiry",
//     Body : "Name: "+ document.getElementById("name").value
//              + "<br> Email: " + document.getElementById("email").value
//              + "<br> Message: " + document.getElementById("message").value
// }).then(
//   message => alert("message sent successfully")
// );
// }