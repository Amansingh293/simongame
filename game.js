
var gamePattern=[];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern =[];


$(".btn").click(function(event){

  var userChosenColor=$(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

var started=false;

var level=0;

$(document).keydown(function(){
                                                  // we created a condition here where 1st key press will leads to level 0....  hence it will give indication that game has started...
                                                  // in first condition value of started variable is false hence if will execute.......but after one execution value of started variable has been changed to true hence it triggeg else statement and nextfunction will be executed...
  if (started===false){

  nextSequence();

  started=true;

}
else {

  level++;            /* here we placed our increment operator hence it will increment values for nextsequence here only*/

  nextSequence();

}

};);

function nextSequence(){

  $("#level-title").html("level "+level);

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColour=buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    animatePress(randomChosenColour);

    playSound(randomChosenColour);

}


function checkAnswer(currentLevel){
  if( userClickedPattern[currentLevel]=gamePattern[currentLevel]){

      if ( userClickedPattern.length=gamePattern.length){

        setTimeout(function(){

          nextSequence();

        },1000);

      }

    else {
      $("#level-title").addClass(".game-over").html("game over, press any key to restart");

      setTimeout(function(){ $("#level-title").removeClass(".game-over");}, 100);
    }
  }

}

function playSound(name){
    var sound= new Audio("sounds/"+name+".mp3");
    sound.play();

}

function animatePress(currentcolor){

    $("."+currentcolor).addClass("pressed");

    setTimeout( function(){$("."+ currentcolor).removeClass("pressed");}, 100);
}
