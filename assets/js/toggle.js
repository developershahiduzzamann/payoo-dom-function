document.getElementById('cash-out').style.display='none'

document.getElementById('money-btn').addEventListener('click',function(){
    getToggle("add-money","block");
    getToggle("cash-out","none");
    
});

document.getElementById('cash-out-btn').addEventListener('click',function(){
    getToggle("add-money","none");
    getToggle("cash-out","block");
});