

var myval=0;

var dict = {};



if (jsarguments.length>1)
	myval = jsarguments[1];



function bang()
{
	outlet(0,"myvalue","is",myval);
}

function msg_int(v)
{
	post("received int " + v + "\n");
	myval = v;
	bang();
}

function msg_float(v)
{
	post("received float " + v + "\n");
	myval = v;
	bang();
}

function list()
{
	var listItem = arrayfromargs(arguments);
	//post("received list " + listItem + "\n");
	post(listItem.length +"\n");
 	post(listItem[0]+"\n");
	post(listItem[1]+"\n");
	post(listItem[2]+"\n");
	post(listItem[3]+"\n");
	dict[listItem[0] = listItem.slice(1);
	
	bang();
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	myval = a;
	bang();
}