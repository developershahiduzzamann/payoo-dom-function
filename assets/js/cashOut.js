document.getElementById('Withdraw-btn').addEventListener('click',function(event){
    event.preventDefault()

    const balance = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(balance);

    const amount = getElementById('cashOut-amount');
    
    const pin = getElementById('pin-number');
    
    if(amount && pin){
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