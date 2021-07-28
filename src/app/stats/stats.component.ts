
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  @ViewChild('widgetsContent') widgetsContent: any = ElementRef;

stats: any = {}
cat: any = []
month : any = new Date().getMonth()+1
year : any = new Date().getFullYear();
monthNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private http: HttpClient) { }

  get(key: string) {
    let jwt = localStorage.getItem(key)
    if(jwt){
     return  JSON.parse(jwt).token
    } 
    }
    fetch(month:any){
      const tk = this.get("user")
      return this.http.get('https://budgetapp.digitalcube.rs/api/transactions/statistics?year=2021&month='+month,{headers: new HttpHeaders({'Authorization': 'Bearer ' + tk})}).subscribe((res:any)=>{
        this.stats = res
        this.cat = res.by_category.slice(0,res.by_category.length-1)
        
      })
    }

    monthForward(){
      let month = new Date().getMonth()+1
      let forward = this.month
      
      this.fetch(forward <= month? forward+1: this.month)
      this.month = this.month+1
    }

    monthBack(){
      this.fetch(this.month-=1)
    }
    scrollLeft(){
      this.widgetsContent.nativeElement.scrollLeft -= 150;
    }
  
    scrollRight(){
      this.widgetsContent.nativeElement.scrollLeft += 150;
    }
  

  ngOnInit() {
   
    this.fetch(this.month)

   }

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
    
   
 
