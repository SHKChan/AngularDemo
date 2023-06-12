import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPbiFilters'
})

// return child class type name who implement the interface(abstract class)
export class FilterPbiFiltersipe implements PipeTransform {

    constructor() { }

    transform(items: any[], query: string): any[] {
        if (!items) {
            return [];
        }

        if (!query || query == '') {
            return items;
        }

        return items.filter(item => item.implementationType.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
}