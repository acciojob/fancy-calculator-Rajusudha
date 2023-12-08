//your JS code here. If required.
// Take input for the first variable and multiply it by 2
var firstInput = prompt("Enter the first positive integer:");
var parsedFirstInput = parseInt(firstInput);

// Validate that the input is a positive integer
if (isNaN(parsedFirstInput) || parsedFirstInput <= 0) {
  alert("Please enter a valid positive integer for the first input.");
} else {
  var multipliedResult = parsedFirstInput * 2;

  // Take input for the second variable
  var secondInput = prompt("Enter the second positive integer:");
  var parsedSecondInput = parseInt(secondInput);

  // Validate that the input is a positive integer
  if (isNaN(parsedSecondInput) || parsedSecondInput <= 0) {
    alert("Please enter a valid positive integer for the second input.");
  } else {
    // Add the second input to the result of the first input multiplied by 2
    var finalResult = multipliedResult + parsedSecondInput;

    // Display the final result using alert()
    alert("The final result is: " + finalResult);
  }
}
