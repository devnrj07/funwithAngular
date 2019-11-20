import { AbstractControl } from "@angular/forms";

//method to match password & confirm password
export class PasswordValidator {
    static shouldMatch(control : AbstractControl) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const cnfpass= control.value;
           
            const pass= control.root.get('password'); // -> root->value
        if (pass) {
            const passValue = pass.value;
            if (passValue !== cnfpass || passValue === '') {
                return {
                    isError: true
                };
            }

    }
    return null;
  }
}
}