const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const axios = require('axios')
// const rpio = require('rpio')

//rpio.open(16, rpio.OUTPUT, rpio.LOW)

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.setTitle('Get Coffe')
    //window.maximize()
    window.loadFile('index.html')
}

const createQrCodeInfo = async (event, value) => {
    const qrcodeinfo = await axios({
        method: "GET",
        url: "http://localhost:3000/",
        params: value
    }).then(function(res) {
        return res.data
    }).catch(function (error) {
        return error;
    })

    return qrcodeinfo
}

const waterPumpActivate = () => {
    /** 
    rpio.write(16, rpio.HIGH)
    rpio.msleep(500)
    rpio.write(16, rpio.LOW)
    */
}

app.whenReady().then(() => {
    ipcMain.handle('create-qrcode', createQrCodeInfo)
    ipcMain.handle('water-pump-activate', waterPumpActivate)
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