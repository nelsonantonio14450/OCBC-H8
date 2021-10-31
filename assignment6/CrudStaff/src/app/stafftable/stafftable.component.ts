import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateStaffComponent } from '../create-staff/create-staff.component';
import { UpdateStaffComponent } from '../update-staff/update-staff.component';
import { UserData } from '../users';

@Component({
  selector: 'app-stafftable',
  templateUrl: './stafftable.component.html',
  styleUrls: ['./stafftable.component.css']
})
export class StafftableComponent {

  obj!: {};
  updobj!: {};
  datas: UserData[] = [];



  constructor(public dialog: MatDialog) { }
  //insert dialogue
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStaffComponent, {
      width: '550px',
      data: {}


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

  //update dialogue
  openDialogUpd(id: number): void {
    this.obj = { //obj dummy bwt value ke form
      id: id,
      Title: "asd",
      FirstName: "asd",
      LastName: "asd",
      Role: "asdasd",
      Email: "asd",
      Password: "asdasd",
      ConfirmPassword: "asdasd"
    }

    const dialogRef = this.dialog.open(UpdateStaffComponent, {
      width: '550px',
      data: this.obj //data 2 arah


    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result) { //ini gk perlu karna obj udh 2 arah transfernya
      //   this.updobj = {
      //     Title: result.Title,
      //     FirstName: result.FirstName,
      //     LastName: result.LastName,
      //     Role: result.Role,
      //     Email: result.Email,
      //     Password: result.Password,
      //     ConfirmPassword: result.ConfirmPassword
      //   }

      console.log(this.obj)

      // }
    });
  }


}
