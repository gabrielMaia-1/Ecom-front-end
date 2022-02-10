import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapTo, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../shared/interfaces/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  get<T>(url: string, params?: any){
    if(!params) return this._http.get<T>(`${this.apiUrl}/${url}`)
    return this._http.get<T>(`${this.apiUrl}/${url}`, { params: params })
  }

  post<T>(url: string, body: any){
    return this._http.post<T>(`${this.apiUrl}/${url}`,body)
  }

  put<T>(url: string, body: any){
    return this._http.put<T>(`${this.apiUrl}/${url}`,body)
  }

  delete<T>(url:string){
    return this._http.delete<T>(`${this.apiUrl}/${url}`);
  }
}