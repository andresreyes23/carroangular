import { Component } from '@angular/core';
import {Products} from './products';
import {ProductService} from './product.service';
import {Cart} from './cart';
import {CartsService} from './carts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carro';

  data:Products[];
  current_produ: Products;
  crud_operation = {
    is_new: false,is_visible:false
  }

  datac:Cart[];
  current_produc: Cart;
  crud_operationc = {
    is_new: false,is_visible:false
  }

  constructor(private service: ProductService) {
    this.data=[];
    this.datac=[];
   }

  ngOnInit() {
    this.service.read().subscribe(res =>{
      this.data = res.json();
      this.current_produ = new Products();
    });
  }
  new(){
    this.current_produ = new Products();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new=true;
  }
  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
       this.current_produ = new Products();
       this.crud_operation.is_visible = false;
       this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new Products();
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

  ngOnInitc() {
    this.service.read().subscribe(res =>{
      this.datac = res.json();
      this.current_produc = new Cart();
    });
  }

  newc(){
    this.current_produc = new Cart();
    this.crud_operationc.is_visible = true;
    this.crud_operationc.is_new=true;
  }
  savec(){
    if(this.crud_operationc.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
       this.current_produc = new Cart();
       this.crud_operationc.is_visible = false;
       this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produc = new Cart();
       this.crud_operation.is_visible = false;
       this.ngOnInit();
    });
  }
  editc(row){
    this.crud_operationc.is_visible = true;
    this.crud_operationc.is_new = false;
    this.current_produc = row;
  }
  deletec(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operationc.is_new =false;
      this.ngOnInit();
    });
  }


}
