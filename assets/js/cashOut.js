document.getElementById('Withdraw-btn').addEventListener('click',function(event){
    event.preventDefault()

    const balance = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(balance);

    const cashOut = document.getElementById('cashOut-amount').value;
    const amount = parseFloat(cashOut);

    const pinNumber = document.getElementById('pin-number').value;
    const pin = parseInt(pinNumber);

    if(cashOut && pinNumber){
        if( pin === 1234){
            const num = mainBalance - amount;
            document.getElementById('main-balance').innerText = num;
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Cash Out Amount')
    }
});