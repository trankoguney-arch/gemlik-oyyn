const { app, BrowserWindow, Menu } = require('electron');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1280, height: 720, fullscreen: true, autoHideMenuBar: true, backgroundColor: '#000000', title: 'Gemlik Açık Dünya' });
  w.loadFile('index.html');
  w.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') w.setFullScreen(!w.isFullScreen());
    if (i.type === 'keyDown' && i.key === 'F4' && i.alt) app.quit();
  });
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
