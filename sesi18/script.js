// let pageTitle = document.getElementById('title');

// console.log(pageTitle.innerHTML);

// let pageBox = document.getElementsByClassName('page-box');

// for (let i = 0; i < pageBox.length; i++) {
//     const pgbox = pageBox[i]

//     console.log(pgbox.innerHTML)
// }

$(document).ready(function () {
    // console.log($('#title'))
    $('#title').click(function () {
        alert("klikku")
    })

    $("#submitbutton").click(function (e) {
        e.preventDefault()

        let username = $('#username').val()


    })

    $(".page-box:first").addClass("btn-danger")
})

