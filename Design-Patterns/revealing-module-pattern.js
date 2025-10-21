// Revealing module Pattern
// -> same like an IIFE but we can give a object a name as a key while returning.

const Bank = (function () {
  let bankBalance = 12000;

  function checkBalance() {
    return bankBalance;
  }

  function addBalance(val) {
    bankBalance += val;

    return `New Balance after deposite ${bankBalance}`;
  }

  function withdrawlBalance(val) {
    bankBalance -= val;

    return `New Balance after withdrawal ${bankBalance}`;
  }

  return {
    check: checkBalance,
    deposite: addBalance,
    draw: withdrawlBalance,
  };
})();

console.log(Bank.check());
console.log(Bank.deposite(2000));
console.log(Bank.draw(4000));
