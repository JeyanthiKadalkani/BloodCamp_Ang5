import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodDonar } from './BloodDonar';
import { BloodRequest } from './blood-request';
import { History } from './history';


@Injectable({
  providedIn: 'root'
})
export class BoodbankapiService {
  hdrs = new HttpHeaders().set('content-type', 'application/json');
  baseURL = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  findAllDonors(): Observable<BloodDonar[]> {
    return this.http.get<BloodDonar[]>(`${this.baseURL}donars`);

  }

  getAllRequests(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(`${this.baseURL}requests`);
  }

  addRequest(request: BloodRequest): Observable<BloodRequest> {
    return this.http.post<BloodRequest>(`${this.baseURL}requests`, request, { headers: this.hdrs });
  }

  removeRequest(request: BloodRequest): Observable<BloodRequest> {
    return this.http.delete<BloodRequest>(`${this.baseURL}requests/${request.id}`, { headers: this.hdrs });
  }

  updateRequest(request: BloodRequest): Observable<BloodRequest> {
    return this.http.put<BloodRequest>(`${this.baseURL}requests/${request.id}`, request, { headers: this.hdrs });
  }

  findDonorHistory(id: number): Observable<History[]> {
    return this.http.get<History[]>(`${this.baseURL}donationHistory/${id}`);
  }

}