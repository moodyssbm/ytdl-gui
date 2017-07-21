const electron = require('electron');

let app = electron.app,
	BrowserWindow = electron.BrowserWindow;

const debugMode = true;

function adjustForDebug(cond, w)
{
	if(cond)
	{
		return w * 2;
	}
	else
	{
		return w;
	}
}

const winOpts =
{
	width: adjustForDebug(debugMode, 600),
	height: 350
}

app.on('ready', function()
{
	let win = new BrowserWindow(winOpts);

	win.loadURL(`file://${__dirname}/index.html`);
	
	if(debugMode)
	{
		win.webContents.openDevTools();
	}
});
