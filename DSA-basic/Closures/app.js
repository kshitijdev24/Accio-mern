function bankAccount(bal, userPin) {
    let balance = bal;
    const pin = userPin
    
    return {
        checkBalance: () => {
            console.log(balance)
        },
        deposit: (amouunt) => {
            balance += amouunt;
            console.log(`Total balance after deposit:${balance}`);
        },
        withdraw:(enteredPin,amount)=> {
            if (enteredPin != pin) {
                console.log("Invalid Pin")
                return
            }
            if (amount > balance) {
                console.log("Invalid amount to be withdrawn")
                return
            }
            balance -= amount
            console.log(balance)
        }

    }
}

const bankObj = bankAccount(2272004, 1234);
bankObj.checkBalance()
bankObj.deposit(10000)
bankObj.withdraw(1234,5000)
