function getElementById(id){
    const value = document.getElementById(id).value;
    const convartvalue = parseFloat(value);
    return convartvalue;  
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convartvalue = parseFloat(value);
    return convartvalue
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}
