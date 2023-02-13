

let totalExpense = document.getElementById("TotalExpenses")
let totalBalance = document.getElementById("TotalBal")

function BudgetSubmit(){
    let budget = document.getElementById("budgetNum").value;
    document.getElementById("TotalBudget").innerText = budget;
}

function Expense(){
    let expenseText = document.getElementById("expenseText").value;
    let expenseNumber = Number(document.getElementById("expenseNumber").value);

    let expense = {};

    expense[expenseText] = expenseNumber;
    console.log(expense);



    let eList = document.getElementById("expeList");

    const list = document.createElement("li");

    const span = document.createElement("span");

    const listText = document.createTextNode(expenseText);

    const spanText = document.createTextNode(expenseNumber);

    list.appendChild(listText);
    eList.appendChild(list);

    span.appendChild(spanText);
    list.appendChild(span);

    // document.getElementById("expenseText").value = " ";
    // document.getElementById("expenseNumber").value = " ";
    let total;
    for(let i in expense){
        total += (expense[i])
    }

    document.getElementById("TotalExpenses").innerText = total;

}