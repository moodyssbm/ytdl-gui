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
let stdoutdiv = gbi('stdoutdiv');

let current; // for finding the current version of youtube-dl

exec('ls /usr/local/cellar/youtube-dl', function(err,stdout,stderr)
	{
		current = stdout;
		current = current.substring(0,10);
});

function getVid()
{
	getVidButton.disabled = true;
	let command = '/usr/local/cellar/youtube-dl/';
	command += current;
	command += '/bin/youtube-dl ';
	command += vidURL.value;
	command += ' -o ~/Movies/';
	command += vidName.value;
	command += '.mp4';

	exec(command, function(err, stdout, stderr)
	{
		if(err)
		{
			console.log("We got an error.");
		}
		else
		{
			console.log(stdout);
			alert("Saved as " + vidName.value + " in ~/Movies");
		}
	});
	getVidButton.disabled = false;
}
