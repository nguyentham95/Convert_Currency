function Convert() {
    let amount = document.getElementById("amount").value;
    let Vietnam_USD = amount / 23000;
    let USD_Vietnam = amount * 23000;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (fromCurrency == "vnd" && toCurrency == "usd") {
       document.getElementById("result").innerHTML = "Result: " + Vietnam_USD +" USD";

    } else if (fromCurrency == "usd" && toCurrency == "vnd") {
        document.getElementById("result").innerHTML = "Result: " + USD_Vietnam +" VND";

    } else {
        document.getElementById("result").innerHTML =  "Result: " + amount;
    }
}