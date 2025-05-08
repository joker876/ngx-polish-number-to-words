import { Pipe, PipeTransform } from '@angular/core';
import {
  IntegerToWordsOptions,
  integerToWordsPL,
} from 'polish-number-to-words';

@Pipe({
  name: 'integerToWordsPL',
  standalone: true,
})
export class IntegerToWordsPLPipe implements PipeTransform {
  transform(value: number, options?: IntegerToWordsOptions): string {
    return integerToWordsPL(value, options);
  }
}
