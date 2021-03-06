$(document).ready(function() {       //Do this when the document is loaded
    $("#dialerContent").show();      //Show the element with ID ""
    $("#contactListContent").hide(); //Hide the element with ID "contactListContent"
    $("#addContactContent").hide();
    $("#gesturePracticeContent").hide();
    $("#dialerTab").css('background-color', 'white');
    $("#gesture_output").val("ready");
});

//Tab functionality
$("#dialerTab").click(function() { //When "dialerTab" is clicked
    $("#dialerContent").show();
    $("#contactListContent").hide();
    $("#addContactContent").hide();
    $("#gesturePracticeContent").hide();

    $("#dialerTab").css('background-color', 'white');
    $("#contactListTab").css('background-color', '#E6E6E6');
    $("#addContactTab").css('background-color', '#E6E6E6');
    $("#gesturePracticeTab").css('background-color', '#E6E6E6');
});
$("#contactListTab").click(function() { //When "contactListTab" is clicked
    $("#contactListContent").show();
    $("#dialerContent").hide();
    $("#addContactContent").hide();
    $("#gesturePracticeContent").hide();

    $("#contactListTab").css('background-color', 'white');
    $("#dialerTab").css('background-color', '#E6E6E6');
    $("#addContactTab").css('background-color', '#E6E6E6');
    $("#gesturePracticeTab").css('background-color', '#E6E6E6');
});
$("#addContactTab").click(function() { //When "addContactTab" is clicked
    $("#addContactContent").show();
    $("#dialerContent").hide();
    $("#contactListContent").hide();
    $("#gesturePracticeContent").hide();

    $("#addContactTab").css('background-color', 'white');
    $("#contactListTab").css('background-color', '#E6E6E6');
    $("#dialerTab").css('background-color', '#E6E6E6');
    $("#gesturePracticeTab").css('background-color', '#E6E6E6');
});
$("#gesturePracticeTab").click(function() { //When "gesturePracticeTab" is clicked
    $("#gesturePracticeContent").show();
    $("#addContactContent").hide();
    $("#dialerContent").hide();
    $("#contactListContent").hide();

    $("#gesturePracticeTab").css('background-color', 'white');
    $("#contactListTab").css('background-color', '#E6E6E6');
    $("#dialerTab").css('background-color', '#E6E6E6');
    $("#addContactTab").css('background-color', '#E6E6E6');
});

//----"Backend" functionality---------------------------------------------------

//Dialer tab

function addNumberToPhoneNumber(num) {
    var phoneNumberStr = $("#dialNumberInput").val();
    phoneNumberStr = phoneNumberStr.concat(num);
    var formattedStr = formatPhoneNumber(phoneNumberStr);

    $("#dialNumberInput").val(formattedStr);
}

function formatPhoneNumber(phoneNum) {
    var length = phoneNum.length;
    var hasAsterisk = phoneNum.includes("*");
    var hasOctothorp = phoneNum.includes("#");

    if (!hasAsterisk && !hasOctothorp) {
        switch (length) {
            case 3:
                phoneNum = '('+phoneNum+')';
                break;
            case 6:
                phoneNum = phoneNum.substring(0, 5) + " " + phoneNum.substring(5, 6);
                break;
            case 10:
                phoneNum = phoneNum.substring(0, 9) + "-" + phoneNum.substring(9, 10);
                break;
        }
    }

    return phoneNum;
}

$(".one").click(function() {
    addNumberToPhoneNumber("1");
});
$(".two").click(function() {
    addNumberToPhoneNumber("2");
});
$(".three").click(function() {
    addNumberToPhoneNumber("3");
});
$(".four").click(function() {
    addNumberToPhoneNumber("4");
});
$(".five").click(function() {
    addNumberToPhoneNumber("5");
});
$(".six").click(function() {
    addNumberToPhoneNumber("6");
});
$(".seven").click(function() {
    addNumberToPhoneNumber("7");
});
$(".eight").click(function() {
    addNumberToPhoneNumber("8");
});
$(".nine").click(function() {
    addNumberToPhoneNumber("9");
});
$(".zero").click(function() {
    addNumberToPhoneNumber("0");
});
$(".asterisk").click(function() {
    addNumberToPhoneNumber("*");
});
$(".octothorp").click(function() {
    addNumberToPhoneNumber("#");
});

$(".clear").click(function() {
    $("#dialNumberInput").val("");
});
$(".dial").click(function() {
    var phoneNumberStr = $("#dialNumberInput").val();
    if (phoneNumberStr != "") {
        //Show "Dialing!" for only 3 seconds
        $("#dialNumberInput").val("Dialing!");
        setTimeout(function() {
            $("#dialNumberInput").val(phoneNumberStr);
        }, 2000);
    }
});

//Add Contact tab

$("#addContactButton").click(function() {
    var contactName = $("#nameInput").val();
    var contacts = document.getElementById("contactList");

    if (contactName != "") {
        var newDiv = document.createElement("div");
        var classAttr = document.createAttribute("class"); //Create a "class" attribute
        classAttr.value = "pure-button contact"; //Set the value of the class attribute
        newDiv.setAttributeNode(classAttr); //Add the class attribute to the new div
        var styleAttr = document.createAttribute("style")
        styleAttr.value = "margin: 5px 2px 5px 2px !important";
        newDiv.setAttributeNode(styleAttr);
        newDiv.innerHTML = contactName;

        contacts.appendChild(newDiv);

        //Show success message for 2 seconds
        $("#successMessage").css('visibility', 'visible');
        setTimeout(function() {
            $("#successMessage").css('visibility', 'hidden');
        }, 2000);
    }
});
$("#clearContactButton").click(function() {
    $("#nameInput").val("");
    $("#phoneNumberInput").val("");
    $("#emailAddressInput").val("");
});

//Gesture Practice tab

var mouseDownX = 0;
var mouseDownY = 0;
var mouseUpX = 0;
var mouseUpY = 0;

$("#gesture_area").mousedown(function(event) {
    mouseDownX = event.pageX;
    mouseDownY = event.pageY;
    $("#gesture_output").val("mouse down");
});
$("#gesture_area").mouseup(function(event) {
    mouseUpX = event.pageX;
    mouseUpY = event.pageY;

    if (mouseUpX < mouseDownX) {
        $("#gesture_output").val("swipe left");
    }
    else if (mouseUpX > mouseDownX) {
        $("#gesture_output").val("swipe right");
    }
    else {
        $("#gesture_output").val("mouse up");
    }
});

$("#gesture_area").mouseleave(function() {
    $("#gesture_output").val("ready");
});
