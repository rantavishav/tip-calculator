
var totalBill = 0;
var totalPeople = 0; 
var tipSelected = 0;

// Function To Check Whether Value is Numeric Or Not (Return Bollean)
function isNumeric(num){
    return (!isNaN(num) && isFinite(num))
  }

// Function Responsible to calc. Tip/Person and render it on browser
const tipPerPerson = () => {
    const totalTip = totalBill * (tipSelected/100);
    const tipPerPersonNode = document.getElementById("total-tip-per-person");  
    
    if(isNumeric((totalTip / totalPeople).toFixed(2)) ){
        totalBillPerPerson(totalTip);
        return tipPerPersonNode.innerText=`$${(totalTip / totalPeople).toFixed(2)}`;
    };
}

// Function Responsible to calc. TotalBill/Person and render it on browser
const totalBillPerPerson = (totalTip) => {
    const totalPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2);
    const amountPerPerson = document.getElementById("total-amount-per-person");

    if(isNumeric(totalPerPerson)){
        return amountPerPerson.innerHTML = `$${totalPerPerson}`;
    }
}

// Function Used to handle Input Value of Bill
const billInput = () => {
    totalBill = Number(document.getElementById("bill-charge").value);
    // Check For Valid Input 
    if(totalBill <= 0){
        document.getElementById("bill-error-message").style.display = "block";
    }else{
        document.getElementById("bill-error-message").style.display = "none";
        tipPerPerson();
    }
    
}

// Function Used to handle Input Value of Selected Tip
const tipInput = (event) => {
    // Find And replace the Active Class in response to button Clicked
    var tipNode = document.getElementsByClassName("tip-value-active")[0];
    if(tipNode !== undefined){
        tipNode.classList.remove("tip-value-active");
    }
    event.target.className += " tip-value-active";
    
    tipSelected = Number(event.target.value);
    // Check for valid Input
    if(tipSelected < 0){
        document.getElementById("tip-error-message").style.display = "block"; 
    }else{
        document.getElementById("tip-error-message").style.display = "none";
        tipPerPerson();
    }
}

// Function Used to handle Input Value of Number of People
const peopleInput = (event) => {
    totalPeople = Number(event.target.value);
    // Check for valid Input
    if(totalPeople <= 0){
        document.getElementById("people-error-message").style.display = "block";
    }else{
        document.getElementById("people-error-message").style.display = "none";
        tipPerPerson();
    }
    
}

// Function Used to handle Reset Button
const resetEverthing = () => {
    // Reset Every Input Field
    const inputNodeList = document.getElementsByTagName("INPUT");
    for (const node of inputNodeList) {
        node.value =''     
    }

    // Reset Values to Default
    totalBill = 0;
    totalPeople = 0; 
    tipSelected = 0;

    // Remove Active Class From Tip section
    const node = document.getElementsByClassName("tip-value-active")[0];
    if(node !== undefined){
        node.classList.remove("tip-value-active");
    }

    //Reset All Error Messages
    const errorNodeList = document.getElementsByClassName("error-message");
    for (const node of errorNodeList) {
        node.style.display = "none";
    }
    
    // Rest All the Total Amount Displayed
    document.getElementById("total-tip-per-person").innerText = "$0.00";
    document.getElementById("total-amount-per-person").innerText = "$0.00";


}