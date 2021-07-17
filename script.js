function compute()
{
    var principal = Number(document.getElementById("principal").value);
    if(principal<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var interest = principal*years*rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal+interest;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval +"%";
}

