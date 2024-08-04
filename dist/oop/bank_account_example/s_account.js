"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
const b_account_1 = require("./b_account");
class SavingAccount extends b_account_1.BankAccount {
    constructor(accountNumber, accountHolder, initialBalance, minBalance) {
        super(accountNumber, accountHolder, minBalance);
        this.minBalance = minBalance;
    }
    withdraw(withdrawAmount) {
        if (this.balance - withdrawAmount < this.minBalance) {
            console.log(`Cannot withdraw: Maintaining a minimum balance of ${this.minBalance} is required.`);
            return;
        }
        super.withdraw(withdrawAmount);
    }
    addInterest() {
        const interest = this.balance * SavingAccount.getInterestRate();
        this.deposit(interest);
        console.log(`Interest added: ${interest}`);
    }
}
exports.SavingAccount = SavingAccount;
