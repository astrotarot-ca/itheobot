/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 17;         // number of cards in deck
sCB = '000.jpg';   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=17;j++) {
		aCrds.push("../../../assets/images/cards/gb/w300px/go-c"+j+".jpg");
	}
	return aCrds;
}

$(function () {
    aRndCrds = populateArray(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});