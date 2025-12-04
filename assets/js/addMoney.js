document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const amount = getElementById('input-amount');
    
    const pin = getElementById('pin-number');
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(mainBalance);

    if(amount && pin){
        if(pin === 1234){
            const sum = amount + balance;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Enter Amount');
    }

});