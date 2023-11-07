import { app, shell, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
import { setAppMenu } from './setAppMenu';
import { MenuItemOptions } from './types';

let win: BrowserWindow;

const MENU_ITEMS: MenuItemOptions[] = [
    {
        label: 'Dodaj produkt',
        click() {
            win = createWindow({ width: 400, height: 600, title: 'Dodaj produkt' }, []);
            if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
                win.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/new-product`);
            } else {
                win.loadFile(join(__dirname, '../renderer/index.html'));
            }
        }
    }
];

const createWindow = (windowOptions: BrowserWindowConstructorOptions, menuItems?: MenuItemOptions[]) => {
    const mainWindow = new BrowserWindow({
        width: windowOptions.width || 900,
        height: windowOptions.height || 670,
        show: false,
        title: windowOptions.title,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false
        }
    });

    if (menuItems) setAppMenu(menuItems, mainWindow);

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.webContents.setWindowOpenHandler(details => {
        shell.openExternal(details.url);
        return { action: 'deny' };
    });

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
    } else {
        mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
    }
    return mainWindow;
};

app.whenReady().then(() => {
    electronApp.setAppUserModelId('com.electron');
    app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window);
    });

    createWindow({ title: 'Sklep' }, MENU_ITEMS);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow({});
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
