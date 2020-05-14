/*
 *	Author: Serafim Junior Dos Santos Fagundes
 */
sCBP = "000P.jpg";
sCBC = "000C.jpg";
sCBH = "000H.jpg";
iImgs = 34;

function populateArray(iIndx,aCrds,sPref) {
	for (var j=1;j<=iIndx;j++) {
		aCrds.push("../../../assets/images/cards/zo/w300px/"+sPref+j+".jpg");
	}
	return aCrds;
}

$(function () {
	aRndCrdsH = populateArray(12,aRndCrdsH,"Astroracle-M");
	aRndCrdsC = populateArray(12,aRndCrdsC,"Astroracle-C");
	aRndCrdsP = populateArray(10,aRndCrdsP,"Astroracle-P");
    aRndCrdsH = shuffle(aRndCrdsH);
	aRndCrdsC = shuffle(aRndCrdsC);
	aRndCrdsP = shuffle(aRndCrdsP);
});