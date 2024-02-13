import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}
    fetchData() {
      return this.http.get(`${this.baseUrl}/api/`);
    }
  
}
