import { Component, OnInit } from '@angular/core';
import {Cart} from '../cart';
import {CartsService} from '../carts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:Cart[];
  current_produ: Cart;
  crud_operation = {
    is_new: false,is_visible:false
  }
  constructor(private service: CartsService) {
    this.data=[];
  }

  ngOnInit() {
    this.service.read().subscribe(res =>{
      this.data = res.json();
      this.current_produ = new Cart();
    });
  }

  new(){
    this.current_produ = new Cart();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=true;
  }
  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
       this.current_produ = new Cart();
       this.crud_operation.is_visible = false;
       this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new Cart();
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
