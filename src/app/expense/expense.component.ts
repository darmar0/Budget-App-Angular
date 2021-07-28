import { Router } from '@angular/router';
import { BudgetService } from './../budget.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  outcomeCat : any
 

constructor(private service : BudgetService, private router: Router) { }

onSubmit(amount: any, desc: string){
this.service.newTransaction(amount,desc);
if(amount && desc){
  this.router.navigate([""])
}
}


ngOnInit(): void {
  this.service.getOutcome().subscribe((res:any)=>{
    this.outcomeCat = res
    
  })
 
}

}
