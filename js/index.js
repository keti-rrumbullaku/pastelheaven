function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = false;

    if (name === "" || surname === "" || email === "" || message === "") {
        error = true;
    }

    if (error) {
        document.getElementById("response").className = "error";
        document.getElementById("response").innerText = "Please fill out all fields.";
    } else {
        document.getElementById("response").className = "success";
        document.getElementById("response").innerText = "Message sent successfully!";
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}
