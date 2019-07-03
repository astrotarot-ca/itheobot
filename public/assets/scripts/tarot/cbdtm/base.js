/*
 *
*/
iImgs = 78;         // number of cards in deck
sCS = "133px";	    // card size on appear
sCB = "cardback.jpg";   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../../assets/images/cards/cbdtm/w300px/A"+j+".jpg");
	}
	for (var i=1;i<=14;i++) {
		aCrds.push("../../assets/images/cards/cbdtm/w300px/S"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/C"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/W"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/D"+i+".jpg");
	}
	return aCrds;
}

$(function () {
    // populate the array of images
    aRndCrds = populateArray(aRndCrds)
    // shuffle the array
    aRndCrds = shuffle(aRndCrds);

    // link the event functions to each image 
/*
    for (i=0; i<iImgs; i++) {
        oImg =  aImgs[i];
        dragElement(oImg);
    }
*/
});