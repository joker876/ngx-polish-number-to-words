import { Pipe, PipeTransform } from '@angular/core';
import { currencyToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'currencyToWordsPL',
  standalone: true,
})
export class CurrencyToWordsPLPipe implements PipeTransform {
  transform(
    value: number,
    mainCurrencyWords: [string, string, string] = ['złoty', 'złote', 'złotych'],
    subCurrencyWords: [string, string, string] = ['grosz', 'grosze', 'groszy']
  ): string {
    return currencyToWordsPL(value, mainCurrencyWords, subCurrencyWords);
  }
}
