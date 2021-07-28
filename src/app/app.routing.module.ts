import { AuthGuard } from './auth-guard.service';
import { MoreComponent } from './more/more.component';
import { StatsComponent } from './stats/stats.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { AuthComponent } from './auth/auth.component';
import { WalletComponent } from './wallet/wallet.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes : Routes = [
    {path: "", component: WalletComponent,  canActivate: [AuthGuard], },
    {path: "auth", component: AuthComponent},
    {path: "income", component: IncomeComponent},
    {path: "expense", component: ExpenseComponent},
    {path: "stats", component: StatsComponent},
    {path: "more", component: MoreComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }