//handle the deposit button
document.getElementById( 'deposit-btn' ).addEventListener( 'click', function() {
    //get the amount deposited
    const newDepositInput = document.getElementById( 'deposit-amount' );
    const newDepositAmount = newDepositInput.value;

    const currentlyDeposited = document.getElementById( 'currently-deposited' );
    const currentlyDepositedAmount = currentlyDeposited.innerText;
    const depositedTotal = parseFloat( currentlyDepositedAmount ) + parseFloat( newDepositAmount );

    currentlyDeposited.innerText = depositedTotal;
        
    //clear the deposit input
    newDepositInput.value = '';

    //set balance
    const currentBalance = document.getElementById( 'current-balance' );
    const currentBalanceAmount = currentBalance.innerText;
    const balanceTotal = parseFloat( currentBalanceAmount ) + parseFloat( newDepositAmount );
    currentBalance.innerText = balanceTotal;
} )

//handle the withdraw button
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function() {
    //get the amount withdrawn
    const newWithdrawalInput = document.getElementById( 'withdrawn-amount' );
    const newWithdrawnAmount = newWithdrawalInput.value;

    const recentlyWithdrawn = document.getElementById( 'recently-withdrawn' );
    const recentlyWithdrawnAmount = recentlyWithdrawn.innerText;
    const withdrawnTotal = parseFloat( recentlyWithdrawnAmount ) + parseFloat( newWithdrawnAmount );

    recentlyWithdrawn.innerText = withdrawnTotal;
        
    //clear the withdraw input
    newWithdrawalInput.value = '';

    //set balance
    const currentBalance = document.getElementById( 'current-balance' );
    const currentBalanceAmount = currentBalance.innerText;
    const balanceTotal = parseFloat( currentBalanceAmount ) - parseFloat( newWithdrawnAmount );
    currentBalance.innerText = balanceTotal;
} )