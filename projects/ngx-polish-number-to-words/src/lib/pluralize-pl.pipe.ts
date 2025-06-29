import { Pipe, PipeTransform } from '@angular/core';
import { pluralizePl } from 'polish-number-to-words';

/**
 * Transforms a number into its correctly pluralized form of a noun in Polish.
 *
 * @param value The number (e.g., 1, 2, 5)
 * @param singular Form for 1 (e.g., "kot")
 * @param plural234 Form for 2–4 (e.g., "koty")
 * @param plural5 Form for 5+ (e.g., "kotów")
 * @returns The correct noun form based on the value
 * @example {{ numberOfCats | pluralizePL: 'kot' : 'koty' : 'kotów' }}
 */
@Pipe({
  name: 'pluralizePL',
  standalone: true,
})
export class PluralizePLPipe implements PipeTransform {
  /**
   * Transforms a number into its correctly pluralized form of a noun in Polish. Overload that allows any type, not only strings.
   *
   * @param value The number (e.g., 1, 2, 5)
   * @param singular Form for 1 (e.g., "kot")
   * @param plural234 Form for 2–4 (e.g., "koty")
   * @param plural5 Form for 5+ (e.g., "kotów")
   * @returns The correct noun form based on the value
   * @example {{ numberOfCats | pluralizePL: 'kot' : 'koty' : 'kotów' }}
   */
  transform<T>(value: number, singular: T, plural234: T, plural5: T): T;

  /**
   * Transforms a number into its correctly pluralized form of a noun in Polish.
   *
   * @param value The number (e.g., 1, 2, 5)
   * @param singular Form for 1 (e.g., "kot")
   * @param plural234 Form for 2–4 (e.g., "koty")
   * @param plural5 Form for 5+ (e.g., "kotów")
   * @param withNumber Whether the number should be automatically added to the output string (no formatting)
   * @returns The correct noun form based on the value
   * @example {{ numberOfCats | pluralizePL: 'kot' : 'koty' : 'kotów' }}
   */
  transform(
    value: number,
    singular: string,
    plural234: string,
    plural5: string,
    withNumber?: boolean
  ): string;

  /**
   * Transforms a number into its correctly pluralized form of a noun in Polish. Overload that allows any type, not only strings.
   *
   * @param value The number (e.g., 1, 2, 5)
   * @param singular Form for 1 (e.g., "kot")
   * @param plural234 Form for 2–4 (e.g., "koty")
   * @param plural5 Form for 5+ (e.g., "kotów")
   * @returns The correct noun form based on the value
   * @example {{ numberOfCats | pluralizePL: 'kot' : 'koty' : 'kotów' }}
   */
  transform(value: number, singular: any, plural234: any, plural5: any): any;

  transform<T>(
    value: number,
    singular: T,
    plural234: T,
    plural5: T,
    withNumber: boolean = false
  ): T | string {
    const word = pluralizePl(value, singular, plural234, plural5);
    return withNumber ? `${value} ${word}` : word;
  }
}

const transform = new PluralizePLPipe().transform;

transform(1, 2, 3, 4);
transform<string | number>(1, '1', 3, 4);
