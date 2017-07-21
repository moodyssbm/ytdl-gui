const child_process = require('child_process');
let exec = child_process.exec;

function gbi(id)
{
	return document.getElementById(id);
}

// IDs
let vidName = gbi('vidName');
let	vidURL = gbi('vidURL');
let getVidButton = gbi('getVidButton');

function getVid()
{
	let command = 'youtube-dl ';
	command += vidURL.value;
	command += ' -o ~/Movies/';
	command += vidName.value;
	command += '.mkv';

	exec(command, function(err, stdout, stderr)
	{
		if(err)
		{
			console.log("We got an error.", stdout);
		}
		else
		{
			console.log(stdout);
		}
	});

	console.log(command);
}
