



$('document').ready(function (){
  // $("#click").click(function(){

  $(".one").append("<div class='boxBlue boxes blue'>" + "</div>");

  $(".two").append("<div class='boxGreen boxes green'>" + "</div>");

  $(".three").append("<div class='boxPurple boxes purple'>" + "</div>");

  $(".four").append("<div class='boxYellow boxes yellow'>" + "</div>");



  // var blue =
  //   {name: blue, text: 'Find and pick the color blue!', value: 0};
  // var green =
  //   {name: green, text: 'Find and pick the color green!', value: 1};
  // var purple =
  //   {name: purple, text: 'Find and pick the color purple!', value: 2};
  // var yellow =
  //   {name: yellow, text: 'Find and pick the color yellow!', value: 3};
  //
  // var colors = [blue, green, purple, yellow];
  //
  // var responses = ['Great!', "Nope..Try again..."];

  function randomNum(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };


  var colorPick = randomNum(0,3);

  var $lead = $('.lead');

  var colorValue = '';
  newTitle();


  function newTitle () {

    colorPick = randomNum(0,3);
    switch (colorPick) {
      case 0:
      $lead.append("<p>Find and pick the color blue!</p>");
      colorValue = 'blue';
      break;
      case 1:
      $lead.append("<p>Find and pick the color green!</p>");
      colorValue = 'green';
      break;
      case 2:
      $lead.append("<p>Find and pick the color purple!</p>");
       colorValue = 'purple';
      break;
      default:
      $lead.append("<p>Find and pick the color yellow!</p>");
       colorValue = 'yellow';
    }
    return colorValue;
  }

  $('.clickArea').on('click', '.boxes', function(){
    if ($(this).hasClass(colorValue)) {
      // alert('way to go');
      $('.rightOrWrong').text('Way to go!');
      rewriteText();
      // $('.lead').find('p').val('');
      // $('.lead').append("<p>" + newTitle() + "</p>");


      console.log(colorValue);


    } else {
      // alert('try again');
      $('.rightOrWrong').text('Bummer, try again!');
    };


    function rewriteText () {
      $($lead).empty();
      newTitle();
      // $($lead).append("<p> Now fiind the color " + newTitle() +   "</p>");

    }

  });
});
