$(document).ready(function() {       //Do this when the document is loaded
    $("#dialerContent").show();      //Show the element with ID ""
    $("#contactListContent").hide(); //Hide the element with ID "contactListContent"
    $("#addContactContent").hide();
});

//Tab functionality
$("#dialerTab").click(function() { //When "dialerTab" is clicked
    $("#dialerContent").show();
    $("#contactListContent").hide();
    $("#addContactContent").hide();
});
$("#contactListTab").click(function() { //When "contactListTab" is clicked
    $("#contactListContent").show();
    $("#dialerContent").hide();
    $("#addContactContent").hide();
});
$("#addContactTab").click(function() { //When "addContactTab" is clicked
    $("#addContactContent").show();
    $("#dialerContent").hide();
    $("#contactListContent").hide();
});
