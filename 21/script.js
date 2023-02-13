

function Loan(){

    let amount = document.getElementById("amount").value;
    let interest = document.getElementById("interest").value;
    let months = document.getElementById("month").value;


    let interestMoney = (amount * (interest*0.01))/months;
    let emi = ((amount/months) + interestMoney).toFixed(2);

    console.log(amount);
    document.getElementById("emi").innerText = `EMI (₹) : ${emi}`
}