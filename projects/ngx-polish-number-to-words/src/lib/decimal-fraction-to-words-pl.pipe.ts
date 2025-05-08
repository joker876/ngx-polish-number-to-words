import { Pipe, PipeTransform } from '@angular/core';
import {
  DecimalFractionToWordsOptions,
  decimalFractionToWordsPL,
} from 'polish-number-to-words';

@Pipe({
  name: 'decimalFractionToWordsPL',
  standalone: true,
})
export class DecimalFractionToWordsPLPipe implements PipeTransform {
  transform(value: number, options?: DecimalFractionToWordsOptions): string {
    return decimalFractionToWordsPL(value, options);
  }
}
