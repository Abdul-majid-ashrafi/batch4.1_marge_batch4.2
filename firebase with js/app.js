var database = firebase.database().ref('/');
var input = document.getElementById('input')
var unOrderList = document.getElementById('unOrderList')

function todo() {
    var todo = {
        item: input.value,
        todo: 'DONE'
    }
    database.child('todo').push(todo)
}

database.child('todo').on("child_added", function (snapshot) {
    var demo = snapshot.val()
    demo.id = snapshot.key

    var list = document.createElement('LI')
    var tagText = document.createTextNode(demo.item)
    list.appendChild(tagText)//<li>getInput</li>
    unOrderList.appendChild(list)
})









