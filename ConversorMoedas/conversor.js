function conversor() {
    var CreditValue = prompt("Digite quantos créditos você gostaria de converter: ");
    var DollarValue = CreditValue * 2.1;
    var RealValue = DollarValue * 5.73;
    alert(CreditValue + " créditos galácticos em dólares -> $" + DollarValue.toFixed(2));
    alert(CreditValue + " créditos galácticos em reais -> R$" + RealValue.toFixed(2));
}