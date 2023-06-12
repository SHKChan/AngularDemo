import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})

// joint input string array with seperator
export class JoinPipe implements PipeTransform {

  transform(input: Array<any>, sep = ','): string {
    return input.join(sep);
  }

}
