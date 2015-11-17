'use strict';

$(document).ready(init);

function init(){
  $('#logout').click(logout)
  var user = localStorage.username
  $('#name').text('welcome to your man cave, '+user);
  // $('#click').click(upload)
}

// function upload(){
//   var x = $('#file').
//   $.post('/home/file-upload',x)
//   .done(function(err,data){
//     console.log(data);
//   })
// }

function logout(){
  window.location.replace('/');
}
