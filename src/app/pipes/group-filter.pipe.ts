import { Pipe, PipeTransform } from '@angular/core';
import { FilterReportsPipe } from './report-filter.pipe';

@Pipe({
    name: 'filterGroups'
})

// searches through the nested arrays to find the groups whose child objects (reports) contain the query string
export class FilterGroupsPipe implements PipeTransform {

    constructor(private reportsFilter: FilterReportsPipe) { }

    transform(items: any[], query: string): any[] {
        if (!items) {
            return [];
        }

        if (!query || query == '') {
            return items;
        }

        return items.filter(item => this.reportsFilter.transform(item.reports, query).length > 0);
    }
}

//e.g.:
// <div *ngFor="let group of groups | filterGroups:query">
//   <h2>{{ group.name }}</h2>
//   <div *ngFor="let report of group.reports | filterReports:query">
//     <p>{{ report.title }}</p>
//   </div>
// </div>