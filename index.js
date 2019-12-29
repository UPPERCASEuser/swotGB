const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 0, height: 0,
        minWidth : 800,
        minHeight: 600,
        title: "swotGB + - Electron GameBoy emulator based on swotGB",
        backgroundColor: "#000",
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('app/index.html')
    win.setMenu(null);
    //win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {if (process.platform !== 'darwin') {app.quit()} });

app.on('activate', () => { if (win === null) {createWindow()} });

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
