import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cvvValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cvvPattern = /^[0-9]{3,4}$/;

    if (!cvvPattern.test(control.value)) {
      return { 'invalidCVV': { value: control.value } };
    }

    return null;
  };
}


export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(control.value)) {
      return { 'invalidEmail': { value: control.value } };
    }

    return null;
  };
}


export function cardIdValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cardIdPattern = /^[0-9]{6}$/; // Adjust the pattern as needed

    if (!cardIdPattern.test(control.value)) {
      return { 'invalidCardId': { value: control.value } };
    }

    return null;
  };
}

export function bankCardNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cardNumberPattern = /^[0-9]{16}$/; // Adjust the pattern as needed

    if (!cardNumberPattern.test(control.value)) {
      return { 'invalidCardNumber': { value: control.value } };
    }

    return null;
  };
}


export function cardExpirationDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const enteredDate = control.value;

    if (!enteredDate || typeof enteredDate !== 'string') {
      return { 'invalidExpirationDate': { value: control.value } };
    }

    const [enteredMonth, enteredYear] = enteredDate.split('/').map(Number);

    if (
      isNaN(enteredMonth) ||
      isNaN(enteredYear) ||
      enteredMonth < 1 ||
      enteredMonth > 12 ||
      enteredYear < 0 ||
      enteredYear > 99
    ) {
      return { 'invalidExpirationDate': { value: control.value } };
    }

    const expirationDate = new Date(2000 + enteredYear, enteredMonth - 1);

    if (expirationDate <= currentDate) {
      return { 'expiredCard': { value: control.value } };
    }

    return null;
  };
}
