/*
 *	Author: Serafim Junior Dos Santos Fagundes
*/
iImgs = 78;         // number of cards in deck
sCB = "cardback.jpg";   // cardback id

function populateDeckAL(aCrds) {
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

function populateDeckMA(aCrds) {
	for (var j=1;j<=22;j++) {
		aCrds.push("../../assets/images/cards/cbdtm/w300px/A"+j+".jpg");
	}
	return aCrds;
}
function populateDeckMI(aCrds) {
	for (var i=1;i<=14;i++) {
		aCrds.push("../../assets/images/cards/cbdtm/w300px/S"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/C"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/W"+i+".jpg");
		aCrds.push("../../assets/images/cards/cbdtm/w300px/D"+i+".jpg");
	}
	return aCrds;
}

$(function () {
	aRndCrds = new Array();
    aRndCrds = populateDeckAL(aRndCrds)
    aRndCrds = shuffle(aRndCrds);
});