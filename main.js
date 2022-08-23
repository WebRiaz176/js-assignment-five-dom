// click the button and put the player name 
const orderForList = document.querySelector('.order-list');

function countChild(){
  const x = orderForList.children.length;
  return x ;
}


const button = document.querySelectorAll('.player-select');


        for(let i = 0; i<9; i++){

            let getAllButton = button[i];

            getAllButton.addEventListener('click',function(){
            const parent = this.parentNode;
            const firstChild = parent.firstElementChild;
            const getName = firstChild.innerHTML;

          const x = countChild();
          if( x < 5){

            const listItem = document.createElement('li');
        
            listItem.innerText=getName;
            orderForList.appendChild(listItem);

             //disable selected button 
             getAllButton.disabled = "disabled";
             getAllButton.classList.add('disable-button');

          }

          else{
            alert('You cannot select more than 5 ')
          }
                    
   });
 }

 //get input field amount function

function getFieldAmount(fieldId){

    const perPlayerField = document.getElementById(fieldId);
    const perPlayerFieldString = perPlayerField.value;
    const perPlayerAmount = parseInt(perPlayerFieldString);
    perPlayerField.value='';
    return perPlayerAmount;

}

//get expenses and total amount function

function getAmount(AmountId){
    const amountField = document.getElementById(AmountId);
    const amountFieldString = amountField.innerText;
    const amount = parseInt(amountFieldString);
    return amount;
}

//get total player expenses 

document.getElementById('calculate-btn').addEventListener('click',function(){
        const x = getFieldAmount('per-player-field');
        const countElement = countChild();

        const totalPlayerExpenses = x * countElement;

        document.getElementById('expenses-amount').innerText = totalPlayerExpenses;
});

 
//get final total expenses 

 document.getElementById('total-calculate').addEventListener('click',function(){

        const managerAmount = getFieldAmount('manager-field');
        const coachAmount = getFieldAmount('coach-field');
        const expensesTotalAmount = getAmount('expenses-amount');
        const managerCoachTotal = managerAmount + coachAmount;
        const alltotalAmount = managerCoachTotal + expensesTotalAmount;

        document.getElementById('total-amount').innerText=alltotalAmount;
    
});