var database = firebase.database().ref('/')

var username = document.getElementById('userName')
var email = document.getElementById('email')
var pass = document.getElementById('pass')

function submit() {
    var user = {
        name: username.value,
        email: email.value,
        pass: pass.value
    }
    firebase.auth().
        createUserWithEmailAndPassword(user.email, user.pass)
        .then(function (res) {
            console.log(res)
            database.child('users/' + res.uid).set(user)
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
