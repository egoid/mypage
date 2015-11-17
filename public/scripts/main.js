'use strict';

$(document).ready(init);

function init(){
  $('#clicknewuser').click(newuser)
  $('#login').click(loginuser)
  $('#clickreg').click(clickreg)
  $('#clicklog').click(clicklog)
}

function clickreg(){
  if ($('#reg').css('opacity') == 0 ) {
  $('#reg').animate({opacity:1}) }

  if ($('#reg').css('opacity') == 1 ) {
  $('#reg').animate({opacity:0}) }
}

function clicklog(){
  if ($('#log').css('opacity') == 0) {
  $('#log').animate({opacity:1}) }

  if ($('#log').css('opacity') == 1) {
  $('#log').animate({opacity:0}) }
}


function loginuser(){
  var x = $('#loginuser').val();
  var y = $('#loginpass').val();
  var xy = {username:x,password:y}
  $.post('/users/login',xy)
  .done( function(data,err){
    $('#log').animate({opacity:0});
    $('#reg').animate({opacity:0});
     window.location.replace('/home');
     localStorage.username = x
  })
}

function newuser(){
  var x = $('#newuser').val();
  var y = $('#newpass').val();
  var z = $('#newpass2').val();
  if (y !== z){alert('your passwords didnt match buddy')}
  if (z == y){console.log('yeeee buddy')}
  var xy = {username:x,password:y}
  $.post('/users/register',xy)
    .done( function(data,err){
      $('#reg').animate({opacity:0})
      $('#log').animate({opacity:0})
      window.location.replace('/home')

    })
}