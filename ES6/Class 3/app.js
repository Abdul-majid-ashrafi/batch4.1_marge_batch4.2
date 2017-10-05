// var a = "8"
// var c = "8"
// var b = `4 + 4 = ${c + a} `
// let fname = 5;
// let obj = {fname : fname}
// console.log(obj)
// console.log(obj.fname)


// function foo() {
// }

// let foo = () => { }


// let ind = 100;
// var obj = {
//     // foo(a){
//     //     return a + 3
//     // }

//     ["myName" + ind + 0]: "Majid",
//     [`myName ${ind} ${0}`]: "Majid",
// }
// // console.log(obj.foo(3)) // 6
// console.log(obj)
// console.log(obj.myName100)






// function inc (){ return 23}
// console.log(inc())

// let inc = x => x + 5;

// let foo = (x) => {
//     //code here
//     return x + 5
// };
// console.log(inc(5))

// user,likes,comments,post

let users = () => {
    // get id from storage
    var id = "fsdf5df56sdf6sf4s"
    var data = fatchData(`${id}`, "/user")
}
let likes = () => {
    // get id from storage
    var id = "fsdf5df56sdf6sf4s"
    var data = fatchData(`${id}`, "/likes")
}
let comments = () => {
    // get id from storage
    var id = "fsdf5df56sdf6sf4s"
    var data = fatchData(`${id}`, "/comments")
}

// rest function
let fatchData = (id, node) => {
    firebase.database
        .ref('/').child(`${node}/${id}`).on("child_added", (snapshot) => {
            let data = snapshot.val()
            return data
        })
}