import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  endpoint: string = 'https://nelsonfinalassignment1.herokuapp.com/api/payment'

  getPayment() {
    const api = `${this.endpoint}`
    return this.http.get(api)
  }

  getPaymentbyID(id: number): Observable<any[]> {
    const api = `${this.endpoint}/${id}`
    return this.http.get<any[]>(api)
  }

  postPayment(Payment: any) {
    const api = `${this.endpoint}`
    return this.http.post(api, Payment)
  }

  putPayment(Payment: any, id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.put(api, Payment)
  }

  delPayment(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api)
  }


  constructor(private http: HttpClient) { }
}
