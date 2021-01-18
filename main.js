// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // 启用node
      nodeIntegration:true,
      // 允许渲染进程通过remote调用
      enableRemoteModule: true
    }
  })

  mainWindow.loadFile('index.html')

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
}
// 生命周期 on ready
app.whenReady().then(() => {
  createWindow()
  // 引入菜单配置
  require('./main/menu.js')
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  //注册全局快捷键
  globalShortcut.register('ctrl+e',function(){
    // 业务逻辑
    console.log('ctrl+e registed');
  })

  //检测快捷键是否注册功能
  console.log(globalShortcut.isRegistered('ctrl+e'));

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

