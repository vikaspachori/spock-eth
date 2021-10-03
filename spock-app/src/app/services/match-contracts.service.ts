import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})
export class MatchContractsService {
  contractAddress;
  constructor(private http: HttpClient) { }

  async getContractInstance() {
    const contractabi = await this.http.get("").toPromise();
    var web3: any = new Web3(window.web3.currentProvider);
    const contractInstance = new web3.eth.Contract(contractabi, this.contractAddress);
    debugger;


  }
}
