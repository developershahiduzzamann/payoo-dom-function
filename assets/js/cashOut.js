document.getElementById('Withdraw-btn').addEventListener('click',function(event){
    event.preventDefault()

    const mainBalance = getInnerTextById('main-balance')

    const inputamount = getElementById('cashOut-amount');
    
    const pin = getElementById('pin-number');

    const number = document.getElementById("account-number").value;

    if(inputamount < 0){
        alert('Enter your cash out amount');
        return;
    }
    
    if(inputamount && pin){
        if( pin === 1234){
            const num = mainBalance - inputamount;
            setInnerTextByIDandValue('main-balance',num);

            const container = document.getElementById('transaction-div');
            const div = document.createElement("div")
            div.classList.add("mony-history")
            div.innerHTML = `<p>Cash Out ${inputamount} form ${number} Account </p>`
            container.appendChild(div);
        }
        else{
            alert('Enter Valid Pin');
        }
    }
    else{
        alert('Cash Out Amount');
    }
});