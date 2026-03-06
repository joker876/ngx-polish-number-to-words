import { Pipe, PipeTransform } from '@angular/core';
import {
  DecimalFractionToWordsOptions,
  decimalFractionToWordsPL,
} from 'polish-number-to-words';

@Pipe({
  name: 'decimalFractionToWordsPL',
  standalone: true,
  pure: true,
})
export class DecimalFractionToWordsPLPipe implements PipeTransform {
  /**
   * Converts a decimal fraction into Polish words.
   * Can return either a full fractional phrase (e.g., "dwanaście tysięcznych") or a digit-by-digit form (e.g., "przecinek dwanaście"). Ignores the minus sign.
   *
   * @param value A non-integer number between 0 and 1 (e.g., 0.25, 0.125, etc.).
   * @param options Optional settings to customize the output style.
   * @throws Will throw if an integer is provided instead of a decimal fraction.
   * @returns A string representing the decimal fraction in Polish, ignoring the minus.
   */
  transform(value: number, options?: DecimalFractionToWordsOptions): string {
    return decimalFractionToWordsPL(value, options);
  }
}
