//
//
//
var aRndCrdsH = new Array();
var aRndCrdsC = new Array();
var aRndCrdsP = new Array();
var sCS;	// card size on appear
var sCBP;	// cardback Planets
var sCBC;	// cardback Constellations
var sCBH;	// cardback HOuses
var iImgsIdx = 0;    // card images index
var iMrgnStrt; // margin start
var iCrdMrgn; // card margin

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
		if (iImgs>iImgsIdx) {
      if (elmnt.src.includes(sCBP)) {
        elmnt.src = aRndCrdsP.shift();
      } else if (elmnt.src.includes(sCBC)) {
        elmnt.src = aRndCrdsC.shift();
      } else {
        elmnt.src = aRndCrdsH.shift();
      }
	  }
		elmnt.style.width = sCS;
		elmnt.style.zIndex += 10;

    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
		// stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function pullNextZoP(sGameId,sCardBackP,sImgAlt) {

  oNewImg = new Image();
  
  $(oNewImg).attr({
      src: "../../assets/images/cards/"+sGameId+"/w300px/"+sCardBackP,
      alt: sImgAlt,
      class: "card"
  });
  dragElement(oNewImg);
  $("#mainGameBoard").append(oNewImg);
  
}

function pullNextZoC(sGameId,sCardBackC,sImgAlt) {

  oNewImg = new Image();
  
  $(oNewImg).attr({
      src: "../../assets/images/cards/"+sGameId+"/w300px/"+sCardBackC,
      alt: sImgAlt,
      class: "card"
  });
  dragElement(oNewImg);
  $("#mainGameBoard").append(oNewImg);
  
}

function pullNextZoH(sGameId,sCardBackH,sImgAlt) {

  oNewImg = new Image();
  
  $(oNewImg).attr({
      src: "../../assets/images/cards/"+sGameId+"/w300px/"+sCardBackH,
      alt: sImgAlt,
      class: "card"
  });
  dragElement(oNewImg);
  $("#mainGameBoard").append(oNewImg);
  
}
