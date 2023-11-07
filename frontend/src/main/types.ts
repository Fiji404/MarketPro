import { BrowserWindow, KeyboardEvent, MenuItem } from 'electron';

export interface MenuItemOptions {
    label: string;
    click(menuItem: MenuItem, browserWindow: BrowserWindow | undefined, event: KeyboardEvent): void;
}
