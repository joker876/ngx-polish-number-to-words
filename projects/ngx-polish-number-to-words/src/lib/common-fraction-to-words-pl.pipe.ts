import { Pipe, PipeTransform } from '@angular/core';
import { commonFractionToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'commonFractionToWordsPL',
  standalone: true,
})
export class CommonFractionToWordsPLPipe implements PipeTransform {
  transform(numerator: number, denominator: number): string {
    return commonFractionToWordsPL(numerator, denominator);
  }
}
