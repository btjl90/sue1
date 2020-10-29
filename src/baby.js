var kitchen = 0;
var guest = 0;
var master = 0;
//intro
function showMainRoom() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("kitchenRoom").style.display = "none";
    document.getElementById("kitchenPuzzle").style.display = "none";
    document.getElementById("guestRoom").style.display = "none";
    document.getElementById("guestPuzzle").style.display = "none";
    document.getElementById("masterRoom").style.display = "none";
    document.getElementById("masterPuzzle").style.display = "none";
    document.getElementById("mainRoom").style.display = "block";
}
//main room
function showMainPuzzle() {
    if(kitchen == 1 && guest == 1 && master == 1) {
    document.getElementById("mainPuzzle").style.display = "block";    
    } else {
    document.getElementById("warningModal").style.display = "block";    
    }    
}
function showKitchenRoom() {
    document.getElementById("kitchenRoom").style.display = "block";
    document.getElementById("mainRoom").style.display = "none";
    document.getElementById("mainPuzzle").style.display = "none";
}
function showGuestRoom() {
    document.getElementById("guestRoom").style.display = "block";
    document.getElementById("mainRoom").style.display = "none";
    document.getElementById("mainPuzzle").style.display = "none";
}
function showMasterRoom() {
    document.getElementById("masterRoom").style.display = "block";
    document.getElementById("mainRoom").style.display = "none";
    document.getElementById("mainPuzzle").style.display = "none";
}
function checkMainPuzzle() {
    if(document.getElementById("c1").checked == true && document.getElementById("c2").checked == false && document.getElementById("c3").checked == false && document.getElementById("c4").checked == false && document.getElementById("c5").checked == false && document.getElementById("c6").checked == false && document.getElementById("c7").checked == true && document.getElementById("c8").checked == false && document.getElementById("c9").checked == false && document.getElementById("c10").checked == true && document.getElementById("c11").checked == false && document.getElementById("c12").checked == false && document.getElementById("c13").checked == false && document.getElementById("c14").checked == false && document.getElementById("c15").checked == false && document.getElementById("c16").checked == true) {
        document.getElementById("exitSuccess").style.display = "block";
        document.getElementById("mainRoom").style.display = "none";
        document.getElementById("mainPuzzle").style.display = "none";
        document.getElementById("outro").style.display = "block";
        document.getElementById("status1").style.display = "none";
        document.getElementById("status2").style.display = "none";
        document.getElementById("status3").style.display = "none";
    } else {
        document.getElementById("failModal").style.display = "block";
    }
}
//kitchen room
function showKitchenPuzzle() {
    document.getElementById("kitchenPuzzle").style.display = "block";
}
function checkKitchenPuzzle() {
    if(document.getElementById("pw").value == "EDD" || document.getElementById("pw").value == "edd") {
        document.getElementById("kitchenSuccess").style.display = "block";
        kitchen = 1;
        document.getElementById("status1").style.display = "block";
    } else {
        document.getElementById("failModal").style.display = "block";
    }
}
//guest room
function showGuestPuzzle() {
    document.getElementById("guestPuzzle").style.display = "block";
}
function checkGuestPuzzle() {
    if(document.getElementById("p1").value == "3" && document.getElementById("p2").value == "0" && document.getElementById("p3").value == "0" && document.getElementById("p4").value == "4" && document.getElementById("p5").value == "2" && document.getElementById("p6").value == "1") {
        document.getElementById("guestSuccess").style.display = "block";
        document.getElementById("status2").style.display = "block";
        guest = 1;
    } else {
        document.getElementById("failModal").style.display = "block";
    }
}
//master room
function showMasterPuzzle() {
    document.getElementById("masterPuzzle").style.display = "block";
}
//master room dnd
var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2, 3];
  var terms = ['3', '2', '1'];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<3; i++ ) {
    $('<div>' + terms[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  var words = ['Humans', 'Dogs', 'Home'];
  for ( var i=1; i<=3; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
      //ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
    
    if ( slotNumber != cardNumber ) {
      //ui.draggable.addClass( 'correct' );
    //ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    //correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 3 ) {
    document.getElementById("masterPuzzle").style.display = 'none';
    document.getElementById("masterSuccess").style.display = 'block';
    document.getElementById("status3").style.display = "block";
    master = 1;
      init();
  }
}
//main room modals
function openPortraitModal() {
    document.getElementById("portraitModal").style.display = "block";
}
function openSofaModal() {
    document.getElementById("sofaModal").style.display = "block";
}
function openTvModal() {
    document.getElementById("tvModal").style.display = "block";
}
//kitchen room modals
function openSinkModal() {
    document.getElementById("sinkModal").style.display = "block";
}
function openNoteModal() {
    document.getElementById("noteModal").style.display = "block";
}
function openMorseModal() {
    document.getElementById("morseModal").style.display = "block";
}
//guest room modal
function openWindowModal() {
    document.getElementById("windowModal").style.display = "block";
}
function openBedModal() {
    document.getElementById("bedModal").style.display = "block";
}
function openTabletModal() {
    document.getElementById("tabletModal").style.display = "block";
}
//master room modal
function openBedModal2() {
    document.getElementById("bedModal2").style.display = "block";
}
function openBinModal() {
    document.getElementById("binModal").style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("portraitModal")) {
    document.getElementById("portraitModal").style.display = "none";
  }
    if (event.target == document.getElementById("sofaModal")) {
    document.getElementById("sofaModal").style.display = "none";
  }
    if (event.target == document.getElementById("tvModal")) {
    document.getElementById("tvModal").style.display = "none";
  }
    if (event.target == document.getElementById("failModal")) {
    document.getElementById("failModal").style.display = "none";
  }
    if (event.target == document.getElementById("exitSuccess")) {
    document.getElementById("exitSuccess").style.display = "none";
  }
    if (event.target == document.getElementById("sinkModal")) {
    document.getElementById("sinkModal").style.display = "none";
  }
    if (event.target == document.getElementById("noteModal")) {
    document.getElementById("noteModal").style.display = "none";
  }
    if (event.target == document.getElementById("morseModal")) {
    document.getElementById("morseModal").style.display = "none";
  }
    if (event.target == document.getElementById("kitchenSuccess")) {
    document.getElementById("kitchenSuccess").style.display = "none";
  }
    if (event.target == document.getElementById("windowModal")) {
    document.getElementById("windowModal").style.display = "none";
  }
    if (event.target == document.getElementById("bedModal")) {
    document.getElementById("bedModal").style.display = "none";
  }
    if (event.target == document.getElementById("tabletModal")) {
    document.getElementById("tabletModal").style.display = "none";
  }
    if (event.target == document.getElementById("guestSuccess")) {
    document.getElementById("guestSuccess").style.display = "none";
  }
    if (event.target == document.getElementById("warningModal")) {
    document.getElementById("warningModal").style.display = "none";
  }
    if (event.target == document.getElementById("bedModal2")) {
    document.getElementById("bedModal2").style.display = "none";
  }
    if (event.target == document.getElementById("binModal")) {
    document.getElementById("binModal").style.display = "none";
  }
    if (event.target == document.getElementById("masterSuccess")) {
    document.getElementById("masterSuccess").style.display = "none";
  }
}