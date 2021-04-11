$(document).on("click", "#menu-open", function(){
  $("#menu-bar").slideDown( "slow" )
});
$(document).on("click", "#history-open", function(){
  $("#history-bar").slideDown( "slow" )
});
$(document).on("click", "#menu-close", function(){
  $("#menu-bar").slideUp( "slow" )
});
$(document).on("click", "#history-close", function(){
  $("#history-bar").slideUp( "slow" )
});
$(document).on("click", "#complex-open", function(){
  $("#complex").slideDown( "slow", "linear" )
});
$(document).on("click", "#complex-close", function(){
  $("#complex").slideUp( "slow", "linear" )
});