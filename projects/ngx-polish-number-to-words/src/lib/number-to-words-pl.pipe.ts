import { Pipe, PipeTransform } from '@angular/core';
import { NumberToWordsOptions, numberToWordsPL } from 'polish-number-to-words';

@Pipe({
  name: 'numberToWordsPL',
  standalone: true,
})
export class NumberToWordsPLPipe implements PipeTransform {
  transform(value: number, options?: NumberToWordsOptions): string {
    return numberToWordsPL(value, options);
  }
}
