import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    var web3: any = new Web3(window.web3.currentProvider);
    const contractInstance = new web3.eth.Contract(contractabi, this.contractAddress);
    const data = await contractInstance.methods.getContractBalance().call()
    const walletAddress = localStorage.getItem("walletid");
    var etherAmount = web3.utils.toBN(1);
    var weiValue = web3.utils.toWei(etherAmount, 'ether');
    debugger;
    const transactionParameters = {
      to: this.contractAddress, // Required except during contract publications.
      from: walletAddress, // must match user's active address.
      data: contractInstance.methods
        .buyStock(63755, "somestring", 1000000, 1)
        .encodeABI(),
      gas: "470000",
      value: "1000000000000000000", // in WEI, which is equivalent to 1 ether
      gasPrice: "0"
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
