import { Pipe, PipeTransform } from '@angular/core';
import { commonFractionToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'commonFractionToWordsPL',
  standalone: true,
  pure: true,
})
export class CommonFractionToWordsPLPipe implements PipeTransform {
  /**
   * Converts a common fraction (numerator/denominator) to a Polish phrase.
   * Returns grammatically correct feminine ordinal forms for denominators.
   *
   * @param numerator The numerator (e.g., 3)
   * @param denominator The denominator (e.g., 4)
   * @returns Polish words for the fraction (e.g., "trzy czwarte")
   */
  transform(numerator: number, denominator: number): string {
    return commonFractionToWordsPL(numerator, denominator);
  }
}
