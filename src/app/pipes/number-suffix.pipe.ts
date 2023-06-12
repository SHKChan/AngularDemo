import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'numberSuffix'
})

// adds a suffix to a numeric value to represent larger units, to $1.5K
// acutally implement base on currency pipe
export class NumberSuffixPipe implements PipeTransform {

    constructor(private currencyPipe: CurrencyPipe) { }

    transform(value: number): string {

        if (value < 1000) {
            return this.currencyPipe.transform(value, 'USD', 'symbol', '1.0-0');
        }

        return this.currencyPipe.transform(+(value / 1000).toFixed(), "USD", "symbol", "1.0-0") + "K";

    }
}