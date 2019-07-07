/*
 *
*/
var aRndCrds = new Array();
var iImgs;
var iImgsIdx = 0;    // card images index
var sCS;	// card size on appear
var sCB;	// cardback

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
    if (elmnt.src.includes(sCB) && iImgs>iImgsIdx) {
        elmnt.src = aRndCrds.shift();
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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
  
function pullNext(sGameId,sCardBack,sImgAlt) {
  oNewImg = new Image();
  
  $(oNewImg).attr({
      src: "../../assets/images/cards/"+sGameId+"/w300px/"+sCardBack,
      alt: sImgAlt,
      class: "card"
  });
  dragElement(oNewImg);
  $("#mainGameBoard").append(oNewImg);
}