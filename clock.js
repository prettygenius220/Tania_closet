window.alert("Please Enter numbers only");

function collectOrder() {
    var gowns = parseInt(document.getElementById("gownsorder").value);
    var shoes = parseInt(document.getElementById("shoesorder").value);
    const RATE = 20;
    if (isNaN(gowns)) {
        gowns = 0;
    }
    
    if (isNaN(shoes)) {
        shoes = 0;
    }
    
    var final = (gowns + shoes) * RATE;
    return final;
}

function subTotal() {
    const TAXRATE = 5;
    var sub = (collectOrder() + TAXRATE);
    var subT = sub + "k";
    return subT;
}

function total() {
    var tax = document.getElementById("tax").value;
    if (isNaN(tax)){
        tax = 5;
    }
    var totalP = parseInt(subTotal()) * tax;
    var totalPrice = totalP + "k";
    return totalPrice;
}

function display() {
    const TAXRATE = 5;
    var subDisplay = document.getElementById("subtotal").value = subTotal();
    var totDisplay = document.getElementById("total").value = total();
    var taxDisplay = document.getElementById("tax").value = TAXRATE + "k";
    return subDisplay;
    return totDisplay;
}


