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

let current;

exec('ls /usr/local/cellar/youtube-dl', function(err,stdout,stderr)
	{
		current = stdout;
		current = current.substring(0,10);
});

function getVid()
{
	let command = '/usr/local/cellar/youtube-dl/';
	command += current;
	command += '/bin/youtube-dl ';
	command += vidURL.value;
	command += ' -o ~/Movies/';
	command += vidName.value;
	command += '.mkv';

	exec(command, function(err, stdout, stderr)
	{
		if(err)
		{
			console.log("We got an error.");
		}
		else
		{
			console.log(stdout);
		}
	});

	console.log(command);
}
