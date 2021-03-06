import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateStaffComponent } from '../create-staff/create-staff.component';
import { UserData } from '../users';
import { StaffServiceService } from '../staff-service.service';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateStaffComponent } from '../update-staff/update-staff.component';

@Component({
  selector: 'app-stafftable',
  templateUrl: './stafftable.component.html',
  styleUrls: ['./stafftable.component.css']
})
export class StafftableComponent implements OnInit {

  obj: any;
  updobj!: {};
  datas: UserData[] = [];
  test: any


  ngOnInit(): void {
    this.staff.getStaff().subscribe(x => this.test = x)

  }

  constructor(public dialog: MatDialog, private staff: StaffServiceService) { }
  //insert dialogue
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateStaffComponent, {
      width: '550px',
      data: {}


    });

    dialogRef.afterClosed().subscribe(result => {//insert beres
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

        this.staff.postStaff(this.obj).subscribe(x => location.reload())
      }
    });
  }

  id: number

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '550px',
      data: { id: id }


    });

    dialogRef.afterClosed().subscribe(result => {//insert beres
      if (result) {
        this.id = result.id

        this.staff.delStaff(this.id).subscribe(x => location.reload())
      }
    });
  }


  //update dialogue
  openDialogUpd(id: number): void {
    let tester: any
    this.staff.getStaffbyID(id).subscribe(x => {
      tester = x
      this.obj = { //obj dummy bwt value ke form
        id: tester['id'],
        Title: tester['title'],
        FirstName: tester['firstName'],
        LastName: tester['lastName'],
        Role: tester['role'],
        Email: tester['email'],
        Password: tester['password'],
        ConfirmPassword: tester['confirmPassword']
      }


      const dialogRef = this.dialog.open(UpdateStaffComponent, {
        width: '550px',
        data: this.obj //data 2 arah


      });

      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          console.log(result) //update didalam
          this.updobj = { //ini gk perlu karna obj udh 2 arah transfernya
            id: result.id,
            Title: result.Title,
            FirstName: result.FirstName,
            LastName: result.LastName,
            Role: result.Role,
            Email: result.Email,
            Password: result.Password,
            ConfirmPassword: result.ConfirmPassword
          }
          this.staff.putStaff(this.updobj, result.id).subscribe(x => location.reload()
          )//ini udh bs


          // }
        }
      });
    })


  }


}
