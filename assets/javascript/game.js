$(document).ready(function () {
    // This is the number that game is based on. 
    let random = Math.floor(Math.random() * 101 + 19) // Generates random number from 19 to 120
    // console.log("The Random Number: " + random); // Does it work? REMOVED
    $('#currentValue').text(random); // Shows in span within div

    // GAME VARIABLES
        // Gems Variables and Gem Values
    let blueGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let redGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let greenGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let yellowGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    // Do they work? (removed so there is no cheating)
    // console.log("blueGem: " + blueGem)
    // console.log("redGem: " + redGem)
    // console.log("greenGem: " + greenGem)
    // console.log("yellowGem: " + yellowGem)
    
        // Scoring Variables
    let score = 0;
    let wins = 0;
    let losses = 0;

    // Functions
        // RESET
        //Function for game reset gets called to reset the variables for a new round.
	function reset(){
		random=Math.floor(Math.random()*101+19); // New random number
		// console.log(random) // log the random number REMOVED
		$('#currentValue').text(random);
		blueGem=Math.floor(Math.random()*12+1); // New Blue Gem Value
		redGem=Math.floor(Math.random()*12+1); // New Red Gem Value
		greenGem=Math.floor(Math.random()*12+1); // New Green Gem Value
		yellowGem=Math.floor(Math.random()*12+1); // New Yellow Gem Value
		score=0; // Reset the running total
		$('#playerScore').text(score); // Show the new score of zero with JQuery
	}
        //VICTORY
        // Victory function, alerts, adds to wins, updates win span, calls for a reset
	function victory(){
		alert("WINNER"); // Chicken Dinner -- Alert
	 	wins++; // Increment up ONE for wins
	  	$('#wins').text(wins); // Update wins span
	  	reset(); // Run that reset function above
    }
        // DEFEAT
        // Defeat function, alerts, adds to losses, updates loss span, calls for a reset
    function defeat(){
		alert("You are defeated"); // That sucks and now the user knows it
		losses++; // Increments one sadness
		$('#losses').text(losses); // Shares the sadness to the span
		reset(); // Run the reset function above
	}

    // Jquery Push the (Initial) Scoring Variables into their IDed spans (within divs)
    $('#playerScore').text(score); // 0 overides the "00" coded into the HTML
    $('#wins').text(wins); // 0 overides the "00" coded into the HTML
    $('#losses').text(losses); // 0 overides the "00" coded into the HTML
    
    //Crystal clicks
    // BLUE
    $('#blueGem').on('click', function () {
        score = score + blueGem; // add the  blueGem random value to the score
        // console.log("New playerScore= " + score); // Does it work? REMOVED
        $('#playerScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defined later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep... so sad)
        }
    })
    // RED
    $('#redGem').on('click', function () {
        score = score + redGem; // add the  redGem random value to the score
        // console.log("New score= " + score); // Does it work? REMOVED
        $('#playerScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep... so sad)
        }
    })
    // GREEN
    $('#greenGem').on('click', function () {
        score = score + greenGem; // add the  greenGem random value to the score
        // console.log("New score= " + score); // Does it work? REMOVED
        $('#playerScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep... so sad)
        }
    })
    // Yellow
    $('#yellowGem').on('click', function () {
        score = score + yellowGem; // add the  yellowGem random value to the score
        // console.log("New score= " + score); // Does it work? REMOVED
        $('#playerScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep... so sad)
        }
    })
});