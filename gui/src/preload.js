// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('app', {
  quitApp: () => { ipcRenderer.invoke("quitApp") },
  executeScript: (type, track, bpm, offset) => {
    
    ipcRenderer.invoke("executeScript", type, track, bpm, offset) },
})
