import { BudgetService } from './../../budget.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: any;

  constructor(private service: BudgetService) {}

  checked(cat: string) {
    this.service.sharedData(cat);
  }

  ngOnInit(): void {}
}
