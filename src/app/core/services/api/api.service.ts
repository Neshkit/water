import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      };
      this.http.get(url, header).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          resolve(error);
        }
      );
    });
  }
  public post(url: any, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      };
      this.http.post(url,data, header).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          resolve(error);
        }
      );
    });
  }

  public put(url: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      };
      this.http.put(url, header).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          resolve(error);
        }
      );
    });
  }

  public delete(url: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const header = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      };
      this.http.delete(url, header).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          resolve(error);
        }
      );
    });
  }
}