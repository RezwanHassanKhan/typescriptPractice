"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b_account_1 = require("./b_account");
const s_account_1 = require("./s_account");
//creating BankAccount instance
const account = new b_account_1.BankAccount(1, 'Rezwan', 3000);
console.log(account.accountInfo);
account.deposit(6000);
account.withdraw(300);
//creating SavingAccount instances
const savingAccount = new s_account_1.SavingAccount(1, 'Rezwan', 3000, 25);
console.log(savingAccount.accountInfo);
savingAccount.deposit(30);
savingAccount.withdraw(4);
savingAccount.addInterest();
//Static properties and methods
console.log(`Interest Rate: ${b_account_1.BankAccount.getInterestRate()}`);
b_account_1.BankAccount.setInterestRate(0.9);
console.log(`Updated Interest Rate: ${b_account_1.BankAccount.getInterestRate()}`);
