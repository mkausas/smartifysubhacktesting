// synonym fetcher 
// var smartWords
for (j = 0; j < words.length; j++) {
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();

	// var word = "accolade";
	var word = words[j][0];
	// b60b682b163e2b53cfe9986fe78ffe6d // used!
	// 5412eee56339a90ccc942410aafa676a // 
	var requestURL = "https://words.bighugelabs.com/api/2/5412eee56339a90ccc942410aafa676a/" + word + "/json";
	xmlHttp.open( "GET", requestURL, false );

	try {
		xmlHttp.send( null );
	} catch (err) {
		continue;
	}

	if (xmlHttp.status != 200) {	
		continue;
	}

	var obj = JSON.parse(xmlHttp.responseText);


	for (var temp in JSON.parse(xmlHttp.responseText)) { 
		// console.log(x)
		if (JSON.parse(xmlHttp.responseText)[temp]["syn"] != null) {
			for (i = 0; i < JSON.parse(xmlHttp.responseText)[temp]["syn"].length; i++) {
				words[j] = words[j].concat(JSON.parse(xmlHttp.responseText)[temp]["syn"][i]);
			}
		}
	}
}


for (i = 0; i < words.length; i++) {
	if ()
}

[[["accolade"], ["a tangible symbol signifying approval or distinction"]],
[["acrimony"], ["bitterness"]]]


var x = ["blah", "blab"];
smartWords[0] = smartWords[0].concat();


JSON.parse(xmlHttp.responseText)["noun"]["syn"]

["award", "honor", "honour", "laurels", "symbol"]