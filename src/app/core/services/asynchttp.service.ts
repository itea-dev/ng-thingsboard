import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';

interface HttpGetOptions {
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe: "events";
  params?: HttpParams | { [param: string]: string | string[]; };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AsyncHttpService {

  constructor(private httpClient: HttpClient) { }

  async get<T>(url: string, options: HttpGetOptions): Promise<HttpEvent<T>> {
    return await this.httpClient.get<T>(url, options).toPromise();
  }

  async post<T>(url: string, body: any, options: HttpGetOptions): Promise<HttpEvent<T>> {
    return await this.httpClient.post<T>(url, body, options).toPromise();
  }

  async put<T>(url: string, body: any, options: HttpGetOptions): Promise<HttpEvent<T>> {
    return await this.httpClient.put<T>(url, body, options).toPromise();
  }

  async delete<T>(url: string, options: HttpGetOptions): Promise<HttpEvent<T>> {
    return await this.httpClient.delete<T>(url, options).toPromise();
  }

}
