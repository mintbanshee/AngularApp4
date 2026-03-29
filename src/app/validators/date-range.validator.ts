// validators/date-range.validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateRangeValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const start = control.get('startDate')?.value;
    const end = control.get('endDate')?.value;

    if (!start || !end) return null;

    const startDate = new Date(start);
    const endDate = new Date(end);

    return endDate >= startDate ? null : { invalidDateRange: true };
  };
};