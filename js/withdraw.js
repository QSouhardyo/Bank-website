document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const currentWitdrawAmountString = withdrawField.value;
    const currentWitdrawAmount = parseFloat(currentWitdrawAmountString);
    withdrawField.value = '';

    if (isNaN(currentWitdrawAmount)) {
        alert('please provid valid number')
        return;
    }

    const previosWithdrawTotal = document.getElementById('withdraw-total')
    const previosWithdrawTotalString = previosWithdrawTotal.innerText;
    const previosWithdrawTotalAmount = parseFloat(previosWithdrawTotalString)

    // const withdrawTotalCart = currentWitdrawAmount + previosWithdrawTotalAmount;

    // previosWithdrawTotal.innerText = withdrawTotalCart

    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositString = totalDeposit.innerText;
    const totalDepositBalance = parseFloat(totalDepositString)

    if (currentWitdrawAmount > totalDepositBalance) {
        alert('You dont have sufficient balance ')
        return;
    }

    const withdrawTotalCart = currentWitdrawAmount + previosWithdrawTotalAmount;
    previosWithdrawTotal.innerText = withdrawTotalCart

    const newBalance = totalDepositBalance - currentWitdrawAmount;
    totalDeposit.innerText = newBalance;


})