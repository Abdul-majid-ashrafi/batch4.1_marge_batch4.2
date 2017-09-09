var user = localStorage.getItem('loggedInUser')
var convertToParse = JSON.parse(user)
var heading = document.getElementById('heading')
.innerHTML = convertToParse.firstName + " " 
 + convertToParse.lastName
var fName = document.getElementById('firstName').innerHTML 
= convertToParse.firstName
var lName = document.getElementById('lastName').innerHTML = convertToParse.lastName


