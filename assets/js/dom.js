document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    
    const pinNumber =document.getElementById('pin-number').value;
    const pin = parseInt(pinNumber)
    if(accountNumber.length === 11){
        if(pin === 1234){
            window.location.href="./main.html"
        }
        else{
            alert("Pin Not valid");
        }
    }
    else{
        alert("valid Number");
    }

});
