//module pattern
// IIFE(Immidate invoke Function Expression)


const Bank = (function(){

    let bankBalance = 12000;

    function checkBalance(){

        return bankBalance;

    }

    function addBalance(val){
        bankBalance += val;

        return `New Balance after deposite ${bankBalance}`
    }

    function withdrawlBalance(val){
        bankBalance -= val;

        return `New Balance after withdrawal ${bankBalance}`
    }

    return {

        checkBalance,
        addBalance,
        withdrawlBalance
    }


})()

console.log(Bank.checkBalance());
console.log(Bank.addBalance(1000));
console.log(Bank.withdrawlBalance(5000));
