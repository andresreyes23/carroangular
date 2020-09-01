import { Injectable } from '@angular/core';
import { Products } from './products';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: Products[];
  constructor(private http: Http) { }
  read(){
    return this.http.get('http://127.0.0.1:8000/products');
  }
  insert(data:Products){
    return this.http.post('http://127.0.0.1:8000/products',data);
  }
  update(data:Products){
    return this.http.put('http://127.0.0.1:8000/products/'+ data.id, data);
  }
  delete (id){
    return this.http.delete('http://127.0.0.1:8000/products/'+ id);
  }
}
