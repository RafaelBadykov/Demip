const { app, BrowserWindow } = require('electron')
const path = require('path')
/* Конфигурация настольного приложения */
function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
    resizable: false
  })

  win.loadFile('dist/Demip/index.html')

  win.on('close', function(e) {
    const choice = require('electron').dialog.showMessageBoxSync(this,
      {
        type: 'question',
        buttons: ['Да', 'Нет'],
        title: 'Подтверждение',
        message: 'Вы уверены, что хотите выйти из программы?'
      });
    if (choice === 1) {
      e.preventDefault();
    }
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
