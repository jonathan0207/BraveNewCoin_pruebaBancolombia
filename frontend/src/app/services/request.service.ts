import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  saveUserInfo({ usuario, token }) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('uid', usuario.id);
  }

  getUserId() {
    return localStorage.getItem('uid');
  }

  registerUser(user: any) {
    return this.http.post(`${environment.HOST_BACKEND}/users`, user)
      .pipe(
        catchError(({ error }) => {
          Swal.fire('Error', error?.error, 'error');
          return of(false);
        })
      )
  }

  loginUser(body: any) {
    return this.http.post(`${environment.HOST_BACKEND}/login`, body)
      .pipe(
        tap((resp: any) => {
          if (resp.token) {
            this.saveUserInfo(resp)
          }
        }),
        catchError(({ error }) => {
          Swal.fire('Error', error?.error, 'error');
          return of(false);
        })
      )
  }

  getListCoins() {
    return this.http.get(`${environment.HOST_BACKEND}/coins/list/${this.getUserId()}`)
  }

  getAllListCoins() {
    return this.http.get(`${environment.HOST_BACKEND}/coins?currency=usd`)
  }

  setNewCoin(name) {
    return this.http.post(`${environment.HOST_BACKEND}/coins`, {name, UserId: this.getUserId() })
      .pipe(
        mergeMap(() => this.getListCoins()),
        catchError(({ error }) => {
          Swal.fire('Error', error?.error, 'error');
          return of(false);
        })
      )
  }

  convertCoin(price){
    
    var peso = 3900;
    const conversion = price*peso

    return conversion;

  }


}
