//Vanishing loginPage
const getSubmitBtn= document.getElementById("submitBtn");
 getSubmitBtn.addEventListener('click', function() {

        const afterClick= document.getElementById('loginPage');
        afterClick.style.display="none";
//display transaction Area
        const transactionArea= document.getElementById('transactionArea');
        transactionArea.style.display="block";
     
 })

//  function adder(id,spanId){
//     const getById = document.getElementById(id).value;
//     const ParseThatValue = parseFloat(getById);
//     const getInnerText = document.getElementById(spanid).innerText;
//     const parseThatText =parseFloat(getInnerText);
//     const total = ParseThatValue+parseThatText;
//     document.getElementById(spanId).innerText=total;

//deposit button
document.getElementById("depositAmount").value=0;
 const depositbtn=document.getElementById("depositbtn").addEventListener("click",function(){
    
     const captureDepositAmount =document.getElementById("depositAmount").value;
     const depositAmountNumber = parseFloat(captureDepositAmount);
     const capturCurrentAmount =document.getElementById("currentdeposit").innerText;
     const currentAmountNumber =parseFloat(capturCurrentAmount);
     const totalDeposit=depositAmountNumber+currentAmountNumber;
     document.getElementById("currentdeposit").innerText=totalDeposit;
     document.getElementById("depositAmount").value=0;
//balance added
     const getBalanceId=document.getElementById("currentbalance").innerText;
     const parseCurrentBalance =parseFloat(getBalanceId);
     const totalBalance= parseCurrentBalance+depositAmountNumber;
     document.getElementById("currentbalance").innerText=totalBalance;
 })   


//WithdrawButton
document.getElementById("withdrawAmount").value=0;
const WithdrawButton = document.getElementById("withdrawbtn").addEventListener("click",function(){
  
    const getWithdrawInput  = document.getElementById("withdrawAmount").value;
    const parseInput = parseFloat(getWithdrawInput);
    const getspanId = document.getElementById('currentwithdraw').innerText;
    const parseSpanId = parseFloat(getspanId);
    const totalWithdraw = parseInput+parseSpanId;

    document.getElementById('currentwithdraw').innerText=totalWithdraw;
    
   
    //balance added
    const getBalanceId1=document.getElementById("currentbalance").innerText;
    const parseCurrentBalance1 =parseFloat(getBalanceId1);
    const getWithdrawInput1  = document.getElementById("withdrawAmount").value;
    const parseInput1 = parseFloat(getWithdrawInput1);
    const totalBalance1 = parseCurrentBalance1-parseInput1;

    document.getElementById("currentbalance").innerText=totalBalance1;

    document.getElementById("withdrawAmount").value=0;
})