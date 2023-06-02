import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent implements OnInit{
  formdata:any;
  payModes:any;
  id:any;

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
     this.load();
  }

 load(){
  this.id = null;
  this.formdata = new FormGroup({
    id:new FormControl(0),
    name: new FormControl("", Validators.compose([Validators.required]))
   })

  this.api.get("api/paymentmodes").subscribe((result:any)=>{
      this.payModes = result;
  })
 }

  Save(data:any){
    if(this.id == null){
      this.api.post("api/paymentmodes", data).subscribe((result:any)=>{
        this.load();
        Swal.fire({
          icon: 'success',
          title: 'Successfully Submitted',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    else{
      this.api.put("api/paymentmodes/" +this.id , data).subscribe((result:any)=>{
        this.load();
        Swal.fire({
          icon: 'success',
          title: 'Successfully Updated',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  }

  Delete(id:number){
   // alert(id);
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.api.delete("api/paymentmodes/" +id).subscribe((result:any)=>{
        this.load();
      });

    }
  })
    // this.api.delete("api/admins/" +id).subscribe((result:any)=>{
    //     this.load();
    // });
  }

  Edit(id:number){
    this.id=id;
    if(this.id != null){
      this.api.get("api/paymentmodes/" +this.id).subscribe((result:any)=>{
        // console.log(result);
        this.formdata.patchValue({
          id:this.id,
          name:result.name
        });
      })
     }
  }

}
