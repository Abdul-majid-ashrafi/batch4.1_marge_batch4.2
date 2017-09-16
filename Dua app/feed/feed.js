var database = firebase.database().ref('/');
var body = document.getElementById('body');

var loggedIN = JSON.parse(localStorage.getItem('loggedInUser'))

database.child('post').on("child_added", function (snap) {
    var obj = snap.val();
    obj.key = snap.key

    var div1 = document.createElement("DIV")
    div1.setAttribute("class", "card");
    div1.setAttribute("id", obj.key);
    div1.setAttribute("style", "width: 20rem")
    var div2 = document.createElement("DIV")
    div2.setAttribute("class", "card-body")
    var h4 = document.createElement("H4")
    h4.setAttribute("class", "card-title")
    var p = document.createElement("P")
    p.setAttribute("class", "card-text")

    // comment code
    var commentDiv = document.createElement("DIV");
    commentDiv.setAttribute("class", "input-group");

    var input = document.createElement("INPUT");
    input.className = "form-control";

    var span = document.createElement("SPAN");
    span.className = "input-group-btn";

    var button = document.createElement("INPUT");
    button.type = "button"
    button.className = "btn btn-secondary"
    button.value = "Comment"

    button.addEventListener("click", function () {
        var commentOBJ = {
            sender: loggedIN.firstName + loggedIN.lastName,
            comment: input.value,
            postUID: obj.key
        }
        database.child('comment').push(commentOBJ)
    })

    span.appendChild(button)
    commentDiv.appendChild(input)
    commentDiv.appendChild(span)

    // comments render
    var commentList = document.createElement("DIV");

    var textH4 = document.createTextNode(obj.userName)
    var textP = document.createTextNode(obj.pray)
    h4.appendChild(textH4)
    p.appendChild(textP)
    div2.appendChild(h4)
    div2.appendChild(p)
    div2.appendChild(commentDiv)
    div1.appendChild(div2)
    div1.appendChild(commentList)
    body.appendChild(div1)

})

database.child("comment").on('child_added', function (data) {
    var comment = data.val();
    renderComment(comment);
})

function renderComment(comment) {
    var mainDiv = document.createElement("DIV");
    var bodyDiv = document.createElement("DIV");
    mainDiv.setAttribute("class", "card");
    bodyDiv.setAttribute("class", "card-body");
    mainDiv.appendChild(bodyDiv);

    var commentText = document.createTextNode("Sender:" + comment.sender + "Comment:" + comment.comment)
    bodyDiv.appendChild(commentText)
    var postDiv = document.getElementById(comment.postUID);

    var commentDiv = postDiv.lastElementChild;
    commentDiv.appendChild(mainDiv);
}








