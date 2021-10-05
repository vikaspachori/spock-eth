import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as BN from "bn.js";
import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})
export class MatchContractsService {
  contractAddress = "0x47FCF587c7eE6e290F184467f26098D6Fb9517Fa"
  constructor(private http: HttpClient) { }

  async getContractInstance() {
    const contractabi = await this.http.get("/assets/abi.json").toPromise();
    const windowObj = window as any;
    const walletAddress = localStorage.getItem("walletid");
    var web3: any = new Web3(window.web3.currentProvider);
    const contractInstance = new web3.eth.Contract(contractabi, this.contractAddress);
    const data = await contractInstance.methods.getContractBalance().call();
    const getUserStock = await contractInstance.methods.getUserStocks(walletAddress).call();

    debugger;
    return;
 
    var etherAmount = web3.utils.toBN(10000000000000000);
    var weiValue = web3.utils.toWei(etherAmount, 'ether');
    debugger;
    const t = new BN("10000000000000000");

    const transactionParameters = {
      to: this.contractAddress, // Required except during contract publications.
      from: walletAddress, // must match user's active address.
      data: contractInstance.methods
        .buyStock(63755, "somestring", 1000000, 1)
        .encodeABI(),
      value: t.toString("hex") // in WEI, which is equivalent to 1 ether
    };

    debugger;
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
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }

  }
}
