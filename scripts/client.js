$( document ).ready( onReady );

// globals
let inventory = [];

function addItem(){
    console.log( 'in addItem' );
    // get user input & place into a new object
    const newItem = {
        // values come from input fields (select & text)
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
    } // end newItem
    // push the new object into our array
    inventory.push( newItem ); 
    // display inventory
    displayInventory();
} // end addItem

function displayInventory(){
    console.log( 'in displayInventory' );
    // target an ul element on DOM
    let el = $( '#inventoryOut' );
    // empty el
    el.empty();
    // loop through inventory
    for( let i=0; i<inventory.length; i++ ){
        // append each item to the ul 
        el.append( `<li>${ inventory[i].size } & ${ inventory[i].color }: 
            ${ inventory[i].description }</li>` );
    } // end for
} // end displayInventory

function itemSearch(){
    console.log( 'in itemSearch' );
    // our emtpy array to hold matches
    let matches = [];
    // loop through inventory array
    for( let i=0; i<inventory.length; i++ ){
        // check for matches on size & color (test size first)
        if( inventory [ i ].size === $( '#sizeSearchIn' ).val() 
            && inventory [ i ].color === $( '#colorSearchIn' ).val()){
            // push matches into matches array
            matches.push( inventory [ i ] );
        } // end match
    } // end for
    // display matches
    // target & empty my ul element
    let el = $( '#searchResultsOut' );
    el.empty();
    // loop through matches array
    for( let i=0; i<matches.length; i++ ){
        // append each match to the ul
        el.append( `<li>${ matches[i].size } & ${ matches[i].color }: 
            ${ matches[i].description }</li>` )
    } // end for
} // end itemSearch

function onReady(){
    // capture click event on element with "addItemButton" id
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#itemSearchButton' ).on( 'click', itemSearch )
    // show inventory (just incase something in there)
    displayInventory();
} // end onReady