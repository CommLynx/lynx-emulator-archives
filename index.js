// import Electron's APIs
let {
    BrowserWindow, app, ipcMain, Menu, shell, MenuItem
} = require('electron');


app.once('ready', () => {
    main();
});

app.on('window-all-closed', () => {
    app.quit();
});

function main() {
    var win = new BrowserWindow({
        height: 530,
        width: 925,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    var menu = new Menu();
    // The `File` menu
    menu.append(
        new MenuItem({
            submenu: [
                {
                    type: 'normal',
                    click: function () {
                        win.webContents.send("LoadSaveState")
                    },
                    label: 'Load Save State'
                },
                {
                    type: 'normal',
                    click: function () {
                        win.webContents.send("ExportSaveState")
                    },
                    label: 'Export Save State'
                },
                { type: 'separator' },
                {
                    type: 'normal',
                    click: function () {
                        win.webContents.send("LoadNewROM")
                    },
                    label: 'Select Firmware (ROM)'
                },
                { type: 'separator' },
                {
                    type: 'normal',
                    click: function () {
                        win.webContents.send("LoadnewFlash")
                    },
                    label: 'Select Flash Memory'
                },
                { type: 'separator' },
                {
                    type: 'normal',
                    click: function () {
                        app.quit();
                    },
                    label: 'Quit'
                }
            ],
            label: 'File'
        })
    );
    // The `Emulation` menu
    menu.append(
        new MenuItem({
            label: 'Emulation',
            submenu: [
                {
                    type: 'normal',
                    label: 'Preferences',
                    click: function () {
                        win.webContents.send("OpenPreferences")
                    }
                },
                { type: 'separator' },
                {
                    type: 'normal',
                    label: 'Start',
                    click: function () {
                        win.webContents.send("StartCPU")
                    }
                },
                {
                    type: 'normal',
                    label: 'Pause',
                    click: function () {
                        win.webContents.send("PauseCPU")
                    }
                },
                {
                    type: 'normal',
                    label: 'Stop',
                    click: function () {
                        win.webContents.send("StopCPU")
                    }
                }            
            ]
        })
    );
    // The `Input` menu
    menu.append(new MenuItem({
        label: 'Input',
        submenu: [
            {
                type: 'normal',
                label: 'Keyboard-to-Keypad Map',
                click: function () {
                    ShowKeyboardToKeypadMap(win)
                }
            }
        ]
    }));
    // The `View` menu
    menu.append(new MenuItem({
        label: 'View',
        submenu: [
            {
                type: 'normal',
                label: 'To view some',
                click: function () {
                    shell.openExternal("https://www.reddit.com/r/milesprower")
                }
            },
            {
                type: 'normal',
                label: 'cute and fluffeh',
                click: function () {
                    shell.openExternal("https://www.reddit.com/r/milesprower")
                }
            },
            {
                type: 'normal',
                label: 'Tails pics, check out',
                click: function () {
                    shell.openExternal("https://www.reddit.com/r/milesprower")
                }
            },
            {
                type: 'normal',
                label: 'the Tails subreddit;',
                click: function () {
                    shell.openExternal("https://www.reddit.com/r/milesprower")
                }
            },
            {
                type: 'normal',
                label: 'r/milesprower !',
                click: function () {
                    shell.openExternal("https://www.reddit.com/r/milesprower")
                }
            }
        ]
    }));
    // The `Help` menu
    menu.append(new MenuItem({
        label: 'Help',
        submenu: [
            {
                type: 'normal',
                label: 'Debug Mode',
                click: function () {
                    win.webContents.openDevTools({
                        mode: 'detach'
                    });
                }
            }
        ]
    }));
    // add the menubar to the window
    win.setMenu(menu);
    win.loadFile('./index.html');
    win.show();
}
