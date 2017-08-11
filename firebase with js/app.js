var database = firebase.database().ref('/')

function demo() {
    var user = {
        name: 'Haider',
        num: 234567,
        age: 23456
    }
    database.child('batch4').push(user)
}