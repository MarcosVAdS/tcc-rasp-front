const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('data', {
   createQrCodeInfo: () => ipcRenderer.invoke('create-qrcode'),
})