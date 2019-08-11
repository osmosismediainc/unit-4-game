$(document).ready(function () {
    let random = Math.floor(Math.random() * 101 + 19) // Generates random number from 19 to 120
    console.log("The Random Number: " + random); // Does it work?
    $('#currentValue').text(random);

    // Gems Variables and Gem Values
    let blueGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let redGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let greenGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    let yellowGem = Math.floor(Math.random() * 12 + 1) // Generates random number 1-12
    // Do they work?
    console.log("blueGem: " + blueGem)
    console.log("redGem: " + redGem)
    console.log("greenGem: " + greenGem)
    console.log("yellowGem: " + yellowGem)
    // Scoring Variables
    let score = 0;
    let wins = 0;
    let losses = 0;
    // Push the Scoring Variables into their IDed Divs
    $('#playerScore').text(score);
    $('#wins').text(wins);
    $('#losses').text(losses);
    //Crystal clicks
    // BLUE
    $('#blueGem').on('click', function () {
        score = score + blueGem; // add the  blueGem random value to the score
        console.log("New playerScore= " + blueGem); // Does it work?
        $('#totalScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defined later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep)
        }
    })
    // RED
    $('#redGem').on('click', function () {
        score = score + redGem; // add the  redGem random value to the score
        console.log("New score= " + redGem); // Does it work?
        $('#totalScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep)
        }
    })
    // GREEN
    $('#greenGem').on('click', function () {
        score = score + greenGem; // add the  greenGem random value to the score
        console.log("New score= " + greenGem); // Does it work?
        $('#totalScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep)
        }
    })
    // Yellow
    $('#yellowGem').on('click', function () {
        score = score + yellowGem; // add the  yellowGem random value to the score
        console.log("New score= " + yellowGem); // Does it work?
        $('#totalScore').text(score); // Let's update the score text
        if (score === random) { // If the user score equals the random number
            victory();  // Run the victory function defind later
        }
        else if (score > random) { // else if the user overshot the random number
            defeat();   // Run the defeat function (and weep)
        }
    })
        //Functions
        // RESET
        	//Function for game reset
	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		blueGem=Math.floor(Math.random()*12+1);
		redGem=Math.floor(Math.random()*12+1);
		greenGem=Math.floor(Math.random()*12+1);
		yellowGem=Math.floor(Math.random()*12+1);
		score=0;
		$('#totalScore').text(score);
	}
        // WIN function
	function victory(){
		alert("WINNER");
	 	wins++; 
	  	$('#wins').text(wins);
	  	reset();
    }
    function defeat(){
		alert("You are defeated");
		losses++;
		$('#numberOfLosses').text(losses);
		reset();
	}

});