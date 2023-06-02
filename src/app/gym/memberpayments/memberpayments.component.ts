import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memberpayments',
  templateUrl: './memberpayments.component.html',
  styleUrls: ['./memberpayments.component.css']
})
export class MemberpaymentsComponent implements OnInit {
  formdata:any;
  id:any;
  gym:any;
  member:any;
  memberplan:any;
  memberpayments:any;
  paymentdate: Date | undefined;



  constructor(private api:ApiService,private router:Router){

  }

  ngOnInit(): void {
    this.api.get("api/gyms").subscribe((result:any)=>{
      this.gym = result;
      })
    this.api.get("api/memberplans").subscribe((result:any)=>{
        this.memberplan = result;
      })
    this.api.get("api/members").subscribe((result:any)=>{
      this.member = result;
      })
   this.load();
  }

  load(){
    this.id = null;
    this.formdata = new FormGroup({
      id:new FormControl(0),
      gymid:new FormControl(0, Validators.compose([Validators.required])),
      memberid: new FormControl(0, Validators.compose([Validators.required])),
      memberplanid: new FormControl(0, Validators.compose([Validators.required])),
      amount: new FormControl("", Validators.compose([Validators.required])),
      paymentdate: new FormControl(new Date()),
      paid: new FormControl("", Validators.compose([Validators.required]))
     })
     this.api.get("api/memberpayments").subscribe((result:any)=>{
      this.memberpayments = result;
  })

   }
   Save(data:any){
    if(this.id == null){
      this.api.post("api/memberpayments", data).subscribe((result:any)=>{
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
      this.api.put("api/memberpayments/" +this.id , data).subscribe((result:any)=>{
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
       this.api.delete("api/memberpayments/" +id).subscribe((result:any)=>{
         this.load();
       });
     }
   })

     // this.api.delete("api/memberpayments/" +id).subscribe((result:any)=>{
     //     this.load();
     // });
   }

   Edit(id:number){
     this.id=id;
     if(this.id != null){
       this.api.get("api/memberpayments/" +this.id).subscribe((result:any)=>{
         // console.log(result);
         this.formdata.patchValue({
           id:this.id,
           gymid:result.gymid,
           memberid:result.memberid,
           memberplanid:result.memberplanid,
           amount:result.amount,
           paid:result.paid,
           paymentdate:result.paymentdate
         });
       })
      }
   }

}
