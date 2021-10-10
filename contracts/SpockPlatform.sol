//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

contract SpockPlatform {
    
    //Stores the current score of each stock
    mapping(uint => uint) stockScores;
    address owner;
    
    struct Stock {
        uint id;
        string playerName;
        uint totalNum;
        uint score;
        uint totalPrice;
    }
    
    mapping(address => Stock[]) userStocks;
    mapping(uint => uint) numStocksInCirculation;
    
    //Buy and Sell Events
    //Buyer, Number of Stocks, Current stock price
    event Buy(address, uint, uint);
    //Buyer, Number of Stocks, Current stock price
    event Sell(address, uint, uint);
    
    constructor() {
        owner = msg.sender;    
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    function buyStock(uint _id, string memory _playerName, uint _totalNum, uint _currentScore) public payable {
        //This can come from Chainlink
        // uint _currentPrice = stockPrices[_id];
        stockScores[_id] = _currentScore;
        uint _totalPrice = stockScores[_id]*_totalNum;
            
        require(msg.value >= _totalPrice, "Not enought amount to but the stocks");
        
        uint bought = 0;
        
        if(userStocks[msg.sender].length == 0){
            Stock memory userStock = Stock(_id, _playerName, _totalNum, stockScores[_id], _totalPrice);
            userStocks[msg.sender].push(userStock);
            bought = 1;
            numStocksInCirculation[_id] = numStocksInCirculation[_id] + _totalNum;
            emit Buy(msg.sender, _totalNum, stockScores[_id]);
        }
        else {
            for(uint i = 0; i < userStocks[msg.sender].length; i++){
                if(userStocks[msg.sender][i].id == _id){
                    Stock memory existingStock = userStocks[msg.sender][i];
                    existingStock.totalNum = existingStock.totalNum + _totalNum;
                    userStocks[msg.sender][i] = existingStock;
                    bought = 1;
                    emit Buy(msg.sender, _totalNum, stockScores[_id]);
                    numStocksInCirculation[_id] = numStocksInCirculation[_id] + _totalNum;
                    break;
                }
            }
        }
        
        if(bought == 0) {
            Stock memory userStock = Stock(_id, _playerName, _totalNum, stockScores[_id], _totalPrice);
            userStocks[msg.sender].push(userStock);
            bought = 1;
            numStocksInCirculation[_id] = numStocksInCirculation[_id] + _totalNum;
            emit Buy(msg.sender, _totalNum, stockScores[_id]);
        }
        
        
        
    }
    
    
    function sellStock(uint _id, uint _currentScore, uint _numStocks ) public returns(bool) {
        require(userStocks[msg.sender].length != 0, "User does not have any stocks");
        Stock memory existingStock;
        uint userMoney;
        uint stockPosition;
        
        for(uint i = 0; i < userStocks[msg.sender].length; i++){
            if(userStocks[msg.sender][i].id == _id){
                   existingStock = userStocks[msg.sender][i];
                   stockPosition = i;
                   break;
            }    
        }
        
        
        require(existingStock.id != 0, "Player ID cannot be zero");
        require(existingStock.totalNum >= _numStocks, "You cannot sell more than you own");
        
        stockScores[_id] = _currentScore;
        
        existingStock.totalNum = existingStock.totalNum - _numStocks;
        userStocks[msg.sender][stockPosition] = existingStock;
        
        
        numStocksInCirculation[_id] = numStocksInCirculation[_id] - _numStocks;
        
        userMoney = _numStocks*_currentScore;
        payable(msg.sender).transfer(userMoney);
        
        emit Sell(msg.sender, _numStocks, _currentScore);
        
        return true;
        
    }
    
    function setScoreAndPrice(uint _id, uint _score) public onlyOwner {
        stockScores[_id] = _score;
    }
    
    function getUserStocks(address userAddress) public view returns(Stock[] memory) {
        return userStocks[userAddress];
    }
    
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function getStocksInCirculation(uint _id) public view returns(uint) {
        return numStocksInCirculation[_id];
    }
}
