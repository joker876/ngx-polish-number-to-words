import { Pipe, PipeTransform } from '@angular/core';
import { pluralizePl } from 'polish-number-to-words';

@Pipe({
  name: 'pluralizePL',
  standalone: true,
})
export class PluralizePLPipe implements PipeTransform {
  /**
   * Transforms a number into its correctly pluralized form of a noun in Polish.
   *
   * @param value The number (e.g., 1, 2, 5)
   * @param singular Form for 1 (e.g., "kot")
   * @param plural234 Form for 2–4 (e.g., "koty")
   * @param plural5 Form for 5+ (e.g., "kotów")
   * @returns The correct noun form based on the value
   */
  transform<T>(value: number, singular: T, plural234: T, plural5: T): T {
    return pluralizePl(value, singular, plural234, plural5);
  }
}
