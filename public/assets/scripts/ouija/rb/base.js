/*
 *
*/
iImgs = 22;         // number of cards in deck
sCS = "133px";	    // card size on appear
sCB = "000.jpg";   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../../assets/images/cards/rws/w300px/ro-c"+j+".jpg");
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