import { BrowserWindow, Menu, MenuItem } from 'electron';
import { MenuItemOptions } from './types';

export const setAppMenu = (menuItemsInfo: MenuItemOptions[], window: BrowserWindow) => {
    const menuItems = menuItemsInfo.map(({ label, click }) => new MenuItem({ label, click }));
    const menu = Menu.buildFromTemplate(menuItems);
    window.setMenu(menu);
};
