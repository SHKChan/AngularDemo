import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

// for each item in the array, the pipe loops through each property specified in the properties array and uses the resolve method to get the value of that property from the item.
//  if the query parameter is a string, it checks whether the value contains the query string. If the query parameter is a boolean, it checks whether the value is equal to the query boolean.
export class FilterPipe implements PipeTransform {

    constructor() { }

    resolve(path, obj) {
        return path.split('.').reduce(
            function (prev, curr) {
                return prev ? prev[curr] : null
            },
            obj || self
        )
    }

    transform(items: any[], query: string | boolean, property?: string, properties?: string[]): any[] {
        if (!items) {
            return [];
        }

        if (typeof query === "object") {
            return items;
        };

        if (typeof query === 'string' && (query == '' || !query)) {
            return items;
        }

        if (typeof query === 'boolean' && query === null) {
            return items;
        }

        if ((!property || property == '') && !properties) {
            return items;
        }


        if (property) {
            properties.length = 0;
            properties.push(property);
        }

        return items.filter((item) => {
            let val = null;
            for (let i: number = 0; i < properties.length; i++) {
                val = this.resolve(properties[i], item)
                if (val !== null) {
                    break;
                }
            }
            if (typeof query === 'string') {
                return (val) ? (val.toLowerCase().indexOf(query.toLowerCase()) > -1) : false;

            } else {
                return (val !== null) ? (val === query) ? true : false : false;
            }
        })

    }
}

// e.g.:
// <input type="text" [(ngModel)]="searchTerm">
// <ng-container *ngFor="let book of books | filterPipe: searchTerm: 'title'">
//   <div>{{ book.title }} by {{ book.author }}</div>
// </ng-container>