/*
 *
*/
iImgs = 17;         // number of cards in deck
sCS = "133px";	    // card size on appear
sCB = "000.jpg";   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=17;j++) {
		aCrds.push("../../assets/images/cards/gb/w300px/go-c"+j+".jpg");
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