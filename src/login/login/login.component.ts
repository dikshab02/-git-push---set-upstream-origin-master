import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';
import { UserLoggedInService } from 'src/app/user-logged-in.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  hide = true;

  constructor(private crudHttpService: CrudHttpService,
              private router: Router,
              public userLoggedInService: UserLoggedInService) {
    this.user = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email])
      //phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      });
   }

  ngOnInit(): void {
    console.log('checking if already logged in')
    if(this.crudHttpService.isLoggedin()){
     this.router.navigate(['/']);
    //  this.userLoggedInService.flag = false;
    }
  }

  login(){

    this.crudHttpService.loginDetails(this.user.value).subscribe(res => {
      console.log("login details",res)

      if(res.length === 0){
          console.log("email or password is invalid", res.length)
      //    this.userLoggedInService.flag = false;
      }
      else{
        // this.userLoggedInService.flag = true;
        console.log(res.length)
        console.log("login is successful")
        this.crudHttpService.storeUserData = res[0];
        console.log(" this.crudHttpService.storeUserData-> ", this.crudHttpService.storeUserData);
        this.router.navigate(['/']);
        this.crudHttpService.saveToStorage(res[0]);
      }
    })
  }

}
