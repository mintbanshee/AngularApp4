import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const guestCapacityValidator = (maxGuests: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const guestEstimate = control.value;

      if (!guestEstimate) return null;

        return guestEstimate <= maxGuests ? null : { guestCapacityExceeded: true };
    };
};