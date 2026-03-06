import { Pipe, PipeTransform } from '@angular/core';
import { NumberToWordsOptions, numberToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'numberToWordsPL',
  standalone: true,
  pure: true,
})
export class NumberToWordsPLPipe implements PipeTransform {
  /**
   * Converts a number into its Polish word form.
   * Handles integers, fractions, and combinations, with support for informal forms and custom options.
   *
   * @param value The number to convert (e.g., 123, 0.5, 2.25, -1).
   * @param options Optional settings to control formatting behavior.
   * @returns The number expressed in Polish words.
   */
  transform(value: number, options?: NumberToWordsOptions): string {
    return numberToWordsPL(value, options);
  }
}
