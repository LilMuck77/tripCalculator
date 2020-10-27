function calculateTrip()
{
    //get miles
    var tripLengthMiles = prompt("How many miles is your trip?");

    //parse to a number
    tripLengthMiles = parseFloat(tripLengthMiles);

    //get mpg

    var mpg = prompt("How many miles per gallon do you get?");
    //parse number
    mpg = parseFloat(mpg);

    //get gas price
    var gasCostPerGallon = prompt("How much is gas per gallon cost?");

    //parse number
    gasCostPerGallon = parseFloat(gasCostPerGallon);

    //get average mph
    var mph = prompt("What is your average MPH driven?");
    //parse number
    mph = parseInt(mph);

    //find total gallons by divide miles by MPG
    var totalGallons = tripLengthMiles/mpg;

    //find total gas cost
    var totalGasCost = totalGallons * gasCostPerGallon;

    //find total hours by dividing miles by average speed
    var totalHours = tripLengthMiles / mph;

    //display your cost of gas
    alert(`Your trip will cost $${totalGasCost.toFixed(1)} for gas.`);
    //display total time
    alert(`Your trip will take ${totalHours.toFixed(1)} hours.`)





















}