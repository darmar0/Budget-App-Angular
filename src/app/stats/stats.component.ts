import { BudgetService } from './../budget.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  @ViewChild('widgetsContent') widgetsContent: any = ElementRef;

  stats: any = {};
  cat: any = [];
  month: any = new Date().getMonth() + 1;
  year: any = new Date().getFullYear();
  monthNames: any = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor(private service: BudgetService) {}

  get(key: string) {
    let jwt = localStorage.getItem(key);
    if (jwt) {
      return JSON.parse(jwt).token;
    }
  }

  monthForward() {
    let month = new Date().getMonth() + 1;
    let forward = this.month;

    this.service
      .fetch(forward <= month ? forward + 1 : this.month)
      .subscribe((res: any) => {
        this.stats = res;
        this.cat = res.by_category;
      });
    this.month = this.month + 1;
  }

  monthBack() {
    this.service.fetch((this.month -= 1)).subscribe((res: any) => {
      this.stats = res;
      this.cat = res.by_category;
    });
  }
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

  ngOnInit() {
    this.service.fetch(this.month).subscribe((res: any) => {
      this.stats = res;
      this.cat = res.by_category;
    });
  }
}
