$(document).ready(function(){
  // Initially hide all sections
  $(".section-container").hide();
  // Handle button double click
  $(".button").dblclick(function() {
    var target = $(this).data("section"); // Get the section ID
    $(".section-container").fadeOut(500); // Hide all sections
    $("#" + target).fadeIn(500); // Show the target section
  });
});