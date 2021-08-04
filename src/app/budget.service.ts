import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  data: string;
  apiDg: string = 'https://budgetapp.digitalcube.rs/api/';

  constructor(private http: HttpClient) {}

  get(key: string) {
    let jwt = localStorage.getItem(key);
    if (jwt) {
      return JSON.parse(jwt).token;
    }
  }
  getHistory() {
    const tk = this.get('user');
    return this.http.get(this.apiDg + 'transactions?', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }),
    });
  }
  getOutcome() {
    const tk = this.get('user');
    return this.http.get(
      this.apiDg + 'transactions/categories?category_type=outcome',
      { headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }) }
    );
  }
  getIncome() {
    const tk = this.get('user');
    return this.http.get(
      this.apiDg + 'transactions/categories?category_type=income',
      { headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }) }
    );
  }
  newTransaction(amount: any, description: string) {
    const tk = this.get('user');
    let payload = {
      amount: parseInt(amount),
      category: this.data,
      currency: 'RSD',
      description: description,
    };
    return this.http
      .post(this.apiDg + 'transactions', payload, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }),
      })
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
  sharedData(cat: string) {
    this.data = cat;
  }
  sharedToData() {
    return this.data;
  }
  fetch(month: any) {
    const tk = this.get('user');
    return this.http.get(
      this.apiDg + 'transactions/statistics?year=2021&month=' + month,
      { headers: new HttpHeaders({ Authorization: 'Bearer ' + tk }) }
    );
  }
}
