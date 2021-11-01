import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  endpoint: string = 'http://localhost:4000/users'

  getStaff() {
    const api = `${this.endpoint}`
    return this.http.get(api)
  }

  getStaffbyID(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.get(api)
  }

  postStaff(staff: any) {
    const api = `${this.endpoint}`
    return this.http.post(api, staff)
  }

  putStaff(staff: any, id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.put(api, staff)
  }

  delStaff(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api)
  }


  constructor(private http: HttpClient) { }
}
