import { Pipe, PipeTransform } from '@angular/core';
import { BudgetAgency } from '../model/budget-agency';

@Pipe({
    name: 'bidgetAgencyPfyFilter',
})

//  filters the items array to only include objects whose pfyFunded property is greater than 0
export class BudgetAgencyPfyFilter implements PipeTransform {

    constructor() { }

    transform(items: BudgetAgency[], hasValues: boolean): any[] {
        if (!items) {
            return [];
        }

        if (hasValues) {
            return items.filter((i) => i.pfyFunded > 0);
        } else {
            return items;
        }

    }
}

//e.g.:
// <ng-container *ngFor="let agency of budgetAgencies | bidgetAgencyPfyFilter: true">
//   <div>{{ agency.name }} - {{ agency.pfyFunded }}</div>
// </ng-container>