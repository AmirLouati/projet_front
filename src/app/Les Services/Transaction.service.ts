import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../les classes/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:8081/api/transactions';

  constructor(private http: HttpClient) { }

  addTransaction(bankTransaction: Transaction): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, bankTransaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateTransaction(id: number, bankTransaction: Transaction): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, bankTransaction);
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
