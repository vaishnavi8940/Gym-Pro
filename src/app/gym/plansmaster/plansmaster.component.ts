import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plansmaster',
  templateUrl: './plansmaster.component.html',
  styleUrls: ['./plansmaster.component.css']
})
export class PlansmasterComponent implements OnInit {
  formdata:any;
  id:any;
  plans:any;
  gym:any;

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
   this.load();
   this.api.get("api/gyms").subscribe((result:any)=>{
      this.gym = result;
 })
  }

  load(){
    this.id = null;
    this.formdata = new FormGroup({
      id:new FormControl(0),
      gymid: new FormControl(0, Validators.compose([Validators.required])),
      name: new FormControl("", Validators.compose([Validators.required])),
      duration: new FormControl("", Validators.compose([Validators.required])),
      mrp: new FormControl("", Validators.compose([Validators.required])),
      price: new FormControl("", Validators.compose([Validators.required])),
      isactive: new FormControl(0, Validators.compose([Validators.required]))
     })

    this.api.get("api/plans").subscribe((result:any)=>{
        this.plans = result;
    })
   }

   Save(data:any){
    if(this.id == null){
      this.api.post("api/plans", data).subscribe((result:any)=>{
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
      this.api.put("api/plans/" +this.id , data).subscribe((result:any)=>{
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
       this.api.delete("api/plans/" +id).subscribe((result:any)=>{
         this.load();
       });
     }
   })

     // this.api.delete("api/plans/" +id).subscribe((result:any)=>{
     //     this.load();
     // });
   }

   Edit(id:number){
     this.id=id;
     if(this.id != null){
       this.api.get("api/plans/" +this.id).subscribe((result:any)=>{
         // console.log(result);
         this.formdata.patchValue({
           id:this.id,
           gymid:result.gymid,
           name:result.name,
           duration:result.duration,
           mrp:result.mrp,
           price:result.price,
           isactive:result.isactive
         });
       })
      }
   }

}
