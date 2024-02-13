import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {

  //constructor(httpClient : HttpClient) {
   // let response = httpClient.get('http://127.0.0.1:8000/api/');
   // response.subscribe((data) => {
   //   console.log(data);
   // });

  //}
  
  apis: any = []; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData(); 
  }

  fetchData()
    {
      this.dataService.fetchData().subscribe((apis) => {
        console.log(apis);
        this.apis = apis;
      });
    }
}
