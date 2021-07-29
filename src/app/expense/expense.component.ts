import { Router } from '@angular/router';
import { BudgetService } from './../budget.service';
import { Component, Input, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, DoCheck {

  outcomeCat : any
 

constructor(private service : BudgetService, private router: Router) { }

onSubmit(amount: any, desc: string){
  if(amount && desc){

  
this.service.newTransaction(amount,desc);

  this.router.navigate([""])
 }
}


ngOnInit(): void {
  this.service.getOutcome().subscribe((res:any)=>{
    this.outcomeCat = res
    
  })
 
}
ngDoCheck(){this.outcomeCat}
}
