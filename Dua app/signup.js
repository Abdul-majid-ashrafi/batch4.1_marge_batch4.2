var database = firebase.database().ref('/')

var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var email = document.getElementById('email')
var pass = document.getElementById('pass')

function submit() {

    var user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        pass: pass.value
    }
    firebase.auth().
        createUserWithEmailAndPassword(user.email, user.pass)
        .then(function (res) {
            database.child('users/' + res.uid).set(user)
                .then(function () {
                    location = 'login/login.html'
                })
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });



}
