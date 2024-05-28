import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '../models/ISong';


@Injectable({
  providedIn: 'root'
})
export class MockMusicService {

  private readonly apiUrl = '../../../assets/mock-data/list-songs.json';


  constructor(private http: HttpClient) { }

  getSongs(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.apiUrl);
  }
}
