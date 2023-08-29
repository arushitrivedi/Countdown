var countDownDate = new Date("Nov 12,2023").getTime();
var x=setInterval(function()
{
    var now = new Date().getTime();
    var distance=countDownDate-now;
    var days= Math.floor(distance/ (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60)); 
    var seconds = Math.floor((distance % (1000*60)) / 1000); 
    document.getElementById("root").innerHTML= days + "days " + hours + "hrs "+ minutes+"mins "+seconds+"sec to go..";
    if (distance< 0) 
    {      
        clearInterval(x);        
        document.getElementById("root").innerHTML = "Time Expired";
    }
},1000);
