
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getValueByInput('deposit-amount');

    // error handling 
    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert('Input the Valid Number.!');
        return;
    }
    
    // calculate the deposit amount 
    const previousDepositAmount = getValueByElement('deposit-field');
    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    setValueByElement('deposit-field', totalDepositAmount);

    // calculate the total balance 
    const previousBalanceAmount = getValueByElement('balance');

    const totalBalance = previousBalanceAmount + newDepositAmount;
    setValueByElement('balance', totalBalance);
})