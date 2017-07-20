//define functions here

function getIt() {
  $('p').on('click', function() {
    window.alert("You CLICKED!")
  })
};

function frameIt() {
  $('img').addClass("tasty")
};

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71){
      alert('G key was pressed down');
    }
  })
};

function submitIt() {
  $('form').on('submit', function() {
    window.alert('Your form is going to be submitted now.')
  })
};


$(document).ready(function(){

// call functions here


});
