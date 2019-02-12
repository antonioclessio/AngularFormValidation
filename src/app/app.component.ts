import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * The main reason here is to show how to do a complete form validation
 * using only the FormBuilder resources.
 * Do a max number of validations writting less code.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form Validation';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      Name: [null, [
        Validators.required, 
        Validators.pattern(/^([^0-9]*)$/)
      ]],
      Email: [null, [
        Validators.required, 
        Validators.email
      ]],
      CardNumber: [null, [
        Validators.required, 
        Validators.pattern(/^[0-9]*$/), 
        Validators.maxLength(16), 
        Validators.minLength(16)
      ]],
      ValidMonth: [null, [
        Validators.required, 
        Validators.pattern(/^[0-9]*$/), 
        Validators.maxLength(2), 
        Validators.minLength(2), 
        Validators.min(1), 
        Validators.max(12)
      ]],
      ValidYear: [null, [
        Validators.required, 
        Validators.pattern(/^[0-9]*$/), 
        Validators.maxLength(4), 
        Validators.minLength(4),
        Validators.min(new Date().getFullYear())
      ]],
      Cvv: [null, [
        Validators.required, 
        Validators.pattern(/^[0-9]*$/), 
        Validators.maxLength(3), 
        Validators.minLength(3)
      ]]
    });
  }

  /**
   * This method returns the class to show if the control is valid or not.
   * The validation was created based the bootstrap classes:
   * https://getbootstrap.com/docs/4.3/components/forms/#server-side
   * @param controlName Name of the control defined in the form object.
   */
  fieldValidation(controlName: string): any {
    return {
      'is-valid': this.form.get(controlName).touched && this.form.get(controlName).valid,
      'is-invalid': this.form.get(controlName).touched && this.form.get(controlName).invalid
    }
  }

  onSubmit(): void {

  }
}
