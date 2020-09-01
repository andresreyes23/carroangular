import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class CartsService {
  data: Cart[];
  constructor(private http: Http) { }
  read(){
    return this.http.get('http://127.0.0.1:8000/cart');
  }
  insert(data:Cart){
    return this.http.post('http://127.0.0.1:8000/cart',data);
  }
  update(data:Cart){
    return this.http.put('http://127.0.0.1:8000/cart/'+ data.id, data);
  }
  delete (id){
    return this.http.delete('http://127.0.0.1:8000/cart/'+ id);
  }
}
