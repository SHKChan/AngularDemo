import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterReports'
})

// used to filter an array of items based on a provided query string.
// e.g.: '<li *ngFor="let item of items | filterReports: query">{{ item.name }}</li>'
export class FilterReportsPipe implements PipeTransform {

    constructor() { }

    transform(items: any[], query: string): any[] {
        if (!items) { // if input is falsy or empty
            return [];
        }
        if (!query || query == '') {
            return items;
        }
        // filters each item in the array based on whether its name property *contains* the query string.
        return items.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
}