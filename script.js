document.getElementById('proposal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const budget = document.getElementById('budget').value;
    const business = document.getElementById('business').value;
    
    if(name && email && budget && business) {
        alert('Form submitted successfully!');
        // Here you can add the code to send the form data to the server or perform other actions
    } else {
        alert('Please fill all the fields.');
    }
});
