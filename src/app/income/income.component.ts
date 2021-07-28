import { Router } from '@angular/router';
import { BudgetService } from './../budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

incomeCat : any


  constructor(private service : BudgetService, private router: Router) { }

submit(amount:any, desc: string){
  console.log(amount, desc)
  this.service.newTransaction(amount,desc)
  if(amount && desc){
    this.router.navigate([""])
  }
  
}

  ngOnInit(): void {
    this.service.getIncome().subscribe((res:any)=>{
      this.incomeCat = res
      
    })
   
  }

}
