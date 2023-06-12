
/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
*/
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
  // column for data with multiple column to select a sorting basement
  transform(value: any[], order = '', column: string = ''): any[] {
    // no array
    if (!value || order === '' || !order) {
      return value;
    }
    // array with only one item
    if (value.length <= 1) {
      return value;
    }
    // sort 1d array
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort()
      }
      else {
        return value.sort().reverse();
      }
    }
    return orderBy(value, [column], [order]);
  }
}