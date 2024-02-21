import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from 'src/model/class'; 
@Injectable({
    providedIn: 'root'
  })

  export class classService {
    private baseUrl = 'http://localhost:8080/class'; 
    constructor(private http: HttpClient) { }

    getAllClass(): Observable<Class[]> {
        return this.http.get<Class[]>(`${this.baseUrl}/all`);
      }

      deleteClass(idclass: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${idclass}`);
      }

      addclass(classs: Class): Observable<Class> {
        return this.http.post<Class>(`${this.baseUrl}/addClass`, classs);
      }

      updateClass(classs:Class, id: number): Observable<Class> {
        return this.http.put<Class>(`${this.baseUrl}/updatecm/${id}`, classs);
      }
      getclassById(idclass: number): Observable<Class> {
        return this.http.get<Class>(`${this.baseUrl}/${idclass}`);
      }
















  }  