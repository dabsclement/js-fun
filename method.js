class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    showBalance(){
        console.log('Balance:' + this.balance + 'EUR')
    }
    deposit(amount) {
        console.log('Depositing' + amount + 'EUR');
        this.balance += amount;
        this.showBalance();
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log('Withdrawal denied')
        } else {
            console.log("Withdrawing" + amount + 'EUR')
            this.balance -=amount;
            this.showBalance();
        }
    }
}

cont newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance();
newAccount.deposit(50);
newAccount.withdraw(501);


// STATIC METHOD

class BePolite{
static sayHello(){
    console.log('Hello!')
}
static sayHelloTo(name){
    console.log('Hello' + name + '!');
}
static add(firstNumber, secondNumber){
return firstNumber + secondNumber;
}
}

BePolite.sayHello();
BePolite.sayHelloTo('WILL');
console.log(BePolite.add(2,3))