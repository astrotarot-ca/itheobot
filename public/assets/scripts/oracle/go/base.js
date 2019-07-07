/*
 *
*/
iImgs = 52;         // number of cards in deck
sCS = "133px";	    // card size on appear
sCB = "back.jpg";   // cardback id

function populateArray(aCrds) {
	for (var i=1;i<=10;i++) {
		aCrds.push("../../assets/images/cards/go/w300px/"+i+"S.png");
		aCrds.push("../../assets/images/cards/go/w300px/"+i+"C.png");
		aCrds.push("../../assets/images/cards/go/w300px/"+i+"H.png");
		aCrds.push("../../assets/images/cards/go/w300px/"+i+"D.png");
	}
	aCrds.push("../../assets/images/cards/go/w300px/AS.png");
	aCrds.push("../../assets/images/cards/go/w300px/AH.png");
	aCrds.push("../../assets/images/cards/go/w300px/AC.png");
	aCrds.push("../../assets/images/cards/go/w300px/AD.png");

	aCrds.push("../../assets/images/cards/go/w300px/JS.png");
	aCrds.push("../../assets/images/cards/go/w300px/JH.png");
	aCrds.push("../../assets/images/cards/go/w300px/JC.png");
	aCrds.push("../../assets/images/cards/go/w300px/JD.png");

	aCrds.push("../../assets/images/cards/go/w300px/KS.png");
	aCrds.push("../../assets/images/cards/go/w300px/KH.png");
	aCrds.push("../../assets/images/cards/go/w300px/KC.png");
	aCrds.push("../../assets/images/cards/go/w300px/KD.png");

	aCrds.push("../../assets/images/cards/go/w300px/QS.png");
	aCrds.push("../../assets/images/cards/go/w300px/QH.png");
	aCrds.push("../../assets/images/cards/go/w300px/QC.png");
	aCrds.push("../../assets/images/cards/go/w300px/QD.png");
	return aCrds;
}

$(function () {
    // populate the array of images
    aRndCrds = populateArray(aRndCrds)
    // shuffle the array
    aRndCrds = shuffle(aRndCrds);
});