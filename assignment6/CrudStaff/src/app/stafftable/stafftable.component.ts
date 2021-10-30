import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateStaffComponent } from '../create-staff/create-staff.component';
import { UserData } from '../users';

@Component({
  selector: 'app-stafftable',
  templateUrl: './stafftable.component.html',
  styleUrls: ['./stafftable.component.css']
})
export class StafftableComponent {

  obj!: {};
  datas: UserData[] = [];


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStaffComponent, {
      width: '550px',
      data: { id: "asd" }


    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obj = {
          Title: result.Title,
          FirstName: result.FirstName,
          LastName: result.LastName,
          Role: result.Role,
          Email: result.Email,
          Password: result.Password,
          ConfirmPassword: result.ConfirmPassword
        }

        console.log(this.obj)

      }
    });
  }



}
