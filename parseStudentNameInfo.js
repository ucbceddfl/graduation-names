

var myval=0;

var dict = {};
outlets = 4;



if (jsarguments.length>1)
	myval = jsarguments[1];



function bang() {
	outlet(0,"myvalue","is",myval);
}

function msg_int(v) {
	post("received int " + v + "\n");
	myval = v;
	bang();
}

function msg_float(v) {
	post("received float " + v + "\n");
	myval = v;
	bang();
}

function list() {
	var listItem = arrayfromargs(arguments);
	//post("received list " + listItem + "\n");
	
	if (listItem.length != 4) {
		post("ERROR, csv row length = " + listItem.length + " and expected is 4");
	}
	else {
		post("qr code: " + listItem[0]+"\n"); // qr code
		post("name: " + listItem[1]+"\n"); 
		post("pronunciation: " + listItem[2]+"\n");
		post("mp3 filename:  " + listItem[3]+"\n");
		dict[listItem[0]] = [listItem[1], listItem[2], listItem[3]]
	}
 
	
	bang();
}

function anything() {
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	myval = a;
	bang();
}

function get_info_from_qr(qr) {

	var dict_item = dict[qr];
	outlet(0, qr);
	for (var i = 0; i < dict_item.length; i++) {
		outlet(i+1, dict_item[i]);
		post(dict_item[i+1]);
	}

}