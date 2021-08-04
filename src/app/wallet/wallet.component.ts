import { BudgetService } from './../budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  history: any;
  outcome: any;
  income: any;
  transactions: any = {};
  constructor(private service: BudgetService) {}

  ngOnInit(): void {
    this.service.getHistory().subscribe((res: any) => {
      this.history = res.transactions;
      this.transactions = res.summary;
    });

    this.service.getOutcome().subscribe((res: any) => {
      this.outcome = res;
    });
    this.service.getIncome().subscribe((res: any) => {
      this.income = res;
    });
  }
}
