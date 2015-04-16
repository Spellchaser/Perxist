function addEventListeners()
{
    //onWindowResize
    window.addEventListener("resize", onWindowResize, false);
	
	//Keyboard Event Listener
	window.document.addEventListener("keydown", onDocumentKeyDown, false);

	//Scrambler
	document.getElementById("scramble").addEventListener("click", ScrambleCube);
}

function onWindowResize(event)
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
/*	if(min < canvas.width || min < canvas.height)
		gl.viewport(0,canvas.height-min, min, min); 
		//resize viewport where min is minimum of innerheight/width*/
	tick();
}

var rotations = [];

function onDocumentKeyDown(event)
{
	console.log("Keydown Listener");
	direction = event.shiftKey ? 1 : -1;
	var rot = { "kc" : event.keyCode, "dir" : direction, "current" : false };
	rotations.push(rot);
	//toRot(event.keyCode, event.shiftKey);
}

function ScrambleCube()
{
	var nRot = document.getElementById("ScrambleNumber");
	var rotKeys = Object.keys(keyMappings);
	var rKC = rotKeys[Math.floor(Math.random()*rotKeys.length)];
	for (var i = 0, len = nRot.value; i < len; ++i) 
	{
		console.log( "Loop #" + i );
		rKC = rotKeys[Math.floor(Math.random()*rotKeys.length)];
		console.log( "Current rKC:" + rKC );
		// TODO: Random directions
		// toRot(rKC, direction);
		direction = (Math.random() < 0.5) ? 1 : -1;
		var rot = { "kc" : rKC, "dir" : direction, "current" : false };
		rotations.push(rot);
	}
}