const electron = require('electron');

let app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;

const template = [
	{
		label: 'Edit',
		submenu: [
			{role: 'undo'},
			{role: 'redo'},
			{role: 'separator'},
			{role: 'cut'},
			{role: 'copy'},
			{role: 'paste'},
			{role: 'pasteandmatchstyle'},
			{role: 'delete'},
			{role: 'selectall'},
			{role: 'separator'},
			{role: 'quit'}
		]
	},
	{
    	label: 'View',
    	submenu: [
      		{role: 'reload'},
      		{role: 'forcereload'},
      		{role: 'toggledevtools'},
      		{type: 'separator'},
      		{role: 'resetzoom'},
      		{role: 'zoomin'},
      		{role: 'zoomout'},
      		{type: 'separator'},
      		{role: 'togglefullscreen'}
    ]
  	},
  	{
    	role: 'window',
    	submenu: [
      		{role: 'minimize'},
      		{role: 'close'}
    	]
  	},
  	{
    	role: 'help',
    	submenu: [
      		{
        		label: 'Learn More',
        		click () { require('electron').shell.openExternal('https://electron.atom.io') }
      		}
    	]
  	}
]

const debugMode = false;

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

app.on('window-all-closed', function()
{
	app.quit();
});

app.on('ready', function()
{
	let win = new BrowserWindow(winOpts);

	win.loadURL(`file://${__dirname}/index.html`);
	
	if(debugMode)
	{
		win.webContents.openDevTools();
	}

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
});