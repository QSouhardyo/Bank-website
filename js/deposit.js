document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById("deposit-field");
    const currentDepositAmountString = depositField.value;
    const currentDepositAmount = parseFloat(currentDepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previosDepositTotalString = depositTotalElement.innerText;
    const previosDepositTotal = parseFloat(previosDepositTotalString)
    const total = currentDepositAmount + previosDepositTotal

    depositTotalElement.innerText = total;
    // console.log(depositTotal)

    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositString = totalDeposit.innerText;
    const totalDepositBalance = parseFloat(totalDepositString)
    const finalBalance = currentDepositAmount + totalDepositBalance
    totalDeposit.innerText = finalBalance
    depositField.value = '';

}
)