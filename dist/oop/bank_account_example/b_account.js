"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    //constructor implementation
    constructor(accountNumber, accountHolder, initialBalance) {
        this.accountNumber = accountNumber,
            this.accountHolder = accountHolder,
            this.balance = initialBalance;
    }
    //deposit method implementation 
    deposit(depositAmount) {
        if (depositAmount < 0) {
            console.log('Deposit amount must be positive.');
            return;
        }
        this.balance += depositAmount;
        console.log(`Deposited: ${depositAmount},New Balance: ${this.balance}`);
    }
    //withdraw method implementation
    withdraw(withdrawAmount) {
        if (withdrawAmount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.balance -= withdrawAmount;
        console.log(`Amount Withdrwan: ${withdrawAmount} Remaining Balance : ${this.balance}`);
    }
    //get and set  method implementation 
    get accountInfo() {
        return `Account Number: ${this.accountNumber}, 
        Account Holder: ${this.accountHolder}, 
        Balance: ${this.balance}`;
    }
    get currentBalance() {
        return this.balance;
    }
    set currentBalance(newBalance) {
        if (newBalance < 0) {
            console.log('Balance cannot be negative.');
            return;
        }
        this.balance = newBalance;
    }
    //static get method implementation 
    static getInterestRate() {
        return this.interestRate;
    }
    //static set method implementation 
    static setInterestRate(setRate) {
        if (setRate < 0 || setRate > 1) {
            console.log('Invalid interest rate');
            return;
        }
        this.interestRate = setRate;
    }
}
exports.BankAccount = BankAccount;
BankAccount.interestRate = 0.03;
