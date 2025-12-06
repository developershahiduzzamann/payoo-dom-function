document.getElementById('Withdraw-btn').addEventListener('click',function(event){
    event.preventDefault()

    const mainBalance = getInnerTextById('main-balance')

    const amount = getElementById('cashOut-amount');
    
    const pin = getElementById('pin-number');
    
    if(amount && pin){
        if( pin === 1234){
            const num = mainBalance - amount;
            setInnerTextByIDandValue('main-balance',num);

            const container = document.getElementById('transaction-div');
            const p =  document.createElement('p');
            p.innerText =`
            cash Out ${amount} form ${num} Taka`
            container.appendChild(p);
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Cash Out Amount')
    }
});