function updateAllCost(input) {
    const perExpense = document.getElementById(input);
    const getPerExpenseString = perExpense.value;
    const getCostOfTotal = parseInt(getPerExpenseString);
    // const totalPlayerExpense = getPerPlayerNumber * playerArray.length;
    return getCostOfTotal;



}


const playerArray = [];

function display(playerList) {

    const orderedListBody = document.getElementById('selectList');
    orderedListBody.innerHTML = '';
    for (let i = 0; i < playerList.length; i++) {


        if (playerList.length === 6) {
            alert("A maximum of 5 players can be taken")
        }
        else {
            const name = playerArray[i].playerName;

            const li = document.createElement('li');
            li.innerText = name;

            orderedListBody.appendChild(li);
        }
    }
}

function playerSelect(player) {

    const playerName = player.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);
    document.getElementById('selected-value').innerText = playerArray.length;
    display(playerArray);
}




// calculate player cost
document.getElementById('calculate-btn').addEventListener('click', function () {
    const getPerPlayerNumber = updateAllCost('per-player');


    const totalExpenseMoney = document.getElementById('player-expenses');
    const totalExpenseMoneyString = totalExpenseMoney.innerText;
    const totalExpenseMoneyNumber = parseInt(totalExpenseMoneyString);
    


    if (isNaN(getPerPlayerNumber)) {
        alert("Please enter the number")
    }
    else {


        const totalPlayerExpense = getPerPlayerNumber * playerArray.length;
        totalExpenseMoney.innerText = totalPlayerExpense;
        // console.log(totalPlayerExpense)

        // console.log(totalExpense);
        // return totalPlayerExpense;

    }


})


// calclulation total play in the cost 
document.getElementById("btn-calculate-total").addEventListener('click', function () {

    // player expense

    const playerNeededMoney = document.getElementById('player-expenses');
    const playerNeedMoneyString = playerNeededMoney.innerText;
    const playerNeedMoneyNumber = parseInt(playerNeedMoneyString);
    console.log(playerNeedMoneyNumber);




    // manager Expense

    const getManagerCost = updateAllCost('manager-field');

    const managerField = document.getElementById('manager-field');
    const getManagerFieldString = managerField.value;
    const managerFieldExpense = parseInt(getManagerFieldString);
    console.log(managerFieldExpense);


    // coach expense

    const getCoachCost = document.getElementById('coach-field');
    const coashfildString = getCoachCost.value
    const coashfildNumber =  parseInt(coashfildString);

     console.log(coashfildNumber);


    const ourFinalResult = document.getElementById('total-sum');
    ourFinalResult.innerText = playerNeedMoneyNumber + managerFieldExpense + coashfildNumber;
/*     const outFinalResultString = ourFinalResult.innerText;
    const ourFinalResultNumber = parseInt(outFinalResultString);

 */
/*     if (isNaN(getManagerCost) || isNaN(getCoachCost)) {
        alert("Please enter the number")
    }
    else {
        const wholeExpenses = playerNeededMoney + getManagerCost + getCoachCost;
        // console.log(wholeExpenses);



    } */
    const wholeExpenses = playerNeededMoney + getManagerCost + getCoachCost;
})