document.getElementById('cash-out').style.display='none';
document.getElementById('transaction-money').style.display = 'none';


document.getElementById('money-btn').addEventListener('click',function(){
    getToggle("add-money","block");
    getToggle("cash-out","none");
    getToggle("transaction-money","none");
    
    
});

document.getElementById('cash-out-btn').addEventListener('click',function(){
    getToggle("add-money","none");
    getToggle("cash-out","block");
    getToggle("transaction-money","none");
});

document.getElementById('transaction-btn').addEventListener('click',function(){
    getToggle("add-money","none");
    getToggle("cash-out","none");
    getToggle("transaction-money","block");
})