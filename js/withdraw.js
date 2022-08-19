document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const currentWitdrawAmountString = withdrawField.value;
    const currentWitdrawAmount = parseFloat(currentWitdrawAmountString)
    console.log(currentWitdrawAmountString)

    const previosWithdrawTotal = document.getElementById('withdraw-total')
    const previosWithdrawTotalString = previosWithdrawTotal.innerText;
    const previosWithdrawTotalAmount = parseFloat(previosWithdrawTotalString)

    const withdrawTotalCart = currentWitdrawAmount + previosWithdrawTotalAmount;

    previosWithdrawTotal.innerText = withdrawTotalCart

    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositString = totalDeposit.innerText;
    const totalDepositBalance = parseFloat(totalDepositString)
    const newBalance = totalDepositBalance - currentWitdrawAmount;
    totalDeposit.innerText = newBalance;

    withdrawField.value = '';
})