import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '../users';


@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  Title = new FormControl('', [Validators.required]);
  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  Role = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  Password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  ConfirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);



  getErrorMessageTitle() {
    return this.Title.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageFN() {
    return this.FirstName.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageLN() {
    return this.LastName.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageRole() {
    return this.Role.hasError('required') ? 'you must enter a value' : ''
  }

  getErrorMessageEmail() {
    return this.Email.hasError('required') ? 'you must enter a value' :
      this.Email.hasError('email') ? 'Not a Valid Email' : ''
  }

  getErrorMessagePass() {
    return this.Password.hasError('required') ? 'you must enter a value' :
      this.Password.hasError('minlength') ? 'pass min 6' : ''
  }

  getErrorMessageConPass() {
    return this.ConfirmPassword.hasError('required') ? 'you must enter a value' : ''
  }



  constructor(
    public dialogRef: MatDialogRef<CreateStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) { }

  onNoClick(): void {
    this.dialogRef.close();

  }


  ngOnInit(): void {
  }

}

