const { app, BrowserWindow, Menu, } = require('electron')
// In order to send clicks from the menu to a url we need to import shell from electron
const shell = require('electron').shell

function createWindow () {

  // Create the browser window.
  let win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  var menu = Menu.buildFromTemplate([
      {
          label: 'Useful Links',
          submenu: [
              {label: 'Eden Website',
                click() {
                  shell.openExternal('https://www.edenelectrolysis.com/')
                }
               },
              {
               label: 'Square Dashboard',
                click() {
                    shell.openExternal('https://squareup.com/dashboard/sales/reports/sales-summary')
                    }
                },
                {type: 'separator'},
              {
                label: 'Refresh',
                click() {
                  win.reload()
                }
              },
              {type: 'separator'},
              {
               label: 'Exit',
               click() {
                app.quit()
                }
              }
          ]
        }

  ])

 Menu.setApplicationMenu(menu);



  // and load the index.html of the app.
  win.loadFile('pay_calculator_2020.html')
}

app.whenReady().then(createWindow)
