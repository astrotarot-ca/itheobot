/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 78;         // number of cards in deck
sCB = "1865.jpg";   // cardback id

function populateArray(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../../assets/images/cards/rws/w300px/A"+j+".jpg");
	}
	for (var i=1;i<=14;i++) {
		aCrds.push("../../assets/images/cards/rws/w300px/S"+i+".jpg");
		aCrds.push("../../assets/images/cards/rws/w300px/C"+i+".jpg");
		aCrds.push("../../assets/images/cards/rws/w300px/W"+i+".jpg");
		aCrds.push("../../assets/images/cards/rws/w300px/D"+i+".jpg");
	}
	return aCrds;
}

$(function () {
    aRndCrds = populateArray(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});