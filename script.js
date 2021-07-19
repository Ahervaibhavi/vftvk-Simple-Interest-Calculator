function compute()
{    var principal = parseInt(document.getElementById("principal").value);
     var rate = parseInt(document.getElementById("rate").value);
     var years = parseInt(document.getElementById("years").value);
     var yearinfuture = new Date().getFullYear()+ years;
     var interest = principal * years * rate / 100;
     document.getElementById("result").innerHTML= "Interest : If you deposit<mark> "+principal+"</mark>,<br/>"+ 
     "at an interest rate of <mark>" + rate +"</mark>,<br/>" + 
     "You will receive an amount of <mark>" + interest + "</mark>,<br/>"
     + "in the year <mark>" + yearinfuture + "</mark>";    
}

function updateRate() 
{
    document.getElementById("ratespan").innerText = document.getElementById("rate").value;
}

function validation()
{
    var principal = document.getElementById("principal").value;
   
    if (principal < 1 && principal =="")
    {
        alert=("Enter a positive number");

        document.getElementById("principal").focus();
    }
}
     

        
