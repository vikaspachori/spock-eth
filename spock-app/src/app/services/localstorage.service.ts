import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  static getWalletId() {
    return localStorage.getItem("walletid");
  }
}
