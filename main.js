const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path');
const axios = require('axios')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.setTitle('Get Coffe')
    window.loadFile('index.html')
}

const createQrCodeInfo = async () => {
    const qrcodeinfo = await axios({
        method: "GET",
        url: "http://localhost:3000/"
    }).then(function(res) {
        return res.data
    }).catch(function (error) {
        return error;
    })

    return qrcodeinfo
}

app.whenReady().then(() => {
    ipcMain.handle('create-qrcode', createQrCodeInfo)
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})