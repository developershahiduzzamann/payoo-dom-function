document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const bankAccount = document.getElementById('bank-info').value
         
    const amount = getElementById('input-amount');
    
    const pin = getElementById('pin-number');

    const number = document.getElementById("account-number").value;
    
    const balance = getInnerTextById('main-balance');

    if(amount<0){
        alert('get positive value');
        return;
    }
    console.log("Hello this is javascript and this is very much easy subject")
    if(amount && pin){
        if(pin === 1234){
            const sum = amount + balance;
            setInnerTextByIDandValue('main-balance',sum);
 
            const container = document.getElementById('transaction-div');
            const p = document.createElement("p")
            p.innerText = `
            AddMoney form ${bankAccount} ${amount} form ${number} Account`
            container.appendChild(p);
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Enter Amount');
    }

});