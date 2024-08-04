export class BankAccount{
    private accountNumber : number 
    private accountHolder : string

    //protected variable 
    protected balance : number

    private static interestRate = 0.03

    //constructor implementation
    constructor(accountNumber : number ,accountHolder : string ,initialBalance : number){
        this.accountNumber = accountNumber,
        this.accountHolder = accountHolder,
        this.balance = initialBalance
    }

    //deposit method implementation 
    deposit(depositAmount:number){
        if (depositAmount< 0){
            console.log('Deposit amount must be positive.')
            return
        }
        this.balance += depositAmount;
        console.log(`Deposited: ${depositAmount},New Balance: ${this.balance}`)
    }


    //withdraw method implementation
    withdraw(withdrawAmount : number){
        if(withdrawAmount > this.balance){
            console.log('Insufficient balance')
            return
        }
        this.balance -= withdrawAmount
        console.log(`Amount Withdrwan: ${withdrawAmount} Remaining Balance : ${this.balance}`)
    }


    //get and set  method implementation 
    get accountInfo(): string{
        return `Account Number: ${this.accountNumber}, 
        Account Holder: ${this.accountHolder}, 
        Balance: ${this.balance}`;
    }

    get currentBalance(): number{
        return this.balance
    }

    set currentBalance(newBalance : number){
        if(newBalance <0){
            console.log('Balance cannot be negative.')
            return
        }
        this.balance = newBalance
    }


    //static get method implementation 
    static getInterestRate(){
        return this.interestRate
    }

     //static set method implementation 
    static setInterestRate(setRate : number){
        if(setRate <0 || setRate > 1){
            console.log('Invalid interest rate')
            return
        }
        this.interestRate = setRate
    }
}