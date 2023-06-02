import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   formdata:any;

   constructor(private api:ApiService, private router:Router){ }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username:new FormControl("", Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required]))
  });
  }

  login(data:any){
    console.log(data);

    this.api.post("api/authentications/gym/login", data).subscribe((result:any)=>{
      console.log(result);
      if(result.length == 0){
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        showConfirmButton: false,
        timer: 1000
      })
      }
      else{
        localStorage.setItem("usertype", "user");
        localStorage.setItem("id", result[0].id);
        localStorage.setItem("name", result[0].name);
        localStorage.setItem("city", result[0].city);
        localStorage.setItem("address", result[0].address);
        localStorage.setItem("mobileno", result[0].mobileno);
        localStorage.setItem("email", result[0].email);
        this.router.navigate(["/gyms/dashboard"]);
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 500
        })
      }
  });


}

}
