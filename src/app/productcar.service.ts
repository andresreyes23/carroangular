import { Injectable } from '@angular/core';
import { Productcar } from './productcar';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProductcarService {
  data: Productcar[];
  constructor(private http: Http) { }
  read(){
    return this.http.get('http://127.0.0.1:8000/productcart');
  }
  insert(data:Productcar){
    return this.http.post('http://127.0.0.1:8000/productcart',data);
  }
  update(data:Productcar){
    return this.http.put('http://127.0.0.1:8000/productcart/'+ data.id, data);
  }
  delete (id){
    return this.http.delete('http://127.0.0.1:8000/productcart/'+ id);
  }
}
