import { BankAccount } from "./b_account";

export class SavingAccount extends BankAccount{
    private minBalance : number

    constructor(accountNumber : number, 
        accountHolder : string, 
        initialBalance : number, 
        minBalance : number){
            super(accountNumber,accountHolder,minBalance)
            this.minBalance = minBalance
        }

    override withdraw(withdrawAmount: number): void {
        if(this.balance - withdrawAmount < this.minBalance){
            console.log(`Cannot withdraw: Maintaining a minimum balance of ${this.minBalance} is required.`);
            return;

        }
        super.withdraw(withdrawAmount)
    }

    addInterest(){
        const interest = this.balance * SavingAccount.getInterestRate()
        this.deposit(interest)
        console.log(`Interest added: ${interest}`)
    }
}