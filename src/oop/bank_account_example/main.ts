
import { BankAccount } from "./b_account"
import { SavingAccount } from "./s_account"


//creating BankAccount instance
const account = new BankAccount(1,'Rezwan', 3000)
console.log(account.accountInfo)
account.deposit(6000)
account.withdraw(300)

//creating SavingAccount instances
const savingAccount = new SavingAccount(1,'Rezwan',3000,25)
console.log(savingAccount.accountInfo)
savingAccount.deposit(30)
savingAccount.withdraw(4)
savingAccount.addInterest()





//Static properties and methods
console.log(`Interest Rate: ${BankAccount.getInterestRate()}`)
BankAccount.setInterestRate(0.9)
console.log(`Updated Interest Rate: ${BankAccount.getInterestRate()}`)



