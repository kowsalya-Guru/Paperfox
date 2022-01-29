import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './sample.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SampleService {

  constructor(public http: HttpClient) {}

  getazpostData(): Observable<Data>{
    return this.http.post<Data>(`http://test-dashboard.azpost.co//custom/api/order/list.php`,'');
  }
}