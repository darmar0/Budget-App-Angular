import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
walletG: string = "../assets/icons/greenAccWallet.png"
wallet: string = "../assets/icons/AccWallet.png"
statsG: string = "../assets/icons/greenStats.png"
stats: string = "../assets/icons/query_stats_black_24dp.png"
moreG: string = "../assets/icons/greenMore.png"
more: string = "../assets/icons/menu_black_24dp.png"

  constructor() { }

  ngOnInit(): void {
  }

}
