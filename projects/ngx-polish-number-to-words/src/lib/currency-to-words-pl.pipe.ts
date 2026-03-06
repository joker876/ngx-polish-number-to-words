import { Pipe, PipeTransform } from '@angular/core';
import { currencyToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'currencyToWordsPL',
  standalone: true,
  pure: true,
})
export class CurrencyToWordsPLPipe implements PipeTransform {
  /**
   * Converts a number representing a monetary value into Polish words,
   * using custom word forms for the main and sub currency units.
   *
   * @param num The monetary value to convert (e.g., 12.50, -0.99).
   * @param mainCurrencyWords Word forms for the main currency in [singular, 2–4, 5+] form (e.g., ["złoty", "złote", "złotych"] - this is the default value).
   * @param subCurrencyWords Word forms for the subcurrency in [singular, 2–4, 5+] form (e.g., ["grosz", "grosze", "groszy"] - this is the default value).
   * @returns The full expression of the amount in Polish.
   */
  transform(
    value: number,
    mainCurrencyWords: [string, string, string] = ['złoty', 'złote', 'złotych'],
    subCurrencyWords: [string, string, string] = ['grosz', 'grosze', 'groszy'],
  ): string {
    return currencyToWordsPL(value, mainCurrencyWords, subCurrencyWords);
  }
}
