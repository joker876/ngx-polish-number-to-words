import { Component, inject, input } from '@angular/core';
import { PLURALIZE_PL_WITH_NUMBERS_DEFAULT, PluralizePLPipe } from './pluralize-pl.pipe';

/**
 * Transforms a number into its correctly pluralized form of a noun in Polish.
 *
 * @param value The number (e.g., 1, 2, 5)
 * @param forms Three forms of the noun (singular, 2-4, 5+) as an array of strings or as a comma-separated string (e.g. `"kot,koty,kotów"` or `["kot", "koty", "kotów"]`)
 * @param withNumber Whether the number should be automatically added to the output string (no formatting)
 * @returns The correct noun form based on the value
 * @example ```html
 * <pl-plural [value]="5" forms="kot,koty,kotów" withNumber />
 * <!-- 5 kotów -->
 * ```
 */
@Component({
  selector: 'pl-plural',
  imports: [PluralizePLPipe],
  template: '{{ value() | pluralizePL:forms()[0]:forms()[1]:forms()[2]:withNumber() }}',
  styles: ':host { display: inline; }',
})
export class PluralizePlComponent {
  readonly value = input.required<number>();

  readonly forms = input.required<[string, string, string], [string, string, string] | string[] | string>({
    transform: v => {
      if (Array.isArray(v)) {
        if (v.length !== 3) {
          console.error(`PluralizePlComponent: [forms] array should be of length 3, got ${JSON.stringify(v)}`);
          return ['ERROR', 'ERROR', 'ERROR'];
        }
        return v as [string, string, string];
      }
      const match = v.match(/^([^,\n]*),([^,\n]*),([^,\n]*)$/);
      if (!match) {
        console.error(`PluralizePlComponent: [forms] input received a malformed value: \`${v}\``);
        return ['ERROR', 'ERROR', 'ERROR'];
      }
      const [_, form1, form234, form5] = match;
      return [form1, form234, form5];
    },
  });

  private readonly _defaultWithNumber = inject(PLURALIZE_PL_WITH_NUMBERS_DEFAULT);

  readonly withNumber = input<boolean, boolean | string | undefined | null>(this._defaultWithNumber, {
    transform: v => v == undefined || v === true || v === '' || v === 'true',
  });
}
