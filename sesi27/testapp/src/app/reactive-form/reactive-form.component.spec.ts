import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ReactiveFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render email and password input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const formElement = compiled.querySelector('#loginForm')
    const emailInputElement = formElement.querySelector('input[id="email"]')
    const passInputElement = formElement.querySelector('input[id="password"]')

    expect(emailInputElement).toBeTruthy();
    expect(passInputElement).toBeTruthy();
  })

  it('check initial value of login form', () => {
    const loginFormGroup = component.loginForm
    const loginFormValue = {
      email: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValue)
  })

  it('validate email input: `required, minLength(5), email.type`', () => {
    const email = component.email

    email?.setValue('')
    expect(email?.hasError('required')).toBeTruthy()

    email?.setValue('abcd')
    expect(email?.hasError('minlength')).toBeTruthy()

    email?.setValue('asdasdasd')
    expect(email?.hasError('email')).toBeTruthy()
  })

  it('invalid form when empty', () => {
    const email = component.email
    const password = component.password

    email?.setValue('')
    password?.setValue('')
    expect(component.loginForm.valid).toBeFalsy()
  })

  const validUser = {
    email: 'test@mail.com',
    password: '12345'
  }

  it('check form validity when validators are fulfiled', () => {
    const compiled = fixture.debugElement.nativeElement
    const emailInputElement = compiled.querySelector('input[id="email"]')
    const passInputElement = compiled.querySelector('input[id="password"]')

    if (!!emailInputElement && !!passInputElement) {
      emailInputElement.value = validUser.email
      emailInputElement.dispatchEvent(new Event('input'))

      passInputElement.value = validUser.password
      passInputElement.dispatchEvent(new Event('input'))

      fixture.detectChanges()
    }

    expect(component.loginForm.valid).toBeTruthy()
  })

  it('submitting form and set currentuser', () => {
    const compiled = fixture.debugElement.nativeElement
    const emailInputElement = compiled.querySelector('input[id="email"]')
    const passInputElement = compiled.querySelector('input[id="password"]')

    if (!!emailInputElement && !!passInputElement) {
      emailInputElement.value = validUser.email
      emailInputElement.dispatchEvent(new Event('input'))

      passInputElement.value = validUser.password
      passInputElement.dispatchEvent(new Event('input'))

      fixture.detectChanges()
    }

    const button = compiled.querySelector('button')
    button.click()

    expect(component.currentUser.email).toEqual(validUser.email)
    expect(component.currentUser.isLogin).toBeTruthy()
  })
});
