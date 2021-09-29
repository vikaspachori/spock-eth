import { Injectable } from '@angular/core';

import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  windoObj: any;
  constructor() { 
    this.windoObj = window as any;
    debugger;
  }
  private getAccounts = async () => {
    try {
      return await this.windoObj.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  public openMetamask = async () => {
    this.windoObj.web3 = new Web3(this.windoObj.ethereum);
    let addresses = await this.getAccounts();
    console.log("service", addresses)
    if (!addresses.length) {
      try {
        addresses = await this.windoObj.ethereum.enable();
      } catch (e) {
        return false;
      }
    }
    return addresses.length ? addresses[0] : null;
  };
}
