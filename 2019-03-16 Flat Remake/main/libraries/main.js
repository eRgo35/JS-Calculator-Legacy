// Menu Functions

$(document).on("click", "#menu-open", function () {
  $("#menu-bar").animate({left: 0});
  $("#fader").fadeIn( "slow" );
});
$(document).on("click", "#history-open", function () {
  $("#history-bar").animate({right: 0});
  $("#fader").fadeIn( "slow" );
});
$(document).on("click", "#menu-close", function () {
  $("#menu-bar").animate({left: "-150px"});
  $("#fader").fadeOut( "slow" );
});
$(document).on("click", "#history-close", function () {
  $("#history-bar").animate({right: "-150px"});
  $("#fader").fadeOut( "slow" );
});
$(document).on("click", "#complex-open", function () {
  $("#complex").animate({right: 0});
});
$(document).on("click", "#complex-close", function () {
    $("#complex").animate({right: 0});
});
$(document).on("click", "#complex-close", function () {
  $("#complex").animate({right: "-200px"}); 
});
$(document).on("click", "#fader", function() {
  $("#menu-bar").animate({left: "-150px"});
  $("#history-bar").animate({right: "-150px"});
  $("#fader").fadeOut( "slow" );
});

// Calculator

function Input(val) {
  var screen = document.getElementById('screen');
  screen.value += val;
}

function Ans() {
  var screen = document.getElementById('screen');
  screen.value = eval(screen.value);

  document.getElementById("clear").style.display = "block";
  document.getElementById("back").style.display = "none";
}

function Clear() {
  var screen = document.getElementById('screen');
  screen.value = "";

  document.getElementById("clear").style.display = "none";
  document.getElementById("back").style.display = "block";
}

function Back() {
  var screen = document.getElementById('screen');
  screen.value = screen.value.substring(0, screen.value.length - 1);
}