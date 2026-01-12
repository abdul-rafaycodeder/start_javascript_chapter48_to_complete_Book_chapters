function checkEmail(emailID) {
    var email = document.getElementById(emailID).value;
    if (email === "") {
        alert("please enter your email")
    } else if (email.includes("@") === false) {
        alert("your email is not correct, missing @ symbol")
    } else {
        alert("your email is correct: " + email);
    }
    console.log("Email==>", email)
    console.log("emailID==>", emailID)
}



function checkCampus() {
    var rollNumber = document.getElementById("rollNumber").value;
    // var button = document.getElementById("buttonCampus").value;
    // var conbine = rollNumber + button;
    var campus = "";

    switch (rollNumber) {
        case "100":
            campus = "zaiton ashraf campus";
            break;
        case "200":
            campus = "gunshan campus";
            break;
        case "300":
            campus = "bahadurabad campus";
            break;
        default:
            campus = "you are not enrolled";
            break;
    }

    document.getElementById("campus").value = campus;

    // console.log("conbine==>", conbine)
    console.log("campus==>", campus)
}

var paragraph = false;

function expentpara() {
    var expandedText = ' javascript is a programming language that is used to make web pages';

    if (!paragraph) {
        document.getElementById("expent").innerHTML = expandedText + ' <a href="#" onclick="expentpara()"><em> Click for Less</em></a>';
        paragraph = true;
    } else {
        document.getElementById("expent").innerHTML = ' javascript is a program... <a href="#" onclick="expentpara()"><em> Click for more</em></a>';
        paragraph = false;
    }
}


var oderList = false;

function list() {
    var listItems = '<li>Rafay</li><li>Ali</li><li>Osama</li><li>bilal</li>';
    var oderListH1 = '<h1>Oder List</h1>';
    var buttonTextchange = 'Click to Hide Oder List';

    if (oderList === false) {
        document.getElementById("oderList").innerHTML = oderListH1 + listItems;
        document.getElementById("changeOderListButtonText").innerText = buttonTextchange;
        oderList = true;
    } else {
        document.getElementById("oderList").innerHTML = '';
        document.getElementById("changeOderListButtonText").innerText = 'Click to get oder list ';
        oderList = false;
    }

}

var oderList = false;

function listImage() {
    var listItems = '<img src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww" alt="Car image" width="200px">';
    var oderListH1 = '<h1>Image</h1>';
    var buttonTextchange = 'Click to Hide Image';

    if (oderList === false) {
        document.getElementById("oderListImage").innerHTML = oderListH1 + listItems;
        document.getElementById("changeOderListButtonImage").innerText = buttonTextchange;
        oderList = true;
    } else {
        document.getElementById("oderListImage").innerHTML = '';
        document.getElementById("changeOderListButtonImage").innerText = 'Click to get images ';
        oderList = false;
    }

}




// second image big and small on hover

function bigImage() {
    var image = document.getElementById("imageHideShow");
    image.className = "bigImage";
    console.log("image==>", image)
}

function smallImage() {
    var image = document.getElementById("imageHideShow");
    image.className = "smallImage";
    console.log("image==>", image)
}

// first car image hide and show


// function hideImage() {
//     document.getElementById("hideImage").className = "imageHide";
// }



// function showImage() {
//     document.getElementById("hideImage").className = "";
// }


//------------------------start chapter 53----------------------//



function changeImage() {
    var iamge = document.getElementById("carImage");
    iamge.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGHxsC9M1B34riNQ9EiG1YbdTZGrTD5KXlQ&s"
    console.log("iamge==>", iamge)
}


function outImage() {
    var outImage = document.getElementById("carImage");
    outImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fehJccs0vA7le8QDxQfr_zy1T2Otb5DjYw&s"
    console.log("outImage==>", outImage)
}



function changeImage2() {
    var image= document.getElementById("carImage2")
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGHxsC9M1B34riNQ9EiG1YbdTZGrTD5KXlQ&s"
    console.log("carImage2==>", image)
}


function outImage2() {
    var outImage2 = document.getElementById("carImage").className = "carImage2"
    console.log("outImage2==>", outImage2)
}

//------------------------end chapter 54----------------------//
