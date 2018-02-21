// Get the modal
var modal = document.getElementById('id01');
var currentTable;

$('.row').on('click', 'div', function(){
  currentTable = $(this);
  $('#id01 h1 span').text($(this).text())
  $('#id01').show();
});

var customer_reservation = [];
$('.savebtn').on('click', function(){
  var input1 = $('#one');
  var input2 = $('#two');
  var input3 = $('#three');



  currentTable.addClass('reserved');
  currentTable.append(`
  <div class="hidden">
    <p>Name: ${input1.val()}</p>
    <p>Seats: ${input3.val()}</p>
  </div>
  `)
  console.log(input1);

  // customer_reservation.push(reserved);
  $('#id01').hide();
});
