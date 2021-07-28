import { Subject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'


 
@Injectable({providedIn:"root"})
export class AuthService {

    user = new Subject<User>()
    token : any

constructor(private http: HttpClient){}

get(key: string) {
    let jwt = localStorage.getItem(key)
    if(jwt){
     return  JSON.parse(jwt).token
    } 
    }

createAccount(username: string, password: string){
return this.http.post("https://budgetapp.digitalcube.rs/api/tenants/4db498e8-c92c-4325-89a5-013110d3687f/users", {
    username: username,
    password: password
}
).pipe(tap(res=>{
    localStorage.setItem("user", JSON.stringify(res))
}))
}

login(username:string, password: string){
   return this.http.post("https://budgetapp.digitalcube.rs/api/tenants/4db498e8-c92c-4325-89a5-013110d3687f/sessions",{
        username: username,
        password: password
    }).pipe(tap(res=>{
        localStorage.setItem("user", JSON.stringify(res))
    }))
}
logout(){
    const tk = this.get("user")
    return this.http.delete("https://budgetapp.digitalcube.rs/api/tenants/4db498e8-c92c-4325-89a5-013110d3687f/sessions",
    {headers: new HttpHeaders({'Authorization': 'Bearer ' + tk})})
  
}

}