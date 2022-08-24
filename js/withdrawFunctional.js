
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getValueByInput('withdraw');

    const previousBalanceAmount = getValueByElement('balance');

    // error handling 
    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Input the Valid Number');
        return;
    }
    else if (newWithdrawAmount > previousBalanceAmount) {
        alert('Withdraw amount should not be greater than total Balance');
        return;
    }

    // calculate the withdraw amount 
    const previousWithdrawAmount = getValueByElement('withdraw-field');
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setValueByElement('withdraw-field', totalWithdrawAmount);

    // calculate the updated balance value
    const updatedBalance = previousBalanceAmount - newWithdrawAmount;
    setValueByElement('balance', updatedBalance);
})