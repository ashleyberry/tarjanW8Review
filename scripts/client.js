$( document ).ready( onReady );

// globals
let inventory = [];

function addItem(){
    console.log( 'in addItem' );
    // get user input & place into a new object
    const newItem = {
        // values ceom from input fields (select & text)
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    } // end newItem
    // push the new object into our array
    inventory.push( newItem ); 
    // display inventory
    console.log( inventory );
} // end addItem

function onReady(){
    // capture click event on element with "addItemButton" id
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady