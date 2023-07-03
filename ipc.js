let {
    ipcRenderer
} = require('electron');

let fs = require('fs');

ipcRenderer.on("LoadNewRom", () => {
    pcb.selectROM();
});

ipcRenderer.on("LoadNewFlash", () => {
    pcb.selectFlashMemory();
});

ipcRenderer.on("LoadSaveState", () => {
    cpu.selectSaveState();
});

ipcRenderer.on("ExportSaveState", () => {
    cpu.exportSaveState();
});

ipcRenderer.on("StopCPU", () => {
    pcb.powerOff();
});

ipcRenderer.on("PauseCPU", () => {
    if(cpu.paused) {
        cpu.resumeClock()
    } else {
        cpu.pauseClock();
    }
});

ipcRenderer.on("StartCPU", () => {
    pcb.powerOn();
});
