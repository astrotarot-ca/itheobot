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
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;
  
  elmnt.addEventListener("touchstart", dragStart, false);
  elmnt.addEventListener("touchend", dragEnd, false);
  elmnt.addEventListener("touchmove", drag, false);
  
  elmnt.addEventListener("mousedown", dragStart, false);
  elmnt.addEventListener("mouseup", dragEnd, false);
  elmnt.addEventListener("mousemove", drag, false);
  
  function dragStart(e) {
    if (iImgs>iImgsIdx) {
      if (elmnt.src.includes(sCBP)) {
        elmnt.src = aRndCrdsP.shift();
      } else if (elmnt.src.includes(sCBC)) {
        elmnt.src = aRndCrdsC.shift();
      } else if (elmnt.src.includes(sCBH)) {
        elmnt.src = aRndCrdsH.shift();
      }
      iImgsIdx++;
	  }
  
    elmnt.style.width = sCS;
    elmnt.style.zIndex+=1;
  
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }
  
    if (e.target === elmnt) {
      active = true;
    }
  }
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    active = false;
  }
  
  function drag(e) {
    if (active) {
    
      e.preventDefault();
    
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, elmnt);
    }
  }  
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
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
