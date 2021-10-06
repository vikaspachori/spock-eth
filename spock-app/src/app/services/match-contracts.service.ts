import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as BN from "bn.js";
import Web3 from 'web3';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class MatchContractsService {
  contractAddress = "0x47FCF587c7eE6e290F184467f26098D6Fb9517Fa";
  storedwalletAddress;
  contractabi;
  constructor(private http: HttpClient) {
    this.storedwalletAddress = LocalstorageService.getWalletId();
    this.http.get("/assets/abi.json").toPromise().then(d => {
      this.contractabi = d;
    })
  }

  async getUserStock() {
    const contranctInstace = await this.getContractInstance();
    const walletAddress = LocalstorageService.getWalletId();
    await contranctInstace.methods.getUserStocks(walletAddress).call();
  }

  async buyStock(playerid, playerprice, playername) {
    const stockPrice = playerprice * 1000000000000000;
    const bnValue = new BN(stockPrice.toString());

    const contractInstance = await this.getContractInstance();
    const transactionParameters = {
      to: this.contractAddress, // Required except during contract publications.
      from: this.storedwalletAddress, // must match user's active address.
      data: contractInstance.methods
        .buyStock(playerid, playername, 1000000, 1)
        .encodeABI(),
      value: bnValue.toString("hex") // in WEI, which is equivalent to 1 ether
    };
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on PolygonScan: " +
          txHash,
      };
    } catch (error) {
      alert("soemthing went wrong")
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  }
  async getContractInstance() {
    var web3: any = new Web3(window.web3.currentProvider);
    const contractInstance = new web3.eth.Contract(this.contractabi, this.contractAddress);
    return contractInstance;

  }

  // async sellPlayer(playerid) {
  //   const contractInstance = await this.getContractInstance();
  // }
}
