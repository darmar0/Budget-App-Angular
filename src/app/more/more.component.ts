import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor(private service: AuthService,private router: Router) { }
onLogOut(){
  this.service.logout()
  localStorage.removeItem("user");
  this.router.navigate(["/auth"])


}
  ngOnInit(): void {
  }

}
