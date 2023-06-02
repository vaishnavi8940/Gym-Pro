import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-memberplans',
  templateUrl: './memberplans.component.html',
  styleUrls: ['./memberplans.component.css']
})
export class MemberplansComponent implements OnInit {
  formdata:any;
  id:any;
  gym:any;
  plan:any;
  member:any;
  memberplans:any;
  // startDate: Date | undefined;
  // endDate: Date | undefined;


  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.get("api/gyms").subscribe((result:any)=>{
      this.gym = result;
      })
    this.api.get("api/plans").subscribe((result:any)=>{
        this.plan = result;
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
      planid: new FormControl(0, Validators.compose([Validators.required])),
      startdate: new FormControl("", Validators.compose([Validators.required])),
      enddate: new FormControl("", Validators.compose([Validators.required])),
      price: new FormControl("", Validators.compose([Validators.required])),
      paid: new FormControl("", Validators.compose([Validators.required])),
     })
     this.api.get("api/memberplans").subscribe((result:any)=>{
      this.memberplans = result;
  })

   }
   Save(data:any){
    if(this.id == null){
      this.api.post("api/memberplans", data).subscribe((result:any)=>{
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
      this.api.put("api/memberplans/" +this.id , data).subscribe((result:any)=>{
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
       this.api.delete("api/memberplans/" +id).subscribe((result:any)=>{
         this.load();
       });
     }
   })

     // this.api.delete("api/memberplans/" +id).subscribe((result:any)=>{
     //     this.load();
     // });
   }

   Edit(id:number){
     this.id=id;
     if(this.id != null){
       this.api.get("api/memberplans/" +this.id).subscribe((result:any)=>{
         // console.log(result);
         this.formdata.patchValue({
           id:this.id,
           gymid:result.gymid,
           memberid:result.memberid,
           planid:result.planid,
           startdate:result.startdate,
           enddate:result.enddate,
           price:result.price,
           paid:result.paid
         });
       })
      }
   }

}
