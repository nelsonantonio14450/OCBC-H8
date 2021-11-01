import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../users';
import { StaffServiceService } from '../staff-service.service';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-staffform',
  templateUrl: './update-staffform.component.html',
  styleUrls: ['./update-staffform.component.css']
})
export class UpdateStaffformComponent implements OnInit {
  id: number
  test: any
  obj: any


  title: string
  firstName: string
  lastName: string
  role: String
  email: string
  password: string
  confirmPassword: string


  constructor(private actRoute: ActivatedRoute, private staff: StaffServiceService) {
    this.id = this.actRoute.snapshot.params.id;


  }


  ngOnInit(): void {
    this.staff.getStaffbyID(this.id).subscribe(x => {
      this.test = x;
      this.obj = this.test
    })

    this.title = this.obj["title"]

    console.log(this.obj)






  }

  update() {
    this.obj = {
      id: this.id,
      Title: this.title,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Role: this.Role,
      Email: this.Email,
      Password: this.Password,
      ConfirmPassword: this.ConfirmPassword

    }

    this.staff.putStaff(this.obj, this.id).subscribe(x => { console.log('asd') })
  }

  //================================================================



  Title = new FormControl('', [Validators.required]);
  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  Role = new FormControl('', [Validators.required]);
  Email = new FormControl('', [Validators.required, Validators.email]);
  Password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  ConfirmPassword = new FormControl('', [Validators.required],);



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



}
