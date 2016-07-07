
$(document).ready(function(){



	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


//begin new game

  var guesses = []
  var totalGuesses = 0
  var distance = null
  var previousDistance = null


  	 function newGame (){
      console.log("Ready to play?");
      answer = Math.floor(Math.random() * 100) + 1;
      console.log(answer);
      $('#userGuess').val('');
      $('#count').text(0);
      $('#feedback').text('Make your guess!');
      $('#guessList').empty();
      guesses = [];
     }

     $('.new').click(newGame)

//listen for guess

     $('form').on ('submit', function(event) {
        event.preventDefault();
        var guess = $('#userGuess').val();
        console.log(guess);
        setFeedback(guess);
        addGuess(guess);   
        addGuessToList(guess);
        resetForm(guess);

        //call other functions here

    })

     



//conditionals for guess (inside function)
function getFeedback(guess) {
 var difference = Math.abs(guess - answer);
 //if > 50 away
 if (difference >= 50){
  return 'You\'re freezing cold'
 }
 //if between 30 and 50 away
 else if (difference >= 30){
  return 'You\'re pretty chilly'
 }
 //if between 20 and 30 away
 else if (difference >= 20){
  return 'You\'re warming up a bit'
 }
 //if between 10 and 20 away
 else if (difference >= 10){
  return 'You\'re getting pretty warm'
 }
 //if less than 10 away
 else if (difference >= 1){
  return 'You\'re scorching hot'
 }
 else {
  return 'Nailed it!'
 }
}



//feedback for guess
function setFeedback (guess){
  var feedback = getFeedback(guess);
  $('#feedback').text (feedback);
}



//count the number of guesses
function addGuess(guess) {
  guesses.push(guess);
  $('#count').text(guesses.length)

}

//add guesses to list
function addGuessToList (guess) {
  var guessList = []
  $('#guessList').append('<li>'+ guess + '</li>')

}

//reset form after each guess
function resetForm () {
  
  $('#userGuess').val('');

  
}


//clear feedback and count on +New Game





newGame();

});







