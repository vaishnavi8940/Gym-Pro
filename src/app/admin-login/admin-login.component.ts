import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

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

   this.api.post("api/authentications/admin/login", data).subscribe((result:any)=>{
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
       localStorage.setItem("usertype", "admin");
       localStorage.setItem("id", result[0].id);
       localStorage.setItem("username", result[0].username);
       localStorage.setItem("name", result[0].name);
       this.router.navigate(["/admin/dashboard"]);
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
