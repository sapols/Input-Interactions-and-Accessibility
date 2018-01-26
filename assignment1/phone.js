$(document).ready(function() {       //Do this when the document is loaded
    $("#dialerContent").show();      //Show the element with ID ""
    $("#contactListContent").hide(); //Hide the element with ID "contactListContent"
    $("#addContactContent").hide();
    $("#dialerTab").css('background-color', 'white');
});

//Tab functionality
$("#dialerTab").click(function() { //When "dialerTab" is clicked
    $("#dialerContent").show();
    $("#contactListContent").hide();
    $("#addContactContent").hide();
    //TODO: Turn clicked tabs to white upon no cursor hover (not after clicking elsewhere)
    $("#dialerTab").css('background-color', 'white');  
    $("#contactListTab").css('background-color', '#E6E6E6');
    $("#addContactTab").css('background-color', '#E6E6E6');
});
$("#contactListTab").click(function() { //When "contactListTab" is clicked
    $("#contactListContent").show();
    $("#dialerContent").hide();
    $("#addContactContent").hide();
    //TODO: Turn clicked tabs to white upon no cursor hover (not after clicking elsewhere)
    $("#contactListTab").css('background-color', 'white');
    $("#dialerTab").css('background-color', '#E6E6E6');
    $("#addContactTab").css('background-color', '#E6E6E6');
});
$("#addContactTab").click(function() { //When "addContactTab" is clicked
    $("#addContactContent").show();
    $("#dialerContent").hide();
    $("#contactListContent").hide();
    //TODO: Turn clicked tabs to white upon no cursor hover (not after clicking elsewhere)
    $("#addContactTab").css('background-color', 'white');
    $("#contactListTab").css('background-color', '#E6E6E6');
    $("#dialerTab").css('background-color', '#E6E6E6');
});
