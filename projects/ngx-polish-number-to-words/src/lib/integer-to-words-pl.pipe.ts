import { Pipe, PipeTransform } from '@angular/core';
import {
  IntegerToWordsOptions,
  integerToWordsPL,
} from 'polish-number-to-words';

@Pipe({
  name: 'integerToWordsPL',
  standalone: true,
  pure: true,
})
export class IntegerToWordsPLPipe implements PipeTransform {
  /**
   * Converts an integer into its Polish word form.
   * Handles numbers from negative billions to large scale names like "kwintylion".
   *
   * @param value The integer to convert.
   * @param options Optional formatting behavior.
   * @returns The number written out in Polish.
   */
  transform(value: number, options?: IntegerToWordsOptions): string {
    return integerToWordsPL(value, options);
  }
}
