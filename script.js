/*****************************************
Treehouse Fullstack Javascript Techdegree,
project #3: "Interactive form v1"
by Michael Greco

*****************************************/
// Make sure my JS and HTML are linked 
console.log('hi');
// Use jQuery to select the 'Name' input element and place focus on it
$("#name").focus();

// Target the ‘Other’ input field, and hide it initially, 
// So that it will display if JavaScript is disabled, but be hidden initially with JS.

$("#other-title").hide(); // Hide by default

$("#title").change( () => {
    if ($("title").val() == "other") { // Other selected
        $("#other-title").show();
        $("#other-title").focus();
    } else { // Other not selected
        $("other-title").hide();
    }
});

// T-shirt Selection

// Hide color select until a design is selected
$('#colors-js-puns').hide();

// Change function to display associated T-shirt colors per design

// Return true/false for form validation 
var shirtSelected = false;
$('#design').change(function(){
    if ($('#design option:selected').val() === "js puns") {
        $('#colors-js-puns').show();
        $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
        shirtSelected = true;
        return shirtSelected;
    } else if ($('#design option:selected').val() === "heart js") {
        $('#colors-js-puns').show();
        $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
        shirtSelected = true;
        return shirtSelected;
    } else {
        $('#colors-js-puns').hide();
        shirtSelected = false;
        return shirtSelected;
    }
}); ddd