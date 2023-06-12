import { Pipe, PipeTransform } from '@angular/core';
import { PanelMessage } from '../model/panel-message';

@Pipe({
    name: 'filterMessages'
})

// filters an array of PanelMessage objects based on a specific type and fieldName.
// e.g.: '<div *ngFor="let message of panelMessages | filterMessages:'success':'status'">', 'success' is value, 'status' is fileld name
export class FilterMessagesPipe implements PipeTransform {

    constructor() { }

    transform(items: PanelMessage[], type: string, fieldName: string): PanelMessage[] {
        if (!items) {
            return [];
        }

        if (!type) {
            return items;
        }

        return items.filter(item => {
            return (item[fieldName] == type);
        });
    }
}