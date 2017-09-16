var database = firebase.database().ref('/')
var user = localStorage.getItem('loggedInUser')
var convertToParse = JSON.parse(user)
var heading = document.getElementById('heading').innerHTML = convertToParse.firstName + " " + convertToParse.lastName
var fName = document.getElementById('firstName').innerHTML
    = convertToParse.firstName
var lName = document.getElementById('lastName').innerHTML = convertToParse.lastName
var email = document.getElementById('email').innerHTML = convertToParse.email

var dua = document.getElementById('dua')


function praySubmit() {
    var obj = {
        pray: dua.value,
        userName: convertToParse.firstName + " " + convertToParse.lastName
    }
    database.child('post').push(obj)
    dua.value = ""
}
