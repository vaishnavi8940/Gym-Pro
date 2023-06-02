import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  formdata:any;
  id:any;
  gym:any;
  trainer:any;
  batch:any;
  members:any;


  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.get("api/gyms").subscribe((result:any)=>{
      this.gym = result;
      })
    this.api.get("api/batches").subscribe((result:any)=>{
        this.batch = result;
      })
    this.api.get("api/gymtrainers").subscribe((result:any)=>{
      this.trainer = result;
      })
   this.load();
  }

  load(){
    this.id = null;
    this.formdata = new FormGroup({
      id:new FormControl(0),
      gymid:new FormControl(0, Validators.compose([Validators.required])),
      batchid: new FormControl(0, Validators.compose([Validators.required])),
      trainerid: new FormControl(0, Validators.compose([Validators.required])),
      name: new FormControl("", Validators.compose([Validators.required])),
      gender: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("", Validators.compose([Validators.required])),
      aadharno: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required]))
     })
     this.api.get("api/members").subscribe((result:any)=>{
      this.members = result;
  })

   }
   Save(data:any){
    if(this.id == null){
      this.api.post("api/members", data).subscribe((result:any)=>{
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
      this.api.put("api/members/" +this.id , data).subscribe((result:any)=>{
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
       this.api.delete("api/members/" +id).subscribe((result:any)=>{
         this.load();
       });
     }
   })

     // this.api.delete("api/members/" +id).subscribe((result:any)=>{
     //     this.load();
     // });
   }

   Edit(id:number){
     this.id=id;
     if(this.id != null){
       this.api.get("api/members/" +this.id).subscribe((result:any)=>{
         // console.log(result);
         this.formdata.patchValue({
           id:this.id,
           gymid:result.gymid,
           batchid:result.batchid,
           trainerid:result.trainerid,
           name:result.name,
           gender:result.gender,
           mobileno:result.mobileno,
           aadharno:result.aadharno,
           address:result.address
         });
       })
      }
   }

}
