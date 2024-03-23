var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    //make a 5by5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //img
            let tile = document.createElement("img");
                tile.src = "images/blank.jpg";
                
                //drag funtionality
                tile.addEventListener("dragStart", dragStart);
                tile.addEventListener("dragover", dragOver);
                tile.addEventListener("dragenter", dragEnter);
                tile.addEventListener("dragleave", dragLeave);
                tile.addEventListener("drop", dragDrop);
                tile.addEventListener("dragend", dragEnd);
                
                document.getElementById("board").append(tile);
            }
    }
    
    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); // put "1" to 25 into the array (puzzle image names)
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        
        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }
    
    for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".jpg";
    
    //Drag Functionality
    tile.addEventListener("dragstart", dragStart); //click on the image to drag it
    tile.addEventListener("dragover", dragOver);   //drag an Image
    tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
    tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
    tile.addEventListener("drop", dragDrop);	   //drop an image onto another one
    tile.addEventListener("dragend", dragEnd);     //after you completed dragDrop
    
    document.getElementById("pieces").append(tile);
    }
}

    //Drag Tiles
    function  dragStart() {
        currTile = this; //"this" refers to image that was clicked on for dragging
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }
    
    function dragLeave() {
        
    }
    
    function dragDrop () {
        otherTile = this; // this will refer to the image that is being dropped on
    }
    
    function dragEnd() {
        if (currTile.src.includes("blank")) {
            return;
        }
    
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
    
    turns += 1;
    document.getElementById("turns").innerText = turns;
}