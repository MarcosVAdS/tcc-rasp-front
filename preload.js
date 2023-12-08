const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('data', {
   createQrCodeInfo: (value) => ipcRenderer.invoke('create-qrcode', value),
})