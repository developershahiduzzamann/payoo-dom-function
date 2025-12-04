document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementById('input-amount').value;
    const convartAmount = parseFloat(amount);

    const pinNumber = document.getElementById('pin-number').value;
    const pin = parseInt(pinNumber);
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(mainBalance);

    if(amount && pinNumber){
        if(pin === 1234){
            const sum = convartAmount + balance;
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