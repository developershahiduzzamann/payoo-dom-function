document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const amount = getElementById('input-amount');
    
    const pin = getElementById('pin-number');
    
    const balance = getInnerTextById('main-balance');

    if(amount && pin){
        if(pin === 1234){
            const sum = amount + balance;
            setInnerTextByIDandValue('main-balance',sum);

            const container = document.getElementById('transaction-div');
            const p = document.createElement("p")
            p.innerText = `
            AddMoney ${amount} form ${sum} Money`
            container.appendChild(p)
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Enter Amount');
    }

});