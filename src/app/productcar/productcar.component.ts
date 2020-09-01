import { Component, OnInit } from '@angular/core';
import {Productcar} from '../productcar';
import {ProductcarService} from '../productcar.service';
@Component({
  selector: 'app-productcar',
  templateUrl: './productcar.component.html',
  styleUrls: ['./productcar.component.css']
})
export class ProductcarComponent implements OnInit {
  data:Productcar[];
  current_produ: Productcar;
  crud_operation = {
    is_new: false,is_visible:false
  }
  constructor(private service: ProductcarService) {
    this.data=[];
  }


  ngOnInit() {
    this.service.read().subscribe(res =>{
      this.data = res.json();
      this.current_produ = new Productcar();
    });
  }
  new(){
    this.current_produ = new Productcar();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=true;
  }
  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
       this.current_produ = new Productcar();
       this.crud_operation.is_visible = false;
       this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new Productcar();
       this.crud_operation.is_visible = false;
       this.ngOnInit();
    });
  }
  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_produ = row;
  }
  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new =false;
      this.ngOnInit();
    });
  }


}
