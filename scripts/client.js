$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    const newItem = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    } // end newItem
    console.log( 'newItem:', newItem ); 
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady