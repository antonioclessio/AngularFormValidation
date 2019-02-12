import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent> = null;
  let form: FormGroup = null;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    form = fixture.componentInstance.form;

    fixture.detectChanges();
  });

  it('The name should contains only letters', () => {
    let control = form.get('Name');
    control.setValue('Antônio Cléssio de Sousa Vieira');
    expect(control.valid).toBeTruthy();
  });

  it('The name shoud not contain numbers', () => {
    let control = form.get('Name');
    control.setValue('Antônio Cléssio de Sousa Vieira 123');
    expect(control.valid).toBeFalsy();
  });

  it('The e-mail must be a valid e-mail structure', () => {
    let control = form.get('Email');
    control.setValue('yourname@domain.com');
    expect(control.valid).toBeTruthy();
  });

  it('The e-mail should not be a valid.', () => {
    let control = form.get('Email');
    control.setValue('clessio');
    expect(control.invalid).toBeTruthy();
  });

  it('Card number must have 16 characters', () => {
    let control = form.get('CardNumber');
    control.setValue('1234567890123456');
    expect(control.valid).toBeTruthy();
  });

  it('The card number must not contain the length different of 16', () => {
    let control = form.get('CardNumber');
    control.setValue('123456789012346');
    expect(control.invalid).toBeTruthy();
  });

  it('The card number must contain only numbers', () => {
    let control = form.get('CardNumber');
    control.setValue('1234567890123456');
    expect(control.valid).toBeTruthy();
  });

  it('The Validation Month must contain only numbers', () => {
    let control = form.get('ValidMonth');
    control.setValue('12');
    expect(control.valid).toBeTruthy();
  });

  it('The Validation Month must not contain an invalid month', () => {
    let control = form.get('ValidMonth');
    control.setValue('13');
    expect(control.invalid).toBeTruthy();
  });

  it('The Validation Year must not contain a value less than the current year', () => {
    let control = form.get('ValidYear');
    control.setValue('2018');
    expect(control.invalid).toBeTruthy();
  });
});
