import { CatSpentPipe } from './pipes/catspent.pipe';
import { DatePipe } from './pipes/date.pipe';
import { LoadingSpinner } from './shared/loading-spiner.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { LogoComponent } from './logo/logo.component';
import { HistoryComponent } from './wallet/history/history.component';
import { AccountComponent } from './account/account.component';
import { CatPipe } from './pipes/cat.pipe';
import { IncomeComponent } from './income/income.component';
import { CategoryComponent } from './shared/category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatsComponent } from './stats/stats.component';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    LogoComponent,
    HistoryComponent,
    AccountComponent,
    AuthComponent,
    LoadingSpinner,
    DatePipe,
    CatPipe,
    CatSpentPipe,
    IncomeComponent,
    CategoryComponent,
    ExpenseComponent,
    NavBarComponent,
    StatsComponent,
    MoreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
