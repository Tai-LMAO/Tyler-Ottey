// SCRIPT TO GET TIP PERCENTAGE 

// Get user inputs:
// Bill amount.
// Selected tip percentage (or custom percentage if chosen).
// Validate inputs
// Ensure the bill amount and tip percentage are valid numbers (not negative or empty).
// Calculate the tip

// Get bill amount and tip percentage

// Validation: Check if amount is valid

// Validation: Check if percentage is selected

    // Calculate tip and total

        // Log values to console for debugging

        // Log values to console for debugging

            // Update the displayed total and tip values

            // Update the displayed total and tip values

                 // Attach event listener to button after the DOM is loaded
function calculateTip() {

    let amount = parseFloat(document.getElementById("amount").value);
    let percentage = parseFloat(document.getElementById("percentage").value);


    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (isNaN(percentage)) {
        alert("Please select a tip percentage.");
        return;
    }


    let tipAmount = (amount * percentage).toFixed(2);
    let totalAmount = (amount + parseFloat(tipAmount)).toFixed(2);


    console.log("Tip Amount: £", tipAmount);
    console.log("Total Amount: £", totalAmount);

    // Start count-up animation for the tip amount
    let currentTip = 0;
    let increment = (parseFloat(tipAmount) / 100); // Increment by a small value
    let tipDisplayElement = document.getElementById("total");

    // SETS TIME to TICK INTERVAL
    let interval = setInterval(function () {
        currentTip += increment;
        if (currentTip >= parseFloat(tipAmount)) {
            currentTip = parseFloat(tipAmount); // Makes sure it dont EXCEED TARGET
            clearInterval(interval); // Stop the INTEVERAL once its reached TARGET
        }

        // Update the displayed tip value
        tipDisplayElement.textContent = currentTip.toFixed(2);
    }, 10); // Update the value every 10 milliseconds


    document.getElementById("totalAmount").textContent = totalAmount;
}



document.getElementById("calculate").addEventListener("click", calculateTip);



