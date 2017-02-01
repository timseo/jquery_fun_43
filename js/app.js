// $( document ).ready(function(){
  //all of your other stuff = $(function(){
$(function(){

  console.log('here i am')


// $('#myBtn').on('click', function() {
//   alert('You clicked me!')
//   event.stopPropagation()
// })
//
// $('#container').on('click', function() {
//   alert('You clicked the container div!')
//
// })

$('#drinks').append('<li>Squirt</li>')
$('#drinks').append('<li>Diet Mtn Dew</li>')
$('#drinks').append('<li>Coke</li>')


var foods = ['burgers', 'fries', 'tacos', 'sCallops']
// for (var i = 0; i < foods.length; i++) {
//   $('#foods').append('<li>' + foods[i] + '</li>')
// }


foods.forEach(function(food) {
  $('#foods').append('<li>' + food + '</li>')
})

$('#addFood').on('click', function(){
  if ($('#foodInput').val() != '') {
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
 }
})



// // kate slacked this
$('#addDrink').on('click', function(){
  // if (e.keyCode === 13) {

  if ($('#drinkInput').val() != '') {
  var newDrink = $('#drinkInput').val()
  $('#drinks').append('<li>' + newDrink + '</li>')
  $('#drinkInput').val('')

 }
})

//
// $( "#target" ).keydown(function() {
//   alert( "Handler for .keydown() called." );
// });
//
// // $( "#target" ).on('.keydown', function() {
// //   alert( "Handler for .keydown() called." );
// // });
//
// $( "#target" ).keyup(function() {
//   alert( "Handler for .keyup() called." );
// });
//
// // $( "#target" ).on('.keyup', function() {
// //   alert( "Handler for .keyup() called." );
// // });
//
// $( "#target" ).keypress(function() {
//   alert( "Handler for .keypress() called." );
// });

})
