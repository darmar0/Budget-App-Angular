
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent   {
  @Input() history : any
  @Input() outcome : any
  @Input() income : any

 
 

}
